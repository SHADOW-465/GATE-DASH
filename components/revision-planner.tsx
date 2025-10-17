"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, RotateCcw } from "lucide-react"

const revisionSchedule = [
  {
    date: "Today",
    sessions: [
      { time: "19:00", topic: "Op-Amp Applications", type: "weak", duration: "30 min" },
      { time: "19:30", topic: "Laplace Transforms", type: "review", duration: "15 min" },
    ],
  },
  {
    date: "Tomorrow",
    sessions: [
      { time: "18:00", topic: "Modulation Techniques", type: "weak", duration: "45 min" },
      { time: "20:00", topic: "Logic Gates", type: "maintenance", duration: "10 min" },
    ],
  },
  {
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    sessions: [{ time: "17:00", topic: "Control Systems", type: "review", duration: "25 min" }],
  },
]

const getSessionColor = (type: string) => {
  switch (type) {
    case "weak":
      return "gate-weak"
    case "review":
      return "gate-pending"
    case "maintenance":
      return "gate-completed"
    default:
      return "gate-pending"
  }
}

export function RevisionPlanner() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <RotateCcw className="h-5 w-5" />
          Revision Planner
        </CardTitle>
        <CardDescription>Spaced repetition schedule</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {revisionSchedule.map((day, dayIndex) => (
          <div key={dayIndex} className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-sm">{day.date}</span>
            </div>
            <div className="space-y-2 ml-6">
              {day.sessions.map((session, sessionIndex) => (
                <div
                  key={sessionIndex}
                  className="flex items-center justify-between p-2 rounded bg-muted/20 border border-border/30"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs font-medium">{session.time}</span>
                      <Badge variant="outline" className={`text-xs ${getSessionColor(session.type)}`}>
                        {session.type}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {session.topic} • {session.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <RotateCcw className="h-4 w-4 mr-2" />
          Generate New Schedule
        </Button>
      </CardContent>
    </Card>
  )
}
