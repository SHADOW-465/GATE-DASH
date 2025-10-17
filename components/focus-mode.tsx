"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Shield, Eye, Volume2, Smartphone, Wifi, Bell } from "lucide-react"

const distractionBlocks = [
  { name: "Social Media", icon: Smartphone, enabled: true, sites: ["Facebook", "Instagram", "Twitter"] },
  { name: "Entertainment", icon: Eye, enabled: true, sites: ["YouTube", "Netflix", "Gaming"] },
  { name: "News & Forums", icon: Wifi, enabled: false, sites: ["Reddit", "News sites"] },
  { name: "Notifications", icon: Bell, enabled: true, sites: ["All notifications"] },
]

const focusModes = [
  {
    name: "Deep Focus",
    duration: "2 hours",
    description: "Block all distractions, enable white noise",
    intensity: "High",
    color: "gate-weak",
  },
  {
    name: "Light Focus",
    duration: "1 hour",
    description: "Block social media only",
    intensity: "Medium",
    color: "gate-pending",
  },
  {
    name: "Study Mode",
    duration: "30 minutes",
    description: "Minimal distractions, study music",
    intensity: "Low",
    color: "gate-completed",
  },
]

export function FocusMode() {
  const [isActive, setIsActive] = useState(false)
  const [selectedMode, setSelectedMode] = useState(focusModes[0])
  const [blocks, setBlocks] = useState(distractionBlocks)

  const toggleBlock = (index: number) => {
    setBlocks(blocks.map((block, i) => (i === index ? { ...block, enabled: !block.enabled } : block)))
  }

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Focus Mode
        </CardTitle>
        <CardDescription>Block distractions and create optimal study environment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
          <div>
            <div className="font-medium">Focus Mode</div>
            <div className="text-sm text-muted-foreground">
              {isActive ? "Active - Distractions blocked" : "Inactive"}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className={isActive ? "gate-completed" : "gate-pending"}>
              {isActive ? "ON" : "OFF"}
            </Badge>
            <Switch checked={isActive} onCheckedChange={setIsActive} />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Focus Modes</div>
          <div className="grid gap-2">
            {focusModes.map((mode, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedMode.name === mode.name
                    ? "bg-primary/10 border-primary"
                    : "bg-muted/30 border-border/50 hover:bg-muted/50"
                }`}
                onClick={() => setSelectedMode(mode)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{mode.name}</div>
                    <div className="text-xs text-muted-foreground">{mode.description}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`text-xs ${mode.color}`}>
                      {mode.intensity}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{mode.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Distraction Blocks</div>
          <div className="space-y-2">
            {blocks.map((block, index) => {
              const Icon = block.icon
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-sm">{block.name}</div>
                      <div className="text-xs text-muted-foreground">{block.sites.join(", ")}</div>
                    </div>
                  </div>
                  <Switch checked={block.enabled} onCheckedChange={() => toggleBlock(index)} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <Button
            variant={isActive ? "destructive" : "default"}
            onClick={() => setIsActive(!isActive)}
            className="flex items-center gap-2"
          >
            <Shield className="h-4 w-4" />
            {isActive ? "Stop Focus Mode" : "Start Focus Mode"}
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Volume2 className="h-4 w-4" />
            Background Sounds
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
