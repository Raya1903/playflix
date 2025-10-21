import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Cybersecurity Intern",
      organization: "Athreya Technologies, Hubli",
      period: "July 2024 - October 2024",
      description: "Completed comprehensive 4-month internship focusing on cybersecurity encryption and secure application design using Java Swing. Worked under the guidance of Sheetal at Athreya Technologies in Hubli Vidyanagar.",
      achievements: [
        "Developed secure encryption systems using Java",
        "Implemented security design patterns in application development",
        "Successfully completed cybersecurity project with 80% achievement rating",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "KLS GIT College, Belgaum",
      period: "2024 - Present",
      gpa: "6.0/10",
      additional: "Currently pursuing",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Oxford College Hubli, KUD University",
      period: "August 2021 - July 2024",
      gpa: "7.47/10",
      additional: null,
    },
    {
      degree: "Pre-University Course (PUC) - PCMB",
      institution: "RVS College Marnhalli, Kartagi-Koppal",
      period: "Completed",
      gpa: "72%",
      additional: null,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-['Space_Grotesk']">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          
          <div className="space-y-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.organization}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {edu.gpa}
                          {edu.additional && ` • ${edu.additional}`}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.period}</span>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Card className="p-6 bg-gradient-hero border-border mt-6">
                <h4 className="text-xl font-semibold text-primary mb-3">Certifications</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="font-medium">AWS Certification</span> - Scaler Academy
                      <br />
                      <a 
                        href="https://www.credly.com/badges/9fa9aa36-8cc0-4784-a108-c8447ce4e9d2/public_url" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View Credential →
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="font-medium">Cloud Enablement Training</span> - BETSOL
                      <br />
                      <a 
                        href="https://www.betsol.com/cloud-enablement/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Learn More →
                      </a>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
