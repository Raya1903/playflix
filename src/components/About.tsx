import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Cybersecurity Focus",
      description: "Specialized in encryption, secure design patterns, and security implementation",
    },
    {
      icon: Palette,
      title: "Full-Stack Development",
      description: "Building complete applications from backend logic to responsive frontends",
    },
    {
      icon: Rocket,
      title: "Cloud Certified",
      description: "AWS certified professional ready to deploy scalable cloud solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-['Space_Grotesk']">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm currently pursuing my MCA at KLS GIT College Belgaum with a strong foundation in 
            Computer Applications (BCA, CGPA: 7.47). I specialize in cybersecurity, cloud technologies, 
            and web development, with AWS certification and hands-on internship experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
