'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface ColumnSettingsProps {
  onClose: () => void;
}

export function ColumnSettings({ onClose }: ColumnSettingsProps) {
  const columns = [
    { id: 'title', label: 'Title', default: true },
    { id: 'status', label: 'Status', default: true },
    { id: 'priority', label: 'Priority', default: true },
    { id: 'assignee', label: 'Assignee', default: true },
    { id: 'dueDate', label: 'Due Date', default: true },
    { id: 'comments', label: 'Comments', default: true },
    { id: 'attachments', label: 'Attachments', default: true },
    { id: 'description', label: 'Description', default: false },
  ];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Column Settings</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4">
            {columns.map((column) => (
              <div key={column.id} className="flex items-center justify-between py-2">
                <Label htmlFor={column.id} className="flex-1">
                  {column.label}
                </Label>
                <Switch
                  id={column.id}
                  defaultChecked={column.default}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}