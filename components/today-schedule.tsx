"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, FileText, Target } from "lucide-react";

interface TodayScheduleProps {
  tasks: Doc<"tasks">[] | undefined;
}

const iconMap = {
  Theory: BookOpen,
  PYQs: FileText,
  "Mock Test": Target,
  Revision: BookOpen,
};

export function TodaySchedule({ tasks }: TodayScheduleProps) {
  if (!tasks) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Today's Schedule
        </CardTitle>
        <CardDescription>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => {
          const Icon = iconMap[task.type];
          return (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
            >
              <Icon className="h-4 w-4 mt-1 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{task.title}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs gate-${task.status}`}
                  >
                    {task.status}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{task.type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
