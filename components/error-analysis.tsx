"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  TrendingDown,
  BookOpen,
  RotateCcw,
} from "lucide-react";

interface ErrorAnalysisProps {
  weakTopics: { topic: string; accuracy: number }[] | undefined;
}

export function ErrorAnalysis({ weakTopics }: ErrorAnalysisProps) {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Error Analysis
        </CardTitle>
        <CardDescription>
          Identify and track your weak areas for focused revision
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {weakTopics?.map((error, index) => (
          <div
            key={index}
            className="space-y-3 p-3 rounded-lg bg-muted/30 border border-border/50"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{error.topic}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  Accuracy: {error.accuracy}%
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={error.accuracy} className="h-2 flex-1" />
                  <span className="text-xs text-muted-foreground w-12">
                    {error.accuracy}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 bg-transparent"
              >
                <BookOpen className="h-3 w-3 mr-1" />
                Study
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 bg-transparent"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Practice
              </Button>
            </div>
          </div>
        ))}

        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="h-4 w-4 text-red-600" />
            <span className="font-medium text-sm text-red-900 dark:text-red-100">
              Priority Areas
            </span>
          </div>
          <p className="text-xs text-red-700 dark:text-red-300 mb-2">
            Focus on Communications and Analog Circuits this week
          </p>
          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
            Create Revision Plan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
