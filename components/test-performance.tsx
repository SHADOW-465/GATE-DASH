"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const performanceData = [
  { test: "Test 1", score: 45, accuracy: 65, time: 185 },
  { test: "Test 2", score: 52, accuracy: 68, time: 175 },
  { test: "Test 3", score: 48, accuracy: 62, time: 180 },
  { test: "Test 4", score: 58, accuracy: 72, time: 170 },
  { test: "Test 5", score: 62, accuracy: 75, time: 165 },
  { test: "Test 6", score: 55, accuracy: 70, time: 172 },
  { test: "Test 7", score: 65, accuracy: 78, time: 160 },
  { test: "Test 8", score: 68, accuracy: 80, time: 158 },
  { test: "Test 9", score: 63, accuracy: 76, time: 162 },
  { test: "Test 10", score: 70, accuracy: 82, time: 155 },
  { test: "Test 11", score: 72, accuracy: 84, time: 152 },
  { test: "Test 12", score: 68, accuracy: 79, time: 158 },
]

export function TestPerformance() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">Performance Trends</CardTitle>
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
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} name="Score" />
              <Line type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Accuracy %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
