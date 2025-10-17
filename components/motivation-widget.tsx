"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Target, Calendar } from "lucide-react"

export function MotivationWidget() {
  return (
    <Card className="glass border-0 shadow-xl w-80">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium">12 Day Streak</span>
          </div>
          <Badge variant="outline" className="gate-completed text-xs">
            On Fire!
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Target className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Target: 75+ marks</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">45 days to GATE 2026</span>
          </div>
        </div>

        <div className="mt-3 p-2 rounded bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <p className="text-xs text-blue-700 dark:text-blue-300 italic">
            "Every expert was once a beginner. Keep pushing forward!"
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
