import { useState } from "react";
import { ArrowLeft, History } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const CalculatorDemo = () => {
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        const result = eval(display);
        const calculation = `${display} = ${result}`;
        setHistory([...history, calculation]);
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
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
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary-foreground">Calculator Application</h1>
          <p className="text-primary-foreground/80 text-lg">
            Feature-rich calculator built with React and TypeScript
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Display */}
                <div className="bg-secondary border-2 border-border rounded-lg p-4 min-h-[80px] flex items-center justify-end">
                  <div className="text-3xl font-mono text-secondary-foreground break-all text-right">
                    {display || "0"}
                  </div>
                </div>

                {/* Number and Operation Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  {buttons.map((btn) => (
                    <Button
                      key={btn}
                      onClick={() => handleButtonClick(btn)}
                      variant={btn === "=" ? "default" : "secondary"}
                      className={`h-16 text-xl font-semibold ${
                        btn === "=" ? "bg-gradient-primary hover:shadow-glow" : ""
                      }`}
                    >
                      {btn}
                    </Button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    onClick={handleClear}
                    variant="destructive"
                    className="h-14 text-lg font-semibold"
                  >
                    C
                  </Button>
                  <Button
                    onClick={handleDelete}
                    variant="secondary"
                    className="h-14 text-lg font-semibold"
                  >
                    DEL
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-14 text-lg font-semibold"
                      >
                        <History className="mr-2 h-5 w-5" />
                        History
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Calculation History</DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-[400px] pr-4">
                        {history.length === 0 ? (
                          <p className="text-muted-foreground text-center py-8">
                            No history yet. Start calculating!
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {history.map((calc, idx) => (
                              <div
                                key={idx}
                                className="p-3 bg-secondary rounded-lg font-mono text-sm text-secondary-foreground"
                              >
                                <span className="text-muted-foreground mr-2">{idx + 1}.</span>
                                {calc}
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            {/* Features Section */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-center">Features</h3>
              <div className="grid gap-3">
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      ✨ Basic arithmetic operations (+, -, *, /)
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      🔢 Decimal point support
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      🗑️ Clear and delete functionality
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      📜 Calculation history tracking
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Calculator Demo Application - Built with React & TypeScript</p>
        </div>
      </footer>
    </div>
  );
};

export default CalculatorDemo;
