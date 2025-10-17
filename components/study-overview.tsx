"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const subjects = [
  { name: "Engineering Mathematics", progress: 75, status: "strong", weightage: "13%" },
  { name: "Networks, Signals & Systems", progress: 60, status: "pending", weightage: "15%" },
  { name: "Electronic Devices", progress: 85, status: "completed", weightage: "12%" },
  { name: "Analog Circuits", progress: 45, status: "weak", weightage: "13%" },
  { name: "Digital Circuits", progress: 70, status: "strong", weightage: "12%" },
  { name: "Control Systems", progress: 55, status: "pending", weightage: "10%" },
  { name: "Communications", progress: 40, status: "weak", weightage: "10%" },
  { name: "Electromagnetics", progress: 65, status: "pending", weightage: "7%" },
]

export function StudyOverview() {
  const overallProgress = Math.round(subjects.reduce((acc, subject) => acc + subject.progress, 0) / subjects.length)

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">Subject Progress Overview</CardTitle>
        <CardDescription>Overall Progress: {overallProgress}% • Target: 70-80 marks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects.map((subject) => (
          <div key={subject.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{subject.name}</span>
                <Badge variant="outline" className={`text-xs gate-${subject.status}`}>
                  {subject.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{subject.progress}%</span>
                <span className="text-xs">({subject.weightage})</span>
              </div>
            </div>
            <Progress value={subject.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
