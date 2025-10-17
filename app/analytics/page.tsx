"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { AnalyticsOverview } from "@/components/analytics-overview"
import { StudyAnalytics } from "@/components/study-analytics"
import { PerformanceReports } from "@/components/performance-reports"
import { PredictiveAnalytics } from "@/components/predictive-analytics"
import { Button } from "@/components/ui/button"
import { Download, BarChart3 } from "lucide-react"

export default function AnalyticsPage() {
  const handleExportData = () => {
    console.log("Exporting GATE analytics data...")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-audiowide font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Analytics & Reports
          </h1>
          <p className="text-muted-foreground mt-1">Comprehensive analytics and predictive insights for GATE 2026</p>
        </div>
        <div className="flex items-center space-x-2">
          <DateRangePicker />
          <Button onClick={handleExportData} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="study">Study Analytics</TabsTrigger>
          <TabsTrigger value="reports">Performance Reports</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <AnalyticsOverview />
        </TabsContent>
        <TabsContent value="study" className="space-y-4">
          <StudyAnalytics />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <PerformanceReports />
        </TabsContent>
        <TabsContent value="predictions" className="space-y-4">
          <PredictiveAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  )
}
