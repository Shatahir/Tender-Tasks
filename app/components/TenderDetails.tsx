'use client';

import { Task } from '../types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Paperclip, Calendar, User } from 'lucide-react';

interface TenderDetailsProps {
  tasks: Task[];
  onClose: () => void;
}

export function TenderDetails({ tasks, onClose }: TenderDetailsProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Tender Details</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-6">
            {tasks.map((task) => (
              <div key={task.id} className="bg-card p-6 rounded-lg space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{task.title}</h3>
                  <Badge
                    variant="secondary"
                    className={`
                      ${task.status === 'in-progress' ? 'bg-blue-500/10 text-blue-500' : ''}
                      ${task.status === 'not-started' ? 'bg-orange-500/10 text-orange-500' : ''}
                      ${task.status === 'todo' ? 'bg-yellow-500/10 text-yellow-500' : ''}
                    `}
                  >
                    {task.status === 'in-progress'
                      ? 'In Progress'
                      : task.status === 'not-started'
                      ? 'Not Started'
                      : 'To Do'}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground">{task.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                      </Avatar>
                      <span>{task.assignee.name}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{task.dueDate}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span>{task.commentsCount} Comments</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Paperclip className="h-4 w-4 text-muted-foreground" />
                    <span>{task.attachmentsCount} Attachments</span>
                  </div>
                  
                  <Badge
                    variant={task.priority === 'high' ? 'destructive' : 'secondary'}
                    className="capitalize"
                  >
                    {task.priority} Priority
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}