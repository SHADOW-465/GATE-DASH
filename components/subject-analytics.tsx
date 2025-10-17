"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, ChevronsRight } from "lucide-react"

const subjectAnalysisData = [
  {
    name: "Analog Circuits",
    accuracy: 58,
    trend: "improving",
    strongestTopic: { name: "Diode Circuits", accuracy: 85 },
    weakestTopic: { name: "BJT Biasing", accuracy: 42 },
  },
  {
    name: "Digital Circuits",
    accuracy: 82,
    trend: "stable",
    strongestTopic: { name: "Logic Gates", accuracy: 95 },
    weakestTopic: { name: "ADC/DAC", accuracy: 68 },
  },
  {
    name: "Control Systems",
    accuracy: 65,
    trend: "declining",
    strongestTopic: { name: "Time Response", accuracy: 80 },
    weakestTopic: { name: "Frequency Response", accuracy: 51 },
  },
  {
    name: "Communications",
    accuracy: 71,
    trend: "improving",
    strongestTopic: { name: "AM/FM", accuracy: 88 },
    weakestTopic: { name: "Information Theory", accuracy: 60 },
  },
]

export function SubjectAnalytics() {
  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl">Subject & Topic Analysis</CardTitle>
        <CardDescription>Performance breakdown by subject and topic</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjectAnalysisData.map((subject, index) => (
          <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{subject.name}</span>
              <Badge
                variant="outline"
                className={`text-xs ${
                  subject.trend === "improving"
                    ? "gate-strong"
                    : subject.trend === "declining"
                      ? "gate-weak"
                      : "gate-pending"
                }`}
              >
                {subject.trend}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
              <span>Overall Accuracy</span>
              <span className="font-bold text-foreground">{subject.accuracy}%</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="font-medium">Strongest:</span>
                <span>{subject.strongestTopic.name}</span>
                <span className="font-bold ml-auto">{subject.strongestTopic.accuracy}%</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                <span className="font-medium">Weakest:</span>
                <span>{subject.weakestTopic.name}</span>
                <span className="font-bold ml-auto">{subject.weakestTopic.accuracy}%</span>
              </div>
            </div>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-xs">
              View Detailed Analysis <ChevronsRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
