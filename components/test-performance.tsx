"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface TestPerformanceProps {
  performanceTrends: {
    scores: (number | undefined)[];
    accuracy: (number | undefined)[];
  } | undefined;
}

export function TestPerformance({ performanceTrends }: TestPerformanceProps) {
  const performanceData =
    performanceTrends?.scores.map((score, index) => ({
      test: `Test ${index + 1}`,
      score: score || 0,
      accuracy: performanceTrends?.accuracy[index] || 0,
    })) || [];

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">
          Performance Trends
        </CardTitle>
        <CardDescription>Track your improvement over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="test" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Score"
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#10b981"
                strokeWidth={2}
                name="Accuracy %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
