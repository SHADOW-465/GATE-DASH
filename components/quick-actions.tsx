"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Timer, ListPlus, BrainCircuit } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function AddTaskDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <ListPlus className="mr-2 h-4 w-4" />
          Add New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Add a new study task to your schedule.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-name" className="text-right">
              Task
            </Label>
            <Input id="task-name" placeholder="e.g., Solve PYQs" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subject" className="text-right">
              Subject
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng-math">Engineering Mathematics</SelectItem>
                <SelectItem value="networks">Networks, Signals & Systems</SelectItem>
                <SelectItem value="em-devices">Electronic Devices</SelectItem>
                <SelectItem value="analog-circuits">Analog Circuits</SelectItem>
                <SelectItem value="digital-circuits">Digital Circuits</SelectItem>
                <SelectItem value="control-systems">Control Systems</SelectItem>
                <SelectItem value="communications">Communications</SelectItem>
                <SelectItem value="electromagnetics">Electromagnetics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit">Add Task</Button>
      </DialogContent>
    </Dialog>
  )
}


export function QuickActions() {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button variant="outline" className="w-full justify-start">
          <Timer className="mr-2 h-4 w-4" />
          Start Pomodoro
        </Button>
        <AddTaskDialog />
        <Button variant="outline" className="w-full justify-start">
          <BrainCircuit className="mr-2 h-4 w-4" />
          Practice Weak Topics
        </Button>
      </CardContent>
    </Card>
  )
}
