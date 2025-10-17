"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, BarChart, Bar } from "recharts"
import { Download, FileText, TrendingUp, Calendar, Award } from "lucide-react"

const monthlyReports = [
  {
    month: "December 2024",
    totalHours: 168,
    avgScore: 68,
    improvement: "+5%",
    subjects: 8,
    status: "on-track",
  },
  {
    month: "November 2024",
    totalHours: 156,
    avgScore: 63,
    improvement: "+8%",
    subjects: 8,
    status: "good",
  },
  {
    month: "October 2024",
    totalHours: 142,
    avgScore: 58,
    improvement: "+12%",
    subjects: 7,
    status: "improving",
  },
]

const scoreProgression = [
  { month: "Aug", math: 45, analog: 35, digital: 50, control: 40, comm: 30, em: 45 },
  { month: "Sep", math: 55, analog: 40, digital: 58, control: 45, comm: 35, em: 50 },
  { month: "Oct", math: 65, analog: 45, digital: 65, control: 50, comm: 38, em: 55 },
  { month: "Nov", math: 72, analog: 50, digital: 70, control: 55, comm: 42, em: 60 },
  { month: "Dec", math: 78, analog: 55, digital: 75, control: 60, comm: 45, em: 65 },
]

const weeklyComparison = [
  { week: "W1", thisYear: 38, lastYear: 32 },
  { week: "W2", thisYear: 42, lastYear: 35 },
  { week: "W3", thisYear: 40, lastYear: 38 },
  { week: "W4", thisYear: 45, lastYear: 40 },
]

export function PerformanceReports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-audiowide font-semibold">Performance Reports</h3>
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export All Reports
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {monthlyReports.map((report, index) => (
          <Card key={index} className="glass border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-audiowide text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {report.month}
              </CardTitle>
              <CardDescription>Monthly performance summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Study Hours</span>
                  <div className="font-audiowide text-xl">{report.totalHours}h</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Avg Score</span>
                  <div className="font-audiowide text-xl">{report.avgScore}/100</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Improvement</span>
                <Badge variant="outline" className="gate-completed">
                  {report.improvement}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Subjects Covered</span>
                <span className="font-medium">{report.subjects}/8</span>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <FileText className="h-4 w-4 mr-2" />
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Score Progression by Subject
            </CardTitle>
            <CardDescription>Monthly improvement across all subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scoreProgression}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="math" stroke="#3b82f6" strokeWidth={2} name="Mathematics" />
                  <Line type="monotone" dataKey="analog" stroke="#ef4444" strokeWidth={2} name="Analog" />
                  <Line type="monotone" dataKey="digital" stroke="#10b981" strokeWidth={2} name="Digital" />
                  <Line type="monotone" dataKey="control" stroke="#f59e0b" strokeWidth={2} name="Control" />
                  <Line type="monotone" dataKey="comm" stroke="#8b5cf6" strokeWidth={2} name="Communications" />
                  <Line type="monotone" dataKey="em" stroke="#06b6d4" strokeWidth={2} name="EM" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <Award className="h-5 w-5" />
              Year-over-Year Comparison
            </CardTitle>
            <CardDescription>Weekly study hours: This year vs Last year</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyComparison}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="thisYear" fill="#3b82f6" name="This Year" />
                  <Bar dataKey="lastYear" fill="#94a3b8" name="Last Year" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="glass border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="font-audiowide text-xl">Detailed Performance Metrics</CardTitle>
          <CardDescription>Comprehensive analysis of your GATE preparation journey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Overall Accuracy</div>
              <div className="text-2xl font-audiowide">73.5%</div>
              <Progress value={73.5} className="h-2" />
              <div className="text-xs text-muted-foreground">Target: 75%</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Speed (Qs/min)</div>
              <div className="text-2xl font-audiowide">1.8</div>
              <Progress value={72} className="h-2" />
              <div className="text-xs text-muted-foreground">Target: 2.0</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Consistency Score</div>
              <div className="text-2xl font-audiowide">8.2/10</div>
              <Progress value={82} className="h-2" />
              <div className="text-xs text-muted-foreground">Excellent</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Revision Efficiency</div>
              <div className="text-2xl font-audiowide">76%</div>
              <Progress value={76} className="h-2" />
              <div className="text-xs text-muted-foreground">Good retention</div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="font-medium text-green-900 dark:text-green-100 mb-2">Strengths</div>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Consistent daily study routine</li>
                <li>• Strong mathematical foundation</li>
                <li>• Good time management in tests</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800">
              <div className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Areas to Improve</div>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Analog circuits conceptual clarity</li>
                <li>• Communication systems practice</li>
                <li>• Speed in numerical problems</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="font-medium text-blue-900 dark:text-blue-100 mb-2">Recommendations</div>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Focus 60% time on weak subjects</li>
                <li>• Increase mock test frequency</li>
                <li>• Daily formula revision</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
