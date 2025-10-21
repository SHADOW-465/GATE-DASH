"use client";

import { useState } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen, FileText, Target, RotateCcw } from "lucide-react";

interface StudyCalendarProps {
  tasks: Doc<"tasks">[] | undefined;
}

const getEventIcon = (type: string) => {
  switch (type) {
    case "Theory":
      return BookOpen;
    case "PYQs":
      return FileText;
    case "Mock Test":
      return Target;
    case "Revision":
      return RotateCcw;
    default:
      return BookOpen;
  }
};

export function StudyCalendar({ tasks }: StudyCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const selectedEvents =
    tasks?.filter(
      (task) =>
        task.dueDate === selectedDate?.toISOString().split("T")[0]
    ) || [];

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">Study Calendar</CardTitle>
        <CardDescription>
          Plan your daily study schedule with drag-and-drop tasks
        </CardDescription>
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
                  const Icon = getEventIcon(event.type);
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50"
                    >
                      <Icon className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {event.title}
                          </span>
                          <Badge
                            variant="outline"
                            className={`text-xs gate-${event.status}`}
                          >
                            {event.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">{event.type}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No study sessions planned for this day</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2 bg-transparent"
                  >
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
  );
}
