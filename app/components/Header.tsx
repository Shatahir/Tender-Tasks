'use client';

import { Bell, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  view: 'list' | 'board';
  onViewChange: (view: 'list' | 'board') => void;
  onShowDetails: () => void;
  onShowColumns: () => void;
}

export function Header({ onSearch, view, onViewChange, onShowDetails, onShowColumns }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-background border-b">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Tender Tasks</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for Tenders"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <button className="p-2 hover:bg-accent rounded-full">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-accent rounded-full">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg ${
              view === 'list'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-accent'
            }`}
            onClick={() => onViewChange('list')}
          >
            List View
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              view === 'board'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-accent'
            }`}
            onClick={() => onViewChange('board')}
          >
            Board View
          </button>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            className="px-4 py-2 rounded-lg border hover:bg-accent w-full sm:w-auto"
            onClick={onShowDetails}
          >
            View Tender Details
          </button>
          <button 
            className="px-4 py-2 rounded-lg border hover:bg-accent w-full sm:w-auto"
            onClick={onShowColumns}
          >
            Columns
          </button>
        </div>
      </div>
    </div>
  );
}