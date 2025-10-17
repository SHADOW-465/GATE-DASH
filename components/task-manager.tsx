"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, GripVertical, Check, X, RotateCcw } from "lucide-react"

const initialTasks = [
  {
    id: 1,
    title: "Complete Op-Amp Applications",
    subject: "Analog Circuits",
    type: "Theory",
    status: "pending",
    priority: "high",
  },
  {
    id: 2,
    title: "Solve 15 PYQs on Sequential Logic",
    subject: "Digital Circuits",
    type: "PYQs",
    status: "completed",
    priority: "medium",
  },
  {
    id: 3,
    title: "Revise Stability Analysis formulas",
    subject: "Control Systems",
    type: "Revision",
    status: "revise-again",
    priority: "high",
  },
  {
    id: 4,
    title: "Mock Test - Full Syllabus #13",
    subject: "Full Syllabus",
    type: "Mock Test",
    status: "pending",
    priority: "high",
  },
]

export function TaskManager() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState("")

  const updateTaskStatus = (taskId: number, newStatus: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "gate-completed"
      case "pending":
        return "gate-pending"
      case "revise-again":
        return "gate-weak"
      default:
        return "gate-pending"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500"
      case "medium":
        return "border-l-yellow-500"
      case "low":
        return "border-l-green-500"
      default:
        return "border-l-gray-500"
    }
  }

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">Task Manager</CardTitle>
        <CardDescription>Drag and drop tasks to organize your study schedule</CardDescription>
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
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 ${getPriorityColor(task.priority)} border border-border/50`}
            >
              <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{task.title}</span>
                  <Badge variant="outline" className={`text-xs ${getStatusColor(task.status)}`}>
                    {task.status.replace("-", " ")}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  {task.type} • {task.subject}
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => updateTaskStatus(task.id, "completed")}
                  className="h-8 w-8 p-0"
                >
                  <Check className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => updateTaskStatus(task.id, "revise-again")}
                  className="h-8 w-8 p-0"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => updateTaskStatus(task.id, "pending")}
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
  )
}
