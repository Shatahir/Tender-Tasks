'use client';

import { Header } from './components/Header';
import { KanbanBoard } from './components/KanbanBoard';
import { ListView } from './components/ListView';
import { TenderDetails } from './components/TenderDetails';
import { ColumnSettings } from './components/ColumnSettings';
import { useState } from 'react';
import { tasks as initialTasks } from './data/tasks';
import { Task } from './types';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  const [view, setView] = useState<'list' | 'board'>('board');
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(initialTasks);
  const [showDetails, setShowDetails] = useState(false);
  const [showColumns, setShowColumns] = useState(false);

  const handleSearch = (query: string) => {
    const filtered = tasks.filter(
      task =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <div className="min-h-screen bg-background">
        <Header
          onSearch={handleSearch}
          view={view}
          onViewChange={setView}
          onShowDetails={() => setShowDetails(true)}
          onShowColumns={() => setShowColumns(true)}
        />
        {view === 'board' ? (
          <KanbanBoard tasks={filteredTasks} />
        ) : (
          <ListView tasks={filteredTasks} />
        )}
        {showDetails && (
          <TenderDetails
            tasks={tasks}
            onClose={() => setShowDetails(false)}
          />
        )}
        {showColumns && (
          <ColumnSettings
            onClose={() => setShowColumns(false)}
          />
        )}
      </div>
    </ThemeProvider>
  );
}