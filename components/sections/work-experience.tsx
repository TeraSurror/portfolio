import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WorkExperience() {
  const experiences = [
    {
      company: "Company Name",
      position: "Position Title",
      duration: "Jan 2023 - Present",
      description: "Description of your role and achievements",
      technologies: ["React", "TypeScript", "Node.js"],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="space-y-6">
      <Card>
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
