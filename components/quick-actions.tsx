"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, ListPlus, BrainCircuit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function AddTaskDialog() {
  const createTask = useMutation(api.tasks.createTask);
  const currentUser = useQuery(api.users.getCurrentUser);
  const subjects = useQuery(
    api.subjects.getSubjects,
    currentUser ? { userId: currentUser._id } : "skip"
  );
  const [title, setTitle] = useState("");
  const [subjectId, setSubjectId] = useState("");

  const handleSubmit = () => {
    createTask({
      title,
      subjectId,
      type: "Theory",
      status: "pending",
      priority: "medium",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <ListPlus className="mr-2 h-4 w-4" />
          Add New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Add a new study task to your schedule.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-name" className="text-right">
              Task
            </Label>
            <Input
              id="task-name"
              placeholder="e.g., Solve PYQs"
              className="col-span-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subject" className="text-right">
              Subject
            </Label>
            <Select onValueChange={setSubjectId}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects?.map((subject) => (
                  <SelectItem key={subject._id} value={subject._id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Add Task
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export function QuickActions() {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button variant="outline" className="w-full justify-start">
          <Timer className="mr-2 h-4 w-4" />
          Start Pomodoro
        </Button>
        <AddTaskDialog />
        <Button variant="outline" className="w-full justify-start">
          <BrainCircuit className="mr-2 h-4 w-4" />
          Practice Weak Topics
        </Button>
      </CardContent>
    </Card>
  );
}
