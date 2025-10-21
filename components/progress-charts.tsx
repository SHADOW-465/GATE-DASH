"use client";

import { Doc } from "@/convex/_generated/dataModel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";

interface ProgressChartsProps {
  tests: Doc<"tests">[] | undefined;
}

const weeklyProgress = [
  { week: "Week 1", theory: 12, pyqs: 8, mock: 3, revision: 5 },
  { week: "Week 2", theory: 15, pyqs: 10, mock: 2, revision: 7 },
  { week: "Week 3", theory: 10, pyqs: 12, mock: 4, revision: 6 },
  { week: "Week 4", theory: 18, pyqs: 15, mock: 3, revision: 8 },
];

export function ProgressCharts({ tests }: ProgressChartsProps) {
  const syllabusData =
    tests?.map((test) => ({
      name: test.name,
      value: test.score || 0,
      color:
        (test.score || 0) > 80
          ? "#10b981"
          : (test.score || 0) > 60
          ? "#f59e0b"
          : "#ef4444",
    })) || [];

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">
          Syllabus Coverage
        </CardTitle>
        <CardDescription>Subject-wise completion percentage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={syllabusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {syllabusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Progress"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {syllabusData.map((subject, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: subject.color }}
                  />
                  <span className="truncate">{subject.name}</span>
                </div>
                <span className="font-medium">{subject.value}%</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-audiowide font-semibold mb-2">
            Weekly Study Hours
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyProgress}>
                <XAxis
                  dataKey="week"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                  }}
                />
                <Legend iconSize={10} />
                <Bar
                  dataKey="theory"
                  stackId="a"
                  fill="#8884d8"
                  name="Theory"
                />
                <Bar dataKey="pyqs" stackId="a" fill="#82ca9d" name="PYQs" />
                <Bar
                  dataKey="mock"
                  stackId="a"
                  fill="#ffc658"
                  name="Mock Tests"
                />
                <Bar
                  dataKey="revision"
                  stackId="a"
                  fill="#ff8042"
                  name="Revision"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
