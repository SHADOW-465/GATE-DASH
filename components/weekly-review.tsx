"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Minus, Calendar, Download } from "lucide-react"

const getWeekInfoString = (offset = 0) => {
  const now = new Date();
  now.setDate(now.getDate() + (offset * 7));
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)));
  const endOfWeek = new Date(new Date(startOfWeek).setDate(startOfWeek.getDate() + 6));
  const formatDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;
};

const weeklyData = [
  {
    week: getWeekInfoString(-1), // Last week
    totalHours: 42,
    targetHours: 40,
    subjects: [
      { name: "Analog Circuits", hours: 12, target: 10, trend: "up" },
      { name: "Digital Circuits", hours: 8, target: 8, trend: "same" },
      { name: "Control Systems", hours: 6, target: 8, trend: "down" },
      { name: "Mathematics", hours: 10, target: 8, trend: "up" },
      { name: "Communications", hours: 6, target: 6, trend: "same" },
    ],
    achievements: ["Completed Op-Amp chapter", "Solved 50+ PYQs", "Mock test score: 68/100"],
    areas: ["Need more focus on Control Systems", "Improve speed in Mathematics"],
  },
  {
    week: getWeekInfoString(-2), // Two weeks ago
    totalHours: 38,
    targetHours: 40,
    subjects: [
      { name: "Analog Circuits", hours: 10, target: 10, trend: "same" },
      { name: "Digital Circuits", hours: 9, target: 8, trend: "up" },
      { name: "Control Systems", hours: 5, target: 8, trend: "down" },
      { name: "Mathematics", hours: 8, target: 8, trend: "same" },
      { name: "Communications", hours: 6, target: 6, trend: "same" },
    ],
    achievements: ["Started new year strong", "Consistent daily study", "Improved PYQ accuracy"],
    areas: ["Control Systems needs attention", "Mock test timing issues"],
  },
]

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-3 w-3 text-green-500" />
    case "down":
      return <TrendingDown className="h-3 w-3 text-red-500" />
    default:
      return <Minus className="h-3 w-3 text-gray-500" />
  }
}

export function WeeklyReview() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Weekly Review
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </CardTitle>
        <CardDescription>Detailed weekly progress analysis and insights</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {weeklyData.map((week, weekIndex) => (
          <div key={weekIndex} className="space-y-4 p-4 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{week.week}</h3>
              <Badge
                variant="outline"
                className={week.totalHours >= week.targetHours ? "gate-completed" : "gate-pending"}
              >
                {week.totalHours}h / {week.targetHours}h
              </Badge>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Subject Hours</h4>
                {week.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span>{subject.name}</span>
                      {getTrendIcon(subject.trend)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">
                        {subject.hours}h / {subject.target}h
                      </span>
                      <div className="w-16">
                        <Progress value={(subject.hours / subject.target) * 100} className="h-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Achievements</h4>
                <ul className="space-y-1">
                  {week.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-medium">Areas for Improvement</h4>
                <ul className="space-y-1">
                  {week.areas.map((area, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
