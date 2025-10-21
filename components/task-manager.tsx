"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, GripVertical, Check, X, RotateCcw } from "lucide-react";
import { useState } from "react";

interface TaskManagerProps {
  tasks: Doc<"tasks">[] | undefined;
}

export function TaskManager({ tasks }: TaskManagerProps) {
  const updateTaskStatus = useMutation(api.tasks.updateTaskStatus);
  const deleteTask = useMutation(api.tasks.deleteTask);
  const [newTask, setNewTask] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "gate-completed";
      case "pending":
        return "gate-pending";
      case "revise-again":
        return "gate-weak";
      default:
        return "gate-pending";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">Task Manager</CardTitle>
        <CardDescription>
          Drag and drop tasks to organize your study schedule
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add new study task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1"
          />
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="theory">Theory</SelectItem>
              <SelectItem value="pyqs">PYQs</SelectItem>
              <SelectItem value="mock">Mock Test</SelectItem>
              <SelectItem value="revision">Revision</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-3">
          {tasks?.map((task) => (
            <div
              key={task._id}
              className={`flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 ${getPriorityColor(
                task.priority
              )} border border-border/50`}
            >
              <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{task.title}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs ${getStatusColor(task.status)}`}
                  >
                    {task.status.replace("-", " ")}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  {task.type}
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    updateTaskStatus({
                      taskId: task._id,
                      status: "completed",
                    })
                  }
                  className="h-8 w-8 p-0"
                >
                  <Check className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    updateTaskStatus({
                      taskId: task._id,
                      status: "revise-again",
                    })
                  }
                  className="h-8 w-8 p-0"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteTask({ taskId: task._id })}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
