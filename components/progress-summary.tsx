"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Target, Clock, Award } from "lucide-react"

const overviewStats = [
  {
    title: "Overall Progress",
    value: "64%",
    target: "70-80%",
    progress: 64,
    icon: TrendingUp,
    trend: "+5% this week",
    color: "text-blue-600",
  },
  {
    title: "Target Score",
    value: "72",
    target: "70-80 marks",
    progress: 72,
    icon: Target,
    trend: "On track",
    color: "text-green-600",
  },
  {
    title: "Study Hours",
    value: "156h",
    target: "200h target",
    progress: 78,
    icon: Clock,
    trend: "8h this week",
    color: "text-purple-600",
  },
  {
    title: "Streak",
    value: "12 days",
    target: "Best: 18 days",
    progress: 67,
    icon: Award,
    trend: "Keep going!",
    color: "text-orange-600",
  },
]

export function ProgressSummary() {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Progress Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {overviewStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="glass border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-audiowide font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mb-2">{stat.target}</p>
                  <Progress value={stat.progress} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{stat.trend}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
