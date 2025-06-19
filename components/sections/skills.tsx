import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "VS Code", "Figma"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {skillCategories.map((category, index) => (
        <Card key={index} className="h-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
