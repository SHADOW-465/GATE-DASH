"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { TestOverview } from "@/components/test-overview";
import { MockTestSimulator } from "@/components/mock-test-simulator";
import { PYQPractice } from "@/components/pyq-practice";
import { TestPerformance } from "@/components/test-performance";
import { ErrorAnalysis } from "@/components/error-analysis";

export default function TestsPage() {
  const tests = useQuery(api.tests.getTests);
  const performanceTrends = useQuery(api.tests.getPerformanceTrends);
  const weakTopics = useQuery(api.revision.getWeakTopics);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-audiowide font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Test & Practice
          </h1>
          <p className="text-muted-foreground mt-1">
            Mock tests, PYQs, and performance tracking for GATE 2026
          </p>
        </div>
      </div>

      <TestOverview />

      <div className="grid gap-6 lg:grid-cols-2">
        <MockTestSimulator tests={tests} />
        <PYQPractice tests={tests} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <TestPerformance performanceTrends={performanceTrends} />
        <ErrorAnalysis weakTopics={weakTopics} />
      </div>
    </div>
  );
}
