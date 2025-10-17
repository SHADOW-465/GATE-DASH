"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, Clock, TrendingUp, AlertTriangle } from "lucide-react"

const testStats = [
  {
    title: "Mock Tests Taken",
    value: "12",
    target: "20 target",
    progress: 60,
    icon: Target,
    trend: "+2 this week",
    color: "text-blue-600",
  },
  {
    title: "Average Score",
    value: "68/100",
    target: "Target: 70+",
    progress: 68,
    icon: TrendingUp,
    trend: "+3 from last",
    color: "text-green-600",
  },
  {
    title: "Time Management",
    value: "2h 45m",
    target: "Target: 3h",
    progress: 92,
    icon: Clock,
    trend: "Improving",
    color: "text-purple-600",
  },
  {
    title: "Weak Areas",
    value: "3",
    target: "Focus needed",
    progress: 25,
    icon: AlertTriangle,
    trend: "Analog, Comm",
    color: "text-red-600",
  },
]

export function TestOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {testStats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="glass border-0 shadow-xl">
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
  )
}
