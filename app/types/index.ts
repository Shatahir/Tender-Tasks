export type Status = 'todo' | 'in-progress' | 'not-started';
export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate: string;
  commentsCount: number;
  attachmentsCount: number;
}

export interface Column {
  id: Status;
  title: string;
  tasks: Task[];
}