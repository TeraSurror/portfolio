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
    <div className="space-y-6">
      {experiences.map((experience, index) => (
        <Card key={index} className="rounded-xl">
          <CardContent className="space-y-6">
            <div
              key={index}
              className="border-b last:border-0 pb-6 last:pb-0 flex flex-col sm:flex-row gap-4 items-start"
            >
              <Image
                src={experience.logo}
                width={56}
                height={56}
                alt={experience.company + " logo"}
                className="mr-4 w-14 h-14 object-contain rounded-lg bg-white border"
              />
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {experience.position}
                  </h3>
                  <span className="text-sm text-muted-foreground shrink-0">
                    {experience.duration}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {experience.company}
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-1">
                  {experience.achievements.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs sm:text-sm"
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
