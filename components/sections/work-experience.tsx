import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function WorkExperience() {
  const experiences = [
    {
      company: "Nomura",
      logo: "/logos/nomura.jpeg",
      position: "Software Engineer",
      duration: "June 2025 - Present",
      achievements: [
        "Utilized LLMs to automate documentation generation for the codebase of the entire company.",
      ],
      technologies: ["React", "Java", "Spring Boot", "MySQL", "AWS"],
    },
    {
      company:
        "National Science Foundation - Center for Integrated Pest Management",
      logo: "/logos/nsf-cipm.jpeg",
      position: "Student Software Engineer",
      duration: "March 2024 - May 2025",
      achievements: [
        "Architected and implemented a scalable document processing system with Angular and MongoDB.",
        "Developed RESTful APIs using Django and FastAPI, supporting LLM-powered question-answering capabilities.",
        "Created robust Python-based web scraping tools using Selenium, automating research data collection.",
        "Employed state-of-the-art open-source LLMs (Gemma 3) to synthesize information from research papers.",
      ],
      technologies: [
        "Python",
        "Django",
        "FastAPI",
        "LangChain",
        "MongoDB",
        "Ollama",
      ],
    },
    {
      company: "Deutsche Bank",
      logo: "/logos/deutsche-bank.jpeg",
      position: "Software Engineer",
      duration: "July 2021 - July 2023",
      achievements: [
        "Built a dashboard to orchestrate PnL data, using React (Typescript) and Redux",
        "Designed and implemented scalable Java (Spring Boot) microservices for financial data processing.",
        "Developed and optimized RESTful APIs, improving security with JWT authentication and access control.",
        "Built CI/CD pipelines with Jenkins and Kubernetes for automated deployments on Openshift Fabric.",
        "Improved performance of Oracle PL/SQL procedures, reducing data processing time by 15%.",
        "Produced robust unit tests using JUnit and Mockito to ensure high code quality and reliability.",
      ],
      technologies: [
        "Java",
        "React",
        "TypeScript",
        "Spring Boot",
        "Oracle",
        "Docker",
        "Kubernetes",
        "Jenkins",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={experience.logo}
                  width={48}
                  height={48}
                  alt={experience.company + " logo"}
                  className="w-12 h-12 object-contain rounded-lg bg-white/10 border border-border p-1"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {experience.position}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0 bg-accent/30 px-2 py-1 rounded">
                    {experience.duration}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {experience.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-1.5 text-xs">•</span>
                      <p className="text-sm text-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="ide-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
