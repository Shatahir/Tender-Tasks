'use client';

import { MoreHorizontal, MessageSquare, Paperclip } from 'lucide-react';
import { Task } from '../types';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-background/50 p-4 rounded-lg space-y-4 shadow-lg hover:shadow-xl transition-all duration-200 border border-accent/50 hover:border-accent">
      <div className="flex items-start justify-between">
        <Badge
          variant="secondary"
          className={`
            ${task.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400' : ''}
            ${task.status === 'not-started' ? 'bg-orange-500/10 text-orange-400' : ''}
          `}
        >
          {task.status === 'in-progress' ? 'In Progress' : 'Not Started'}
        </Badge>
        <button className="p-1 hover:bg-accent rounded-full transition-colors">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      
      <h3 className="font-semibold text-primary">{task.title}</h3>
      <p className="text-sm text-muted-foreground">{task.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Assignee</span>
          <Avatar className="h-6 w-6">
            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
          </Avatar>
        </div>
        <Badge variant={task.priority === 'high' ? 'destructive' : 'secondary'} className="capitalize">
          {task.priority}
        </Badge>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4" />
          <span>{task.commentsCount} Comments</span>
        </div>
        <div className="flex items-center gap-1">
          <Paperclip className="h-4 w-4" />
          <span>{task.attachmentsCount} Attachments</span>
        </div>
        <span>{task.dueDate}</span>
      </div>
    </div>
  );
}