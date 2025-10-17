"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, BookOpen, FileText, Target, RotateCcw } from "lucide-react"

const getTodayDate = (offset = 0) => {
  const today = new Date()
  today.setDate(today.getDate() + offset)
  return today.toISOString().split("T")[0]
}

const studyEvents = {
  [getTodayDate()]: [
    {
      type: "Theory",
      subject: "Analog Circuits",
      topic: "Op-Amp Applications",
      time: "09:00-11:00",
      status: "pending",
    },
    { type: "PYQs", subject: "Digital Circuits", topic: "Sequential Logic", time: "14:00-15:30", status: "completed" },
  ],
  [getTodayDate(1)]: [
    { type: "Mock Test", subject: "Full Syllabus", topic: "Practice Test #13", time: "10:00-13:00", status: "pending" },
    {
      type: "Revision",
      subject: "Control Systems",
      topic: "Stability Analysis",
      time: "19:00-20:00",
      status: "pending",
    },
  ],
  [getTodayDate(2)]: [
    {
      type: "Theory",
      subject: "Communications",
      topic: "Modulation Techniques",
      time: "09:00-11:00",
      status: "pending",
    },
  ],
}

const getEventIcon = (type: string) => {
  switch (type) {
    case "Theory":
      return BookOpen
    case "PYQs":
      return FileText
    case "Mock Test":
      return Target
    case "Revision":
      return RotateCcw
    default:
      return BookOpen
  }
}

export function StudyCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedEvents, setSelectedEvents] = useState(studyEvents[getTodayDate()] || [])

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      const dateKey = date.toISOString().split("T")[0]
      setSelectedEvents(studyEvents[dateKey] || [])
    }
  }

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">Study Calendar</CardTitle>
        <CardDescription>Plan your daily study schedule with drag-and-drop tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border glass"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </h3>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
            <div className="space-y-3">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((event, index) => {
                  const Icon = getEventIcon(event.type)
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50"
                    >
                      <Icon className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{event.time}</span>
                          <Badge variant="outline" className={`text-xs gate-${event.status}`}>
                            {event.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">{event.type}</span> • {event.subject}
                        </div>
                        <div className="text-xs text-muted-foreground">{event.topic}</div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No study sessions planned for this day</p>
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Study Session
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
