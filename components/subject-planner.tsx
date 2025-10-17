"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Plus } from "lucide-react"

const subjects = [
  {
    name: "Engineering Mathematics",
    progress: 75,
    weeklyHours: 8,
    targetHours: 10,
    status: "strong",
    nextTopic: "Probability & Statistics",
  },
  {
    name: "Analog Circuits",
    progress: 45,
    weeklyHours: 6,
    targetHours: 12,
    status: "weak",
    nextTopic: "Op-Amp Applications",
  },
  {
    name: "Digital Circuits",
    progress: 70,
    weeklyHours: 7,
    targetHours: 8,
    status: "strong",
    nextTopic: "Memory Devices",
  },
  {
    name: "Control Systems",
    progress: 55,
    weeklyHours: 4,
    targetHours: 8,
    status: "pending",
    nextTopic: "Stability Analysis",
  },
]

export function SubjectPlanner() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Subject Planner
        </CardTitle>
        <CardDescription>Weekly study allocation and progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index} className="space-y-3 p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{subject.name}</span>
                <Badge variant="outline" className={`text-xs gate-${subject.status}`}>
                  {subject.status}
                </Badge>
              </div>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progress: {subject.progress}%</span>
                <span>
                  Hours: {subject.weeklyHours}/{subject.targetHours}
                </span>
              </div>
              <Progress value={subject.progress} className="h-2" />
              <Progress value={(subject.weeklyHours / subject.targetHours) * 100} className="h-1" />
            </div>

            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Next:</span> {subject.nextTopic}
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Plus className="h-4 w-4 mr-2" />
          Add Subject
        </Button>
      </CardContent>
    </Card>
  )
}
