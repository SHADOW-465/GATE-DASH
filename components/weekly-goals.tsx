"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Target } from "lucide-react"

const getWeekInfo = () => {
  const now = new Date();
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1))); // Monday
  const endOfWeek = new Date(new Date(startOfWeek).setDate(startOfWeek.getDate() + 6)); // Sunday

  const formatDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return {
    weekRange: `Week of ${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`,
    getDueDate: (day: number) => formatDate(new Date(new Date(startOfWeek).setDate(startOfWeek.getDate() + day)))
  };
};

const { weekRange, getDueDate } = getWeekInfo();

const weeklyGoals = [
  {
    subject: "Analog Circuits",
    goal: "Complete Op-Amp chapter + 20 PYQs",
    progress: 75,
    status: "on-track",
    dueDate: getDueDate(4), // Friday
  },
  {
    subject: "Digital Circuits",
    goal: "Sequential Logic revision + Mock test",
    progress: 100,
    status: "completed",
    dueDate: getDueDate(2), // Wednesday
  },
  {
    subject: "Control Systems",
    goal: "Stability Analysis theory",
    progress: 30,
    status: "behind",
    dueDate: getDueDate(3), // Thursday
  },
  {
    subject: "Communications",
    goal: "Modulation techniques + formulas",
    progress: 0,
    status: "pending",
    dueDate: getDueDate(5), // Saturday
  },
]

export function WeeklyGoals() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Target className="h-5 w-5" />
          Weekly Goals
        </CardTitle>
        <CardDescription>{weekRange}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {weeklyGoals.map((goal, index) => (
          <div key={index} className="space-y-3 p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {goal.progress === 100 ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="font-medium text-sm">{goal.subject}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{goal.goal}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>Due: {goal.dueDate}</span>
                  <span>{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>
              <Badge
                variant="outline"
                className={`text-xs ml-3 ${
                  goal.status === "completed"
                    ? "gate-completed"
                    : goal.status === "on-track"
                      ? "gate-strong"
                      : goal.status === "behind"
                        ? "gate-weak"
                        : "gate-pending"
                }`}
              >
                {goal.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
