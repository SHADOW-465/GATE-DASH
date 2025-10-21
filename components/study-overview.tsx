"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface StudyOverviewProps {
  subjects: Doc<"subjects">[] | undefined;
}

export function StudyOverview({ subjects }: StudyOverviewProps) {
  if (!subjects) {
    return <div>Loading...</div>;
  }

  const overallProgress = Math.round(
    subjects.reduce((acc, subject) => acc + subject.progress, 0) / subjects.length
  );

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">
          Subject Progress Overview
        </CardTitle>
        <CardDescription>
          Overall Progress: {overallProgress}% • Target: 70-80 marks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects.map((subject) => (
          <div key={subject._id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{subject.name}</span>
                <Badge
                  variant="outline"
                  className={`text-xs gate-${subject.status}`}
                >
                  {subject.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{subject.progress}%</span>
                <span className="text-xs">({subject.weightage}%)</span>
              </div>
            </div>
            <Progress value={subject.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
