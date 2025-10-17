"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Pause, RotateCcw, Timer, Coffee, Brain } from "lucide-react"

const timerModes = [
  { name: "Pomodoro", duration: 25, icon: Brain, color: "text-red-500" },
  { name: "Short Break", duration: 5, icon: Coffee, color: "text-green-500" },
  { name: "Long Break", duration: 15, icon: Coffee, color: "text-blue-500" },
  { name: "Deep Focus", duration: 50, icon: Brain, color: "text-purple-500" },
]

export function PomodoroTimer() {
  const [selectedMode, setSelectedMode] = useState(timerModes[0])
  const [timeLeft, setTimeLeft] = useState(selectedMode.duration * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSessions, setCompletedSessions] = useState(0)
  const [currentSubject, setCurrentSubject] = useState("Analog Circuits")

  useEffect(() => {
    setTimeLeft(selectedMode.duration * 60)
  }, [selectedMode])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
      setCompletedSessions((prev) => prev + 1)
      // Play notification sound or show notification
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progress = ((selectedMode.duration * 60 - timeLeft) / (selectedMode.duration * 60)) * 100

  const handleStart = () => setIsRunning(true)
  const handlePause = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(selectedMode.duration * 60)
  }

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Timer className="h-5 w-5" />
          Pomodoro Timer
        </CardTitle>
        <CardDescription>25/50 minute focused study sessions with breaks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="text-sm font-medium">Timer Mode</div>
            <div className="grid grid-cols-2 gap-2">
              {timerModes.map((mode) => {
                const Icon = mode.icon
                return (
                  <Button
                    key={mode.name}
                    variant={selectedMode.name === mode.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMode(mode)}
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Icon className={`h-4 w-4 ${mode.color}`} />
                    <span className="text-xs">{mode.name}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium">Current Subject</div>
            <Select value={currentSubject} onValueChange={setCurrentSubject}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Analog Circuits">Analog Circuits</SelectItem>
                <SelectItem value="Digital Circuits">Digital Circuits</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Control Systems">Control Systems</SelectItem>
                <SelectItem value="Communications">Communications</SelectItem>
                <SelectItem value="Electromagnetics">Electromagnetics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="relative">
            <div className="text-6xl font-audiowide font-bold">{formatTime(timeLeft)}</div>
            <Badge variant="outline" className={`mt-2 ${selectedMode.color}`}>
              {selectedMode.name}
            </Badge>
          </div>
          <Progress value={progress} className="h-3" />
          <div className="text-sm text-muted-foreground">
            {isRunning ? `Studying ${currentSubject}` : "Ready to start"}
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {!isRunning ? (
            <Button onClick={handleStart} className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Start
            </Button>
          ) : (
            <Button onClick={handlePause} variant="outline" className="flex items-center gap-2 bg-transparent">
              <Pause className="h-4 w-4" />
              Pause
            </Button>
          )}
          <Button onClick={handleReset} variant="outline" className="flex items-center gap-2 bg-transparent">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Sessions Today: {completedSessions}</span>
          <span>Target: 8 sessions</span>
        </div>
      </CardContent>
    </Card>
  )
}
