import { PomodoroTimer } from "@/components/pomodoro-timer"
import { FocusMode } from "@/components/focus-mode"
import { MotivationCenter } from "@/components/motivation-center"
import { AchievementBadges } from "@/components/achievement-badges"
import { StudyGoals } from "@/components/study-goals"
import { ProductivityStats } from "@/components/productivity-stats"

export default function ProductivityPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-audiowide font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Productivity Tools
          </h1>
          <p className="text-muted-foreground mt-1">Focus tools, motivation, and achievement tracking for GATE 2026</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <PomodoroTimer />
          <FocusMode />
        </div>
        <div className="space-y-6">
          <MotivationCenter />
          <StudyGoals />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AchievementBadges />
        <ProductivityStats />
      </div>
    </div>
  )
}
