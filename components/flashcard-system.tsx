"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Eye, EyeOff, Brain } from "lucide-react"

const flashcardDecks = [
  {
    name: "Op-Amp Configurations",
    subject: "Analog Circuits",
    cards: 25,
    mastered: 18,
    due: 7,
    difficulty: "Medium",
  },
  {
    name: "Laplace Transforms",
    subject: "Mathematics",
    cards: 30,
    mastered: 22,
    due: 8,
    difficulty: "Hard",
  },
  {
    name: "Logic Gates",
    subject: "Digital Circuits",
    cards: 20,
    mastered: 20,
    due: 0,
    difficulty: "Easy",
  },
]

const sampleCards = [
  {
    front: "What is the gain of an inverting op-amp amplifier?",
    back: "Av = -Rf/Rin\n\nWhere:\n- Rf = Feedback resistance\n- Rin = Input resistance\n- The negative sign indicates phase inversion",
    subject: "Analog Circuits",
    difficulty: "Medium",
  },
  {
    front: "State the Routh-Hurwitz stability criterion",
    back: "A system is stable if and only if all elements in the first column of the Routh array are positive (for positive coefficients) or have the same sign pattern.",
    subject: "Control Systems",
    difficulty: "Hard",
  },
]

export function FlashcardSystem() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedDeck, setSelectedDeck] = useState(null)

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % sampleCards.length)
    setShowAnswer(false)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + sampleCards.length) % sampleCards.length)
    setShowAnswer(false)
  }

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Flashcard System
        </CardTitle>
        <CardDescription>Spaced repetition for effective memorization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!selectedDeck ? (
          <div className="space-y-3">
            {flashcardDecks.map((deck, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedDeck(deck)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-sm">{deck.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {deck.subject}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span>{deck.cards} cards</span>
                    <span>{deck.mastered} mastered</span>
                    <span className={deck.due > 0 ? "text-orange-600" : "text-green-600"}>{deck.due} due</span>
                  </div>
                  <Progress value={(deck.mastered / deck.cards) * 100} className="h-2" />
                </div>
                <Button variant="outline" size="sm">
                  Study
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm" onClick={() => setSelectedDeck(null)}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Decks
              </Button>
              <div className="text-sm text-muted-foreground">
                {currentCard + 1} / {sampleCards.length}
              </div>
            </div>

            <div className="min-h-[300px] p-6 rounded-lg bg-muted/30 border border-border/50 flex flex-col justify-center">
              <div className="text-center space-y-4">
                <Badge variant="outline" className="mb-4">
                  {sampleCards[currentCard].subject}
                </Badge>
                <div className="text-lg font-medium mb-6">{sampleCards[currentCard].front}</div>

                {showAnswer && (
                  <div className="p-4 rounded-lg bg-background/50 border">
                    <div className="whitespace-pre-line text-sm">{sampleCards[currentCard].back}</div>
                  </div>
                )}

                <Button variant="outline" onClick={() => setShowAnswer(!showAnswer)} className="bg-transparent">
                  {showAnswer ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" />
                      Hide Answer
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      Show Answer
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={prevCard}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {showAnswer && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gate-weak bg-transparent">
                    Hard
                  </Button>
                  <Button variant="outline" size="sm" className="gate-pending bg-transparent">
                    Medium
                  </Button>
                  <Button variant="outline" size="sm" className="gate-completed bg-transparent">
                    Easy
                  </Button>
                </div>
              )}

              <Button variant="outline" onClick={nextCard}>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
