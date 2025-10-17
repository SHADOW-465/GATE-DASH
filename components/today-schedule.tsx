"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, FileText, Target } from "lucide-react"

const todayTasks = [
  {
    time: "09:00 - 11:00",
    type: "Theory",
    subject: "Analog Circuits",
    topic: "Op-Amp Applications",
    status: "pending",
    icon: BookOpen,
  },
  {
    time: "11:30 - 12:30",
    type: "PYQs",
    subject: "Digital Circuits",
    topic: "Sequential Logic",
    status: "completed",
    icon: FileText,
  },
  {
    time: "14:00 - 16:00",
    type: "Mock Test",
    subject: "Full Syllabus",
    topic: "Practice Test #12",
    status: "pending",
    icon: Target,
  },
  {
    time: "19:00 - 20:00",
    type: "Revision",
    subject: "Control Systems",
    topic: "Stability Analysis",
    status: "pending",
    icon: BookOpen,
  },
]

export function TodaySchedule() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Today's Schedule
        </CardTitle>
        <CardDescription>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {todayTasks.map((task, index) => {
          const Icon = task.icon
          return (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <Icon className="h-4 w-4 mt-1 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{task.time}</span>
                  <Badge variant="outline" className={`text-xs gate-${task.status}`}>
                    {task.status}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{task.type}</span> • {task.subject}
                </div>
                <div className="text-xs text-muted-foreground">{task.topic}</div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
