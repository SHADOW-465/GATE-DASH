"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts"
import { BarChart3, TrendingUp, Clock, Zap } from "lucide-react"

const weeklyProductivity = [
  { day: "Mon", focusTime: 4.5, distractions: 2, efficiency: 85 },
  { day: "Tue", focusTime: 5.2, distractions: 1, efficiency: 92 },
  { day: "Wed", focusTime: 3.8, distractions: 4, efficiency: 70 },
  { day: "Thu", focusTime: 6.1, distractions: 1, efficiency: 95 },
  { day: "Fri", focusTime: 4.9, distractions: 3, efficiency: 78 },
  { day: "Sat", focusTime: 7.2, distractions: 0, efficiency: 98 },
  { day: "Sun", focusTime: 5.5, distractions: 2, efficiency: 88 },
]

const productivityMetrics = [
  {
    title: "Focus Score",
    value: 87,
    target: 90,
    trend: "+5%",
    description: "Average daily focus rating",
    icon: Zap,
  },
  {
    title: "Deep Work Hours",
    value: 32,
    target: 35,
    trend: "+3h",
    description: "This week vs last week",
    icon: Clock,
  },
  {
    title: "Distraction Rate",
    value: 15,
    target: 10,
    trend: "-2%",
    description: "Interruptions per hour",
    icon: BarChart3,
  },
  {
    title: "Efficiency Trend",
    value: 89,
    target: 85,
    trend: "+8%",
    description: "Study output per hour",
    icon: TrendingUp,
  },
]

export function ProductivityStats() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Productivity Analytics
        </CardTitle>
        <CardDescription>Focus patterns and efficiency metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          {productivityMetrics.map((metric, index) => {
            const Icon = metric.icon
            const isGood = metric.value >= metric.target
            return (
              <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{metric.title}</span>
                  </div>
                  <Badge variant="outline" className={isGood ? "gate-completed" : "gate-pending"}>
                    {metric.trend}
                  </Badge>
                </div>
                <div className="text-2xl font-audiowide font-bold mb-1">{metric.value}</div>
                <div className="text-xs text-muted-foreground mb-2">{metric.description}</div>
                <Progress
                  value={
                    metric.title === "Distraction Rate" ? 100 - metric.value : (metric.value / metric.target) * 100
                  }
                  className="h-2"
                />
              </div>
            )
          })}
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-sm">Weekly Focus Pattern</h3>
          <ChartContainer config={{}} className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyProductivity}>
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="focusTime" fill="#3b82f6" name="Focus Hours" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-sm">Efficiency Trend</h3>
          <ChartContainer config={{}} className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyProductivity}>
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="grid gap-3 md:grid-cols-3 text-center">
          <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="text-lg font-audiowide font-bold">37h</div>
            <div className="text-xs text-muted-foreground">Total Focus Time</div>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="text-lg font-audiowide font-bold">13</div>
            <div className="text-xs text-muted-foreground">Pomodoros Today</div>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="text-lg font-audiowide font-bold">92%</div>
            <div className="text-xs text-muted-foreground">Best Efficiency</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
