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
import { Play, Clock, Users, Trophy, Timer } from "lucide-react";

interface MockTestSimulatorProps {
  tests: Doc<"tests">[] | undefined;
}

export function MockTestSimulator({ tests }: MockTestSimulatorProps) {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Timer className="h-5 w-5" />
          Mock Test Simulator
        </CardTitle>
        <CardDescription>
          3-hour full-length simulation with real exam conditions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {tests
          ?.filter((test) => test.type !== "PYQ")
          .map((test) => (
            <div
              key={test._id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium text-sm">{test.name}</h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    3 hours
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    65 Qs
                  </div>
                  {test.score && (
                    <div className="flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      Best: {test.score}%
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {test.status === "attempted" && (
                  <Badge variant="outline" className="text-xs gate-completed">
                    Attempted
                  </Badge>
                )}
                <Button
                  size="sm"
                  variant={
                    test.status === "attempted" ? "outline" : "default"
                  }
                >
                  <Play className="h-4 w-4 mr-2" />
                  {test.status === "attempted" ? "Retake" : "Start"}
                </Button>
              </div>
            </div>
          ))}

        <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-2">
            <Timer className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-sm text-blue-900 dark:text-blue-100">
              Exam Simulation Mode
            </span>
          </div>
          <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
            Experience real GATE exam conditions with timed sections, no
            pause, and instant analysis.
          </p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Play className="h-4 w-4 mr-2" />
            Start Full Mock Test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
