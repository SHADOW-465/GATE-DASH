"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Target, Brain } from "lucide-react"

const dailyStudyPattern = [
  { hour: "6AM", sessions: 2 },
  { hour: "7AM", sessions: 5 },
  { hour: "8AM", sessions: 8 },
  { hour: "9AM", sessions: 12 },
  { hour: "10AM", sessions: 15 },
  { hour: "11AM", sessions: 10 },
  { hour: "2PM", sessions: 8 },
  { hour: "3PM", sessions: 12 },
  { hour: "4PM", sessions: 15 },
  { hour: "5PM", sessions: 18 },
  { hour: "7PM", sessions: 20 },
  { hour: "8PM", sessions: 22 },
  { hour: "9PM", sessions: 18 },
  { hour: "10PM", sessions: 12 },
]

const subjectMastery = [
  { subject: "Mathematics", theory: 85, practice: 78, application: 72 },
  { subject: "Analog", theory: 60, practice: 45, application: 50 },
  { subject: "Digital", theory: 75, practice: 70, application: 68 },
  { subject: "Control", theory: 65, practice: 55, application: 48 },
  { subject: "Communications", theory: 50, practice: 40, application: 35 },
  { subject: "EM", theory: 70, practice: 65, application: 60 },
]

const learningEfficiency = [
  { week: "Week 1", theoryTime: 20, practiceTime: 15, retentionRate: 65 },
  { week: "Week 2", theoryTime: 18, practiceTime: 18, retentionRate: 70 },
  { week: "Week 3", theoryTime: 16, practiceTime: 20, retentionRate: 75 },
  { week: "Week 4", theoryTime: 15, practiceTime: 22, retentionRate: 78 },
  { week: "Week 5", theoryTime: 14, practiceTime: 24, retentionRate: 82 },
]

const radarData = [
  { subject: "Math", A: 85, B: 78, fullMark: 100 },
  { subject: "Analog", A: 45, B: 60, fullMark: 100 },
  { subject: "Digital", A: 70, B: 75, fullMark: 100 },
  { subject: "Control", A: 55, B: 65, fullMark: 100 },
  { subject: "Comm", A: 40, B: 50, fullMark: 100 },
  { subject: "EM", A: 65, B: 70, fullMark: 100 },
]

export function StudyAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Daily Study Pattern
            </CardTitle>
            <CardDescription>Your most productive study hours</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyStudyPattern}>
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="sessions" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Learning Efficiency
            </CardTitle>
            <CardDescription>Theory vs Practice time allocation and retention</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={learningEfficiency}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="theoryTime" stroke="#ef4444" strokeWidth={2} name="Theory Hours" />
                  <Line type="monotone" dataKey="practiceTime" stroke="#10b981" strokeWidth={2} name="Practice Hours" />
                  <Line type="monotone" dataKey="retentionRate" stroke="#f59e0b" strokeWidth={2} name="Retention %" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <Target className="h-5 w-5" />
              Subject Mastery Radar
            </CardTitle>
            <CardDescription>Current vs Target performance across subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Current" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  <Radar name="Target" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Subject Breakdown
            </CardTitle>
            <CardDescription>Theory, Practice, and Application scores</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjectMastery.map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{subject.subject}</span>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs">
                      T: {subject.theory}%
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      P: {subject.practice}%
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      A: {subject.application}%
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-2 bg-blue-500 rounded" style={{ width: `${subject.theory}%` }} />
                  <div className="h-2 bg-green-500 rounded" style={{ width: `${subject.practice}%` }} />
                  <div className="h-2 bg-orange-500 rounded" style={{ width: `${subject.application}%` }} />
                </div>
              </div>
            ))}
            <div className="flex justify-center gap-4 text-xs text-muted-foreground mt-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-2 bg-blue-500 rounded" />
                <span>Theory</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-2 bg-green-500 rounded" />
                <span>Practice</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-2 bg-orange-500 rounded" />
                <span>Application</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
