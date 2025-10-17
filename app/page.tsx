import { StudyOverview } from "@/components/study-overview"
import { TodaySchedule } from "@/components/today-schedule"
import { ProgressSummary } from "@/components/progress-summary"
import { QuickActions } from "@/components/quick-actions"
import { MotivationWidget } from "@/components/motivation-widget"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-audiowide font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            GATE 2026 ECE
          </h1>
          <p className="text-muted-foreground mt-1">Electronics & Communication Engineering Preparation</p>
        </div>
        <MotivationWidget />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <StudyOverview />
        </div>
        <div className="lg:col-span-1">
          <TodaySchedule />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressSummary />
        <QuickActions />
      </div>
    </div>
  )
}
