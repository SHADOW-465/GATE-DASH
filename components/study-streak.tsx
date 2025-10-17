"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Calendar, Trophy } from "lucide-react"

const streakData = {
  current: 12,
  best: 18,
  thisMonth: 24,
  weekdays: [
    { day: "Mon", studied: true },
    { day: "Tue", studied: true },
    { day: "Wed", studied: false },
    { day: "Thu", studied: true },
    { day: "Fri", studied: true },
    { day: "Sat", studied: true },
    { day: "Sun", studied: true },
  ],
}

export function StudyStreak() {
  return (
    <Card className="glass border-0 shadow-xl lg:col-span-2">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Study Streak
        </CardTitle>
        <CardDescription>Consistency is key to GATE success</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-audiowide font-bold text-orange-500">{streakData.current}</div>
            <div className="text-xs text-muted-foreground">Current Streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-audiowide font-bold text-yellow-500">{streakData.best}</div>
            <div className="text-xs text-muted-foreground">Best Streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-audiowide font-bold text-green-500">{streakData.thisMonth}</div>
            <div className="text-xs text-muted-foreground">This Month</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">This Week</div>
          <div className="flex gap-2">
            {streakData.weekdays.map((day, index) => (
              <div key={index} className="flex-1 text-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium mx-auto mb-1 ${
                    day.studied ? "bg-green-500 text-white" : "bg-muted text-muted-foreground border border-border"
                  }`}
                >
                  {day.studied ? "✓" : "○"}
                </div>
                <div className="text-xs text-muted-foreground">{day.day}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Badge variant="outline" className="gate-strong">
            <Trophy className="h-3 w-3 mr-1" />
            Consistent Learner
          </Badge>
          <Badge variant="outline" className="gate-completed">
            <Calendar className="h-3 w-3 mr-1" />
            12 Day Streak
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
