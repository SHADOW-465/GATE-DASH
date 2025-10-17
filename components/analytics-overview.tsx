"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, PieChart, Pie, Cell } from "recharts"
import { TrendingUp, TrendingDown, Clock, Target, Brain, Award } from "lucide-react"

const overviewMetrics = [
  {
    title: "Study Efficiency",
    value: "78%",
    change: "+12%",
    trend: "up",
    description: "Time vs Progress ratio",
    icon: Brain,
  },
  {
    title: "Target Progress",
    value: "64%",
    change: "+5%",
    trend: "up",
    description: "Towards 70-80 marks goal",
    icon: Target,
  },
  {
    title: "Weekly Hours",
    value: "42h",
    change: "-3h",
    trend: "down",
    description: "This week vs last week",
    icon: Clock,
  },
  {
    title: "Mock Score Trend",
    value: "68/100",
    change: "+4",
    trend: "up",
    description: "Latest vs previous average",
    icon: Award,
  },
]

const studyTrendData = [
  { week: "W1", hours: 38, efficiency: 65, score: 58 },
  { week: "W2", hours: 42, efficiency: 70, score: 62 },
  { week: "W3", hours: 40, efficiency: 75, score: 65 },
  { week: "W4", hours: 45, efficiency: 78, score: 68 },
  { week: "W5", hours: 42, efficiency: 80, score: 70 },
]

const subjectDistribution = [
  { subject: "Math", hours: 85, color: "#3b82f6" },
  { subject: "Analog", hours: 72, color: "#ef4444" },
  { subject: "Digital", hours: 68, color: "#10b981" },
  { subject: "Control", hours: 45, color: "#f59e0b" },
  { subject: "Comm", hours: 38, color: "#8b5cf6" },
  { subject: "EM", hours: 32, color: "#06b6d4" },
]

const chartConfig = {
  hours: { label: "Hours", color: "hsl(var(--chart-1))" },
  efficiency: { label: "Efficiency %", color: "hsl(var(--chart-2))" },
  score: { label: "Score", color: "hsl(var(--chart-3))" },
}

export function AnalyticsOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {overviewMetrics.map((metric, index) => {
          const Icon = metric.icon
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown
          return (
            <Card key={index} className="glass border-0 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-audiowide font-bold">{metric.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendIcon className={`h-3 w-3 ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                  <span className={`text-xs ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl">Study Trends</CardTitle>
            <CardDescription>Weekly hours, efficiency, and performance correlation</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={studyTrendData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="hours" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="score" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl">Subject Time Distribution</CardTitle>
            <CardDescription>Hours allocated per subject this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={subjectDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="hours"
                    >
                      {subjectDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {subjectDistribution.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: subject.color }} />
                      <span>{subject.subject}</span>
                    </div>
                    <span className="font-medium">{subject.hours}h</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-lg">Weak Areas Alert</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Analog Circuits</span>
              <Badge variant="outline" className="gate-weak">
                Critical
              </Badge>
            </div>
            <Progress value={45} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm">Communications</span>
              <Badge variant="outline" className="gate-weak">
                Needs Focus
              </Badge>
            </div>
            <Progress value={40} className="h-2" />
          </CardContent>
        </Card>

        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-lg">Strong Subjects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Electronic Devices</span>
              <Badge variant="outline" className="gate-completed">
                Excellent
              </Badge>
            </div>
            <Progress value={85} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm">Mathematics</span>
              <Badge variant="outline" className="gate-strong">
                Good
              </Badge>
            </div>
            <Progress value={75} className="h-2" />
          </CardContent>
        </Card>

        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-lg">This Week Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span>Study Hours</span>
                <span>42/45h</span>
              </div>
              <Progress value={93} className="h-2" />
            </div>
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span>Mock Tests</span>
                <span>2/3</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span>PYQ Practice</span>
                <span>45/50</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
