import { StudyCalendar } from "@/components/study-calendar"
import { WeeklyGoals } from "@/components/weekly-goals"
import { TaskManager } from "@/components/task-manager"
import { SubjectPlanner } from "@/components/subject-planner"

export default function StudyPlannerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-audiowide font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Study Planner
          </h1>
          <p className="text-muted-foreground mt-1">Plan and organize your GATE 2026 preparation</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <StudyCalendar />
          <TaskManager />
        </div>
        <div className="space-y-6">
          <WeeklyGoals />
          <SubjectPlanner />
        </div>
      </div>
    </div>
  )
}
