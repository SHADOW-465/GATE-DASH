"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, ChevronsRight } from "lucide-react";

interface SubjectAnalyticsProps {
  subjects: Doc<"subjects">[] | undefined;
}

export function SubjectAnalytics({ subjects }: SubjectAnalyticsProps) {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">
          Subject & Topic Analysis
        </CardTitle>
        <CardDescription>
          Performance breakdown by subject and topic
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects?.map((subject, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-muted/30 border border-border/50"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{subject.name}</span>
              <Badge
                variant="outline"
                className={`text-xs gate-${subject.status}`}
              >
                {subject.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
              <span>Overall Progress</span>
              <span className="font-bold text-foreground">
                {subject.progress}%
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="font-medium">Strongest:</span>
                <span>Topic A</span>
                <span className="font-bold ml-auto">90%</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                <span className="font-medium">Weakest:</span>
                <span>Topic B</span>
                <span className="font-bold ml-auto">45%</span>
              </div>
            </div>
            <Button
              variant="link"
              size="sm"
              className="p-0 h-auto mt-2 text-xs"
            >
              View Detailed Analysis{" "}
              <ChevronsRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
