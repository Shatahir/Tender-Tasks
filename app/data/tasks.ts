import { Task } from '../types';

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Hospital Construction Tender',
    description: 'New hospital construction project in downtown area with 500-bed capacity',
    status: 'todo',
    priority: 'high',
    assignee: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    dueDate: '22 Dec 24',
    commentsCount: 12,
    attachmentsCount: 3,
  },
  {
    id: '2',
    title: 'School Renovation Project',
    description: 'Complete renovation of public school including new facilities',
    status: 'in-progress',
    priority: 'medium',
    assignee: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
    },
    dueDate: '15 Jan 25',
    commentsCount: 8,
    attachmentsCount: 5,
  },
  {
    id: '3',
    title: 'Bridge Construction',
    description: 'New bridge construction connecting east and west districts',
    status: 'not-started',
    priority: 'high',
    assignee: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
    },
    dueDate: '30 Mar 25',
    commentsCount: 4,
    attachmentsCount: 2,
  },
  {
    id: '4',
    title: 'Park Development',
    description: 'Urban park development with recreational facilities',
    status: 'todo',
    priority: 'low',
    assignee: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
    },
    dueDate: '10 Feb 25',
    commentsCount: 6,
    attachmentsCount: 4,
  },
  {
    id: '5',
    title: 'Road Maintenance',
    description: 'Major road maintenance and repair project',
    status: 'in-progress',
    priority: 'medium',
    assignee: {
      name: 'Tom Brown',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    },
    dueDate: '05 Jan 25',
    commentsCount: 9,
    attachmentsCount: 6,
  },
  {
    id: '6',
    title: 'Airport Terminal Expansion',
    description: 'International airport terminal expansion project',
    status: 'not-started',
    priority: 'high',
    assignee: {
      name: 'Lisa Chen',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face',
    },
    dueDate: '20 Apr 25',
    commentsCount: 3,
    attachmentsCount: 7,
  }
];