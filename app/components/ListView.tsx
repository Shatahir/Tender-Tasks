'use client';

import { Task } from '../types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Paperclip } from 'lucide-react';

interface ListViewProps {
  tasks: Task[];
}

export function ListView({ tasks }: ListViewProps) {
  return (
    <div className="p-4 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Attachments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">
                <div>
                  <div>{task.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {task.description}
                  </div>
                </div>
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <Badge
                  variant={task.priority === 'high' ? 'destructive' : 'secondary'}
                  className="capitalize"
                >
                  {task.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                  </Avatar>
                  <span className="text-sm">{task.assignee.name}</span>
                </div>
              </TableCell>
              <TableCell>{task.dueDate}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{task.commentsCount}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Paperclip className="h-4 w-4" />
                  <span>{task.attachmentsCount}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}