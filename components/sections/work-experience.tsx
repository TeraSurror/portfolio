import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WorkExperience() {
  const experiences = [
    {
      company: "Nomura",
      position: "Software Engineer",
      duration: "June 2025 - Present",
      description:
        "Building Infrastructure for the development team at Nomura.",
      technologies: ["React", "Java", "Spring Boot", "MySQL"],
    },
    {
      company:
        "National Science Foundation - Center for Integrated Pest Management",
      position: "Student Software Engineer",
      duration: "March 2024 - May 2025",
      description:
        "Build LLM powered applications for researchers to analyze pest migration and possible impact.",
      technologies: ["Python", "Django", "LangChain", "MongoDB", "Ollama"],
    },
    {
      company: "Deutsche Bank",
      position: "Software Engineer",
      duration: "July 2021 - July 2023",
      description:
        "Build and maintain applications of the Profit and Loss team at Deutsche Bank.",
      technologies: ["React", "TypeScript", "Node.js"],
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Work Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
              <div className="space-y-2">
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
                <p className="text-sm sm:text-base">{experience.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
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
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
