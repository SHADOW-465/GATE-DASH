"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, BookOpen, Target } from "lucide-react"

const quickSessions = [
  {
    title: "15-Min Formula Drill",
    subject: "Mathematics",
    topics: ["Laplace", "Fourier", "Z-Transform"],
    duration: "15 min",
    type: "formulas",
    icon: Zap,
  },
  {
    title: "Op-Amp Quick Review",
    subject: "Analog Circuits",
    topics: ["Configurations", "Frequency Response"],
    duration: "10 min",
    type: "concepts",
    icon: BookOpen,
  },
  {
    title: "Logic Gates Flash",
    subject: "Digital Circuits",
    topics: ["Truth Tables", "Boolean Algebra"],
    duration: "8 min",
    type: "practice",
    icon: Target,
  },
  {
    title: "Control Systems Basics",
    subject: "Control Systems",
    topics: ["Stability", "Root Locus"],
    duration: "12 min",
    type: "theory",
    icon: BookOpen,
  },
]

export function QuickRevision() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Quick Revision
        </CardTitle>
        <CardDescription>15-minute focused revision sessions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {quickSessions.map((session, index) => {
          const Icon = session.icon
          return (
            <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border/50">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-sm">{session.title}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {session.duration}
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground mb-2">{session.subject}</div>
              <div className="flex flex-wrap gap-1 mb-3">
                {session.topics.map((topic, topicIndex) => (
                  <Badge key={topicIndex} variant="outline" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
              <Button size="sm" className="w-full">
                Start Session
              </Button>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
