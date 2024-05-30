import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip.jsx";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import { LucideLogIn, LucideLogOut, LucideActivity, LucideAlertCircle } from "lucide-react";

const containers = [
  {
    name: "Container 1",
    params: "param1=value1, param2=value2",
    logs: "#",
    runningInstances: 3,
    scalerState: "active",
  },
  {
    name: "Container 2",
    params: "param1=value1, param2=value2",
    logs: "#",
    runningInstances: 1,
    scalerState: "inactive",
  },
  // Add more containers as needed
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="flex items-center justify-between py-4">
        <h1 className="text-3xl font-bold">Docker Dashboard</h1>
        <Input type="search" placeholder="Search containers..." className="max-w-xs" />
      </header>
      <Separator className="my-4" />
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {containers.map((container, index) => (
            <Card key={index} className="bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{container.name}</span>
                  <Badge variant={container.scalerState === "active" ? "default" : "destructive"}>
                    {container.scalerState}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Params:</strong> {container.params}</p>
                <p><strong>Running Instances:</strong> {container.runningInstances}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button as="a" href={container.logs} variant="link" className="text-blue-400">
                  View Logs
                </Button>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="ghost" size="icon">
                      {container.scalerState === "active" ? (
                        <LucideActivity className="text-green-400" />
                      ) : (
                        <LucideAlertCircle className="text-red-400" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{container.scalerState === "active" ? "Scaler is active" : "Scaler is inactive"}</p>
                  </TooltipContent>
                </Tooltip>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Index;