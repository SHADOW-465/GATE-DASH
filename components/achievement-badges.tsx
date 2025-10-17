"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Trophy, Star, Zap, Target, Clock, BookOpen, Brain } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first study session",
    icon: BookOpen,
    earned: true,
    earnedDate: "Dec 1, 2024",
    category: "Getting Started",
    rarity: "common",
  },
  {
    id: 2,
    title: "Week Warrior",
    description: "Study for 7 consecutive days",
    icon: Zap,
    earned: true,
    earnedDate: "Dec 8, 2024",
    category: "Consistency",
    rarity: "common",
  },
  {
    id: 3,
    title: "Century Club",
    description: "Complete 100 hours of study",
    icon: Clock,
    earned: true,
    earnedDate: "Dec 15, 2024",
    category: "Dedication",
    rarity: "rare",
  },
  {
    id: 4,
    title: "Mock Master",
    description: "Score 70+ in 5 consecutive mock tests",
    icon: Target,
    earned: false,
    progress: 60,
    category: "Performance",
    rarity: "epic",
  },
  {
    id: 5,
    title: "Subject Slayer",
    description: "Master all 8 GATE subjects (80%+ each)",
    icon: Brain,
    earned: false,
    progress: 25,
    category: "Mastery",
    rarity: "legendary",
  },
  {
    id: 6,
    title: "Speed Demon",
    description: "Complete a mock test in under 2.5 hours",
    icon: Zap,
    earned: false,
    progress: 85,
    category: "Speed",
    rarity: "rare",
  },
]

const categories = ["All", "Getting Started", "Consistency", "Performance", "Mastery", "Speed", "Dedication"]

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "text-gray-600 border-gray-300"
    case "rare":
      return "text-blue-600 border-blue-300"
    case "epic":
      return "text-purple-600 border-purple-300"
    case "legendary":
      return "text-yellow-600 border-yellow-300"
    default:
      return "text-gray-600 border-gray-300"
  }
}

export function AchievementBadges() {
  const earnedCount = achievements.filter((a) => a.earned).length
  const totalCount = achievements.length

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Award className="h-5 w-5" />
          Achievement Badges
        </CardTitle>
        <CardDescription>
          Unlock badges as you progress • {earnedCount}/{totalCount} earned
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="font-medium">Progress: {Math.round((earnedCount / totalCount) * 100)}%</span>
          <Progress value={(earnedCount / totalCount) * 100} className="flex-1 h-2" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned
                    ? "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-300 dark:border-yellow-700"
                    : "bg-muted/30 border-border/50 opacity-75"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      achievement.earned ? "bg-yellow-100 dark:bg-yellow-900/30" : "bg-muted"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${achievement.earned ? "text-yellow-600" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{achievement.title}</span>
                      <Badge variant="outline" className={`text-xs ${getRarityColor(achievement.rarity)}`}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                    {achievement.earned ? (
                      <div className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-muted-foreground">Earned {achievement.earnedDate}</span>
                      </div>
                    ) : achievement.progress !== undefined ? (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-1" />
                      </div>
                    ) : (
                      <Badge variant="outline" className="text-xs gate-pending">
                        Locked
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-sm text-blue-900 dark:text-blue-100">Next Achievement</span>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            You're 40% away from earning "Mock Master" - keep up the great work!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
