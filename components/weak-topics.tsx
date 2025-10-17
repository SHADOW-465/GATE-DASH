"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BookOpen, Target } from "lucide-react"

const weakTopics = [
  {
    topic: "Op-Amp Applications",
    subject: "Analog Circuits",
    accuracy: 45,
    attempts: 15,
    lastStudied: "2 days ago",
    priority: "high",
    improvement: -5,
  },
  {
    topic: "Modulation Techniques",
    subject: "Communications",
    accuracy: 38,
    attempts: 12,
    lastStudied: "1 day ago",
    priority: "high",
    improvement: -8,
  },
  {
    topic: "Stability Analysis",
    subject: "Control Systems",
    accuracy: 52,
    attempts: 18,
    lastStudied: "3 days ago",
    priority: "medium",
    improvement: 3,
  },
  {
    topic: "Sequential Circuits",
    subject: "Digital Circuits",
    accuracy: 58,
    attempts: 20,
    lastStudied: "1 week ago",
    priority: "low",
    improvement: 12,
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "gate-weak"
    case "medium":
      return "gate-pending"
    default:
      return "gate-strong"
  }
}

export function WeakTopics() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Weak Topics
        </CardTitle>
        <CardDescription>Auto-collected from test errors</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {weakTopics.map((topic, index) => (
          <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{topic.topic}</span>
                <Badge variant="outline" className={`text-xs ${getPriorityColor(topic.priority)}`}>
                  {topic.priority}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-xs">
                {topic.improvement > 0 ? (
                  <span className="text-green-600">+{topic.improvement}%</span>
                ) : (
                  <span className="text-red-600">{topic.improvement}%</span>
                )}
              </div>
            </div>

            <div className="text-xs text-muted-foreground mb-2">
              {topic.subject} • {topic.attempts} attempts • Last: {topic.lastStudied}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Progress value={topic.accuracy} className="h-2 flex-1" />
              <span className="text-xs text-muted-foreground w-12">{topic.accuracy}%</span>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                <BookOpen className="h-3 w-3 mr-1" />
                Study
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                <Target className="h-3 w-3 mr-1" />
                Practice
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
