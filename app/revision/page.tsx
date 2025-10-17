import { FormulaSheet } from "@/components/formula-sheet"
import { FlashcardSystem } from "@/components/flashcard-system"
import { WeakTopics } from "@/components/weak-topics"
import { QuickRevision } from "@/components/quick-revision"
import { RevisionPlanner } from "@/components/revision-planner"

export default function RevisionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-audiowide font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Revision Hub
          </h1>
          <p className="text-muted-foreground mt-1">Formulas, flashcards, and spaced repetition for GATE 2026</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <FormulaSheet />
          <FlashcardSystem />
        </div>
        <div className="space-y-6">
          <QuickRevision />
          <WeakTopics />
          <RevisionPlanner />
        </div>
      </div>
    </div>
  )
}
