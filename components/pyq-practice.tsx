"use client";

import { Doc } from "@/convex/_generated/dataModel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Calendar, CheckCircle2 } from "lucide-react";

interface PYQPracticeProps {
  tests: Doc<"tests">[] | undefined;
}

const subjectPYQs = [
  { subject: "Analog Circuits", solved: 45, total: 60, accuracy: 67 },
  { subject: "Digital Circuits", solved: 38, total: 50, accuracy: 79 },
  { subject: "Control Systems", solved: 25, total: 40, accuracy: 60 },
  { subject: "Communications", solved: 20, total: 45, accuracy: 55 },
];

export function PYQPractice({ tests }: PYQPracticeProps) {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <FileText className="h-5 w-5" />
          PYQ Practice
        </CardTitle>
        <CardDescription>
          Previous Year Questions with detailed solutions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-medium text-sm">Year-wise Practice</h3>
          {tests
            ?.filter((test) => test.type === "PYQ")
            .map((pyq, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{pyq.name}</span>
                    <Badge
                      variant="outline"
                      className={`text-xs gate-${pyq.status}`}
                    >
                      {pyq.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span>65/65 solved</span>
                    {pyq.accuracy && <span>{pyq.accuracy}% accuracy</span>}
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-4 bg-transparent"
                >
                  {pyq.status === "attempted" ? "Review" : "Continue"}
                </Button>
              </div>
            ))}
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-sm">Subject-wise PYQs</h3>
          {subjectPYQs.map((subject, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{subject.subject}</span>
                  <span className="text-muted-foreground">
                    {subject.solved}/{subject.total}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress
                    value={(subject.solved / subject.total) * 100}
                    className="h-1 flex-1"
                  />
                  <span className="text-xs text-muted-foreground w-12">
                    {subject.accuracy}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 bg-transparent">
            <FileText className="h-4 w-4 mr-2" />
            Topic-wise
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Incorrect Only
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
