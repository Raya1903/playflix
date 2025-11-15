import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const IplDemo = () => {
  const teams = [
    {
      id: "mumbai-indians",
      name: "Mumbai Indians",
      players: ["Rohit Sharma", "Jasprit Bumrah", "Hardik Pandya", "Kieron Pollard"],
    },
    {
      id: "chennai-super-kings",
      name: "Chennai Super Kings",
      players: ["MS Dhoni", "Ravindra Jadeja", "Shivam Dube", "Ruturaj Gaikwad"],
    },
    {
      id: "royal-challengers-bangalore",
      name: "Royal Challengers Bangalore",
      players: ["Virat Kohli", "AB de Villiers", "Glenn Maxwell"],
    },
    {
      id: "kolkata-knight-riders",
      name: "Kolkata Knight Riders",
      players: ["Shreyas Iyer", "Andre Russell", "Sunil Narine", "Dinesh Karthik"],
    },
    {
      id: "delhi-capitals",
      name: "Delhi Capitals",
      players: ["Rishabh Pant", "Prithvi Shaw", "Kagiso Rabada", "Anrich Nortje"],
    },
    {
      id: "sunrisers-hyderabad",
      name: "Sunrisers Hyderabad",
      players: ["David Warner", "Bhuvneshwar Kumar", "Kane Williamson"],
    },
    {
      id: "punjab-kings",
      name: "Punjab Kings",
      players: ["Shikhar Dhawan", "KL Rahul", "Mayank Agarwal", "Chris Gayle"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Indian Premier League 2025</h1>
          <p className="text-muted-foreground text-lg">
            Explore Teams and Players
          </p>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teams.map((team) => (
              <Dialog key={team.id}>
                <Card className="hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl">{team.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DialogTrigger asChild>
                      <Button className="w-full">View Team</Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{team.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Players:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {team.players.map((player, idx) => (
                        <li key={idx} className="text-muted-foreground">{player}</li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section id="players" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Players by Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teams.map((team) => (
              <Card key={team.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {team.players.map((player, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {player}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>IPL 2025 Demo Application</p>
        </div>
      </footer>
    </div>
  );
};

export default IplDemo;
