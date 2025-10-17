"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, Line, XAxis, YAxis, AreaChart, Area } from "recharts"
import { TrendingUp, Target, Brain, AlertTriangle, CheckCircle2 } from "lucide-react"

const scorePrediction = [
  { month: "Jan", predicted: 68, confidence: 85 },
  { month: "Feb", predicted: 72, confidence: 88 },
  { month: "Mar", predicted: 75, confidence: 90 },
  { month: "Apr", predicted: 78, confidence: 85 },
  { month: "May", predicted: 80, confidence: 82 },
  { month: "Jun", predicted: 82, confidence: 80 },
]

const subjectPredictions = [
  {
    subject: "Mathematics",
    current: 78,
    predicted: 85,
    confidence: 92,
    trend: "improving",
    recommendation: "Maintain current pace",
  },
  {
    subject: "Analog Circuits",
    current: 55,
    predicted: 68,
    confidence: 75,
    trend: "slow",
    recommendation: "Increase practice time by 40%",
  },
  {
    subject: "Digital Circuits",
    current: 75,
    predicted: 82,
    confidence: 88,
    trend: "good",
    recommendation: "Focus on advanced topics",
  },
  {
    subject: "Control Systems",
    current: 60,
    predicted: 72,
    confidence: 80,
    trend: "improving",
    recommendation: "More numerical practice needed",
  },
  {
    subject: "Communications",
    current: 45,
    predicted: 62,
    confidence: 70,
    trend: "critical",
    recommendation: "Urgent attention required",
  },
  {
    subject: "Electromagnetics",
    current: 65,
    predicted: 75,
    confidence: 85,
    trend: "steady",
    recommendation: "Consistent progress expected",
  },
]

const riskFactors = [
  {
    factor: "Analog Circuits Weakness",
    impact: "High",
    probability: 85,
    mitigation: "Increase study time to 12h/week",
  },
  {
    factor: "Communication Systems Gap",
    impact: "Medium",
    probability: 70,
    mitigation: "Focus on modulation techniques",
  },
  {
    factor: "Time Management in Tests",
    impact: "Medium",
    probability: 60,
    mitigation: "Practice more timed mock tests",
  },
]

const getTrendColor = (trend: string) => {
  switch (trend) {
    case "improving":
    case "good":
      return "gate-completed"
    case "steady":
      return "gate-strong"
    case "slow":
      return "gate-pending"
    case "critical":
      return "gate-weak"
    default:
      return "gate-pending"
  }
}

export function PredictiveAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              GATE Score Prediction
            </CardTitle>
            <CardDescription>Projected performance based on current trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Predicted GATE 2026 Score</span>
                <Badge variant="outline" className="gate-completed">
                  High Confidence
                </Badge>
              </div>
              <div className="text-3xl font-audiowide font-bold text-green-600">75-82 marks</div>
              <div className="text-sm text-muted-foreground">Target range: 70-80 marks</div>
            </div>
            <ChartContainer config={{}} className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={scorePrediction}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                    name="Predicted Score"
                  />
                  <Line type="monotone" dataKey="confidence" stroke="#3b82f6" strokeWidth={2} name="Confidence %" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-audiowide text-xl flex items-center gap-2">
              <Target className="h-5 w-5" />
              Goal Achievement Probability
            </CardTitle>
            <CardDescription>Likelihood of reaching your target score</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">70+ marks (Minimum Goal)</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">92%</span>
                </div>
              </div>
              <Progress value={92} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm">75+ marks (Target Goal)</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">78%</span>
                </div>
              </div>
              <Progress value={78} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm">80+ marks (Stretch Goal)</span>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium">45%</span>
                </div>
              </div>
              <Progress value={45} className="h-2" />
            </div>

            <div className="mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="font-medium text-blue-900 dark:text-blue-100 mb-2">AI Recommendation</div>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Focus on Analog Circuits and Communications for the next 4 weeks to increase your 80+ marks probability
                to 65%.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="font-audiowide text-xl flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Subject-wise Predictions
          </CardTitle>
          <CardDescription>Individual subject performance forecasts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {subjectPredictions.map((subject, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{subject.subject}</span>
                  <Badge variant="outline" className={`text-xs ${getTrendColor(subject.trend)}`}>
                    {subject.trend}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {subject.current}%</span>
                    <span>Predicted: {subject.predicted}%</span>
                  </div>
                  <Progress value={subject.predicted} className="h-2" />
                  <div className="text-xs text-muted-foreground">Confidence: {subject.confidence}%</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">{subject.recommendation}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="glass border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="font-audiowide text-xl flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Risk Analysis
          </CardTitle>
          <CardDescription>Potential challenges and mitigation strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskFactors.map((risk, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{risk.factor}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        risk.impact === "High" ? "gate-weak" : risk.impact === "Medium" ? "gate-pending" : "gate-strong"
                      }`}
                    >
                      {risk.impact} Impact
                    </Badge>
                    <span className="text-xs text-muted-foreground">{risk.probability}%</span>
                  </div>
                </div>
                <Progress value={risk.probability} className="h-2 mb-2" />
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Mitigation:</span> {risk.mitigation}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
