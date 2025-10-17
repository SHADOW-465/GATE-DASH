"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plus, Target, Calendar, CheckCircle2 } from "lucide-react"

const goals = [
  {
    title: "Complete Analog Circuits",
    deadline: "Jan 20, 2025",
    progress: 75,
    type: "Subject",
    priority: "High",
    daysLeft: 5,
  },
  {
    title: "Score 75+ in Mock Tests",
    deadline: "Jan 25, 2025",
    progress: 60,
    type: "Performance",
    priority: "High",
    daysLeft: 10,
  },
  {
    title: "Study 40h per week",
    deadline: "Ongoing",
    progress: 85,
    type: "Habit",
    priority: "Medium",
    daysLeft: null,
  },
  {
    title: "Revise all formulas",
    deadline: "Feb 1, 2025",
    progress: 30,
    type: "Revision",
    priority: "Medium",
    daysLeft: 17,
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "gate-weak"
    case "Medium":
      return "gate-pending"
    case "Low":
      return "gate-completed"
    default:
      return "gate-pending"
  }
}

export function StudyGoals() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Target className="h-5 w-5" />
          Study Goals
        </CardTitle>
        <CardDescription>Track your GATE preparation milestones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{goal.title}</span>
                  <Badge variant="outline" className={`text-xs ${getPriorityColor(goal.priority)}`}>
                    {goal.priority}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{goal.deadline}</span>
                  {goal.daysLeft && (
                    <span className={goal.daysLeft <= 7 ? "text-red-600" : ""}>• {goal.daysLeft} days left</span>
                  )}
                </div>
              </div>
              {goal.progress === 100 && <CheckCircle2 className="h-4 w-4 text-green-600" />}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Plus className="h-4 w-4 mr-2" />
          Add New Goal
        </Button>

        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="font-medium text-sm text-green-900 dark:text-green-100">Goal Completion Rate</span>
          </div>
          <div className="text-2xl font-audiowide font-bold text-green-600 mb-1">67%</div>
          <p className="text-xs text-green-700 dark:text-green-300">
            You're on track to meet your GATE preparation goals!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
