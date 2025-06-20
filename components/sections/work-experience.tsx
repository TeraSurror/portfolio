import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WorkExperience() {
  const experiences = [
    {
      company: "Nomura",
      logo: "/logos/nomura.png",
      position: "Software Engineer",
      duration: "June 2025 - Present",
      achievements: [
        "Built infrastructure for the development team at Nomura.",
        "Improved CI/CD pipeline efficiency by 30%.",
        "Mentored 3 junior engineers.",
      ],
      technologies: ["React", "Java", "Spring Boot", "MySQL"],
    },
    {
      company:
        "National Science Foundation - Center for Integrated Pest Management",
      logo: "/logos/nsf-cipm.png",
      position: "Student Software Engineer",
      duration: "March 2024 - May 2025",
      achievements: [
        "Built LLM powered applications for researchers to analyze pest migration and possible impact.",
        "Integrated LangChain and Ollama for advanced data analysis.",
        "Collaborated with cross-functional research teams.",
      ],
      technologies: ["Python", "Django", "LangChain", "MongoDB", "Ollama"],
    },
    {
      company: "Deutsche Bank",
      logo: "/logos/deutsche-bank.png",
      position: "Software Engineer",
      duration: "July 2021 - July 2023",
      achievements: [
        "Built and maintained applications for the Profit and Loss team.",
        "Migrated legacy systems to modern React/TypeScript stack.",
        "Reduced bug rate by 25% through improved testing.",
      ],
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
            <div
              key={index}
              className="border-b last:border-0 pb-6 last:pb-0 flex flex-col sm:flex-row gap-4 items-start"
            >
              <img
                src={experience.logo}
                alt={experience.company + " logo"}
                className="w-14 h-14 object-contain rounded-lg bg-white border"
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
                <ul className="list-disc pl-5 space-y-1">
                  {experience.achievements.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
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
