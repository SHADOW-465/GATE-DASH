"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, Plus, Download, Star } from "lucide-react"

const formulaCategories = [
  {
    subject: "Mathematics",
    formulas: [
      {
        title: "Laplace Transform",
        formula: "L{f(t)} = ∫₀^∞ f(t)e^(-st) dt",
        description: "Definition of Laplace Transform",
        tags: ["transforms", "important"],
        starred: true,
      },
      {
        title: "Fourier Series",
        formula: "f(t) = a₀/2 + Σ[aₙcos(nωt) + bₙsin(nωt)]",
        description: "Trigonometric Fourier Series",
        tags: ["series", "periodic"],
        starred: false,
      },
    ],
  },
  {
    subject: "Analog Circuits",
    formulas: [
      {
        title: "Op-Amp Gain",
        formula: "Av = -Rf/Rin",
        description: "Inverting amplifier gain",
        tags: ["op-amp", "gain"],
        starred: true,
      },
      {
        title: "Bandwidth",
        formula: "BW = GBW/Av",
        description: "Gain-Bandwidth product relationship",
        tags: ["frequency", "bandwidth"],
        starred: false,
      },
    ],
  },
  {
    subject: "Digital Circuits",
    formulas: [
      {
        title: "Setup Time",
        formula: "tsu = tpd(clock) - tpd(data)",
        description: "Minimum setup time requirement",
        tags: ["timing", "sequential"],
        starred: true,
      },
    ],
  },
  {
    subject: "Control Systems",
    formulas: [
      {
        title: "Routh Criterion",
        formula: "s³ + as² + bs + c = 0",
        description: "Stability analysis using Routh array",
        tags: ["stability", "routh"],
        starred: true,
      },
    ],
  },
]

export function FormulaSheet() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("Mathematics")

  const filteredFormulas = formulaCategories
    .find((cat) => cat.subject === selectedSubject)
    ?.formulas.filter(
      (formula) =>
        formula.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formula.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formula.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )

  return (
    <Card className="glass border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="font-audiowide text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Formula Sheet
        </CardTitle>
        <CardDescription>Quick access to important formulas and equations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search formulas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        <Tabs value={selectedSubject} onValueChange={setSelectedSubject}>
          <TabsList className="grid w-full grid-cols-4">
            {formulaCategories.map((category) => (
              <TabsTrigger key={category.subject} value={category.subject} className="text-xs">
                {category.subject.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {formulaCategories.map((category) => (
            <TabsContent key={category.subject} value={category.subject} className="space-y-3">
              {filteredFormulas?.map((formula, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-sm">{formula.title}</h3>
                      {formula.starred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Star className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="bg-background/50 p-3 rounded border font-mono text-sm mb-2">{formula.formula}</div>
                  <p className="text-xs text-muted-foreground mb-2">{formula.description}</p>
                  <div className="flex gap-1">
                    {formula.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
