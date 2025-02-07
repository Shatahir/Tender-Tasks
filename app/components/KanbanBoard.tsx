'use client';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import { Task, Column } from '../types';
import { TaskCard } from './TaskCard';
import { Plus } from 'lucide-react';

interface KanbanBoardProps {
  tasks: Task[];
}

export function KanbanBoard({ tasks }: KanbanBoardProps) {
  const [boards, setBoards] = useState<Column[]>([]);

  useEffect(() => {
    const columns: Column[] = [
      {
        id: 'todo',
        title: 'To - Do List',
        tasks: tasks.filter(task => task.status === 'todo'),
      },
      {
        id: 'in-progress',
        title: 'In Progress',
        tasks: tasks.filter(task => task.status === 'in-progress'),
      },
      {
        id: 'not-started',
        title: 'Not Started',
        tasks: tasks.filter(task => task.status === 'not-started'),
      },
    ];
    setBoards(columns);
  }, [tasks]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = boards.find(col => col.id === source.droppableId);
      const destColumn = boards.find(col => col.id === destination.droppableId);
      
      if (!sourceColumn || !destColumn) return;

      const sourceTasks = [...sourceColumn.tasks];
      const destTasks = [...destColumn.tasks];
      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, {
        ...removed,
        status: destination.droppableId as Task['status'],
      });

      setBoards(boards.map(col => {
        if (col.id === source.droppableId) {
          return { ...col, tasks: sourceTasks };
        }
        if (col.id === destination.droppableId) {
          return { ...col, tasks: destTasks };
        }
        return col;
      }));
    } else {
      const column = boards.find(col => col.id === source.droppableId);
      if (!column) return;

      const copiedTasks = [...column.tasks];
      const [removed] = copiedTasks.splice(source.index, 1);
      copiedTasks.splice(destination.index, 0, removed);

      setBoards(boards.map(col => {
        if (col.id === source.droppableId) {
          return { ...col, tasks: copiedTasks };
        }
        return col;
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col md:flex-row gap-4 p-4 overflow-x-auto min-h-[calc(100vh-8rem)]">
        {boards.map(board => (
          <div key={board.id} className="flex-1 min-w-[300px] max-w-md md:max-w-none bg-accent/40 p-4 rounded-lg shadow-xl backdrop-blur-sm border border-accent">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full
                  ${board.id === 'todo' ? 'bg-yellow-500 shadow-yellow-500/50' : ''}
                  ${board.id === 'in-progress' ? 'bg-blue-500 shadow-blue-500/50' : ''}
                  ${board.id === 'not-started' ? 'bg-orange-500 shadow-orange-500/50' : ''}
                `} />
                <h2 className="font-semibold text-primary">{board.title}</h2>
                <span className="text-sm text-muted-foreground">
                  {board.tasks.length}
                </span>
              </div>
              <button className="p-1 hover:bg-accent rounded-lg transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <Droppable droppableId={board.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-4"
                >
                  {board.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}