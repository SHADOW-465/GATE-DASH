"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, RefreshCw, Calendar, Target } from "lucide-react"

const motivationalQuotes = [
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Perseverance",
  },
  {
    quote: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
    category: "Growth",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "Persistence",
  },
  {
    quote: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
    category: "Consistency",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
  },
]

const milestones = [
  { date: "Feb 2026", event: "GATE 2026 Exam", daysLeft: 45, type: "exam" },
  { date: "Jan 2026", event: "Final Mock Tests", daysLeft: 15, type: "preparation" },
  { date: "Dec 2025", event: "Complete Syllabus", daysLeft: -5, type: "completed" },
]

export function MotivationCenter() {
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0])
  const [dailyStreak, setDailyStreak] = useState(12)

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
    setCurrentQuote(motivationalQuotes[randomIndex])
  }

  useEffect(() => {
    // Auto-refresh quote daily
    const interval = setInterval(getNewQuote, 24 * 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          Motivation Center
        </CardTitle>
        <CardDescription>Daily inspiration and milestone tracking</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start justify-between mb-3">
            <Badge variant="outline" className="text-xs">
              {currentQuote.category}
            </Badge>
            <Button variant="ghost" size="sm" onClick={getNewQuote} className="h-6 w-6 p-0">
              <RefreshCw className="h-3 w-3" />
            </Button>
          </div>
          <blockquote className="text-sm italic mb-2">"{currentQuote.quote}"</blockquote>
          <div className="text-xs text-muted-foreground text-right">— {currentQuote.author}</div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-sm">Important Milestones</span>
          </div>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
            >
              <div>
                <div className="font-medium text-sm">{milestone.event}</div>
                <div className="text-xs text-muted-foreground">{milestone.date}</div>
              </div>
              <div className="text-right">
                {milestone.daysLeft > 0 ? (
                  <div className="text-sm font-medium">{milestone.daysLeft} days</div>
                ) : milestone.daysLeft === 0 ? (
                  <Badge variant="outline" className="gate-pending">
                    Today
                  </Badge>
                ) : (
                  <Badge variant="outline" className="gate-completed">
                    Done
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="text-2xl font-audiowide font-bold text-orange-500">{dailyStreak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="text-2xl font-audiowide font-bold text-green-500">64%</div>
            <div className="text-xs text-muted-foreground">Progress</div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-green-600" />
            <span className="font-medium text-sm text-green-900 dark:text-green-100">Today's Affirmation</span>
          </div>
          <p className="text-sm text-green-700 dark:text-green-300">
            "I am capable of achieving my GATE 2026 goals. Every study session brings me closer to success."
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
