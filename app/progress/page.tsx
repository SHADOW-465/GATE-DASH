import { ProgressSummary } from "@/components/progress-summary"
import { SubjectAnalytics } from "@/components/subject-analytics"
import { StudyStreak } from "@/components/study-streak"
import { WeeklyReview } from "@/components/weekly-review"
import { ProgressCharts } from "@/components/progress-charts"

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-audiowide font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Progress Tracker
          </h1>
          <p className="text-muted-foreground mt-1">Visual analytics and progress monitoring for GATE 2026</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProgressSummary />
        </div>
        <StudyStreak />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ProgressCharts />
        <SubjectAnalytics />
      </div>

      <WeeklyReview />
    </div>
  )
}
