import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "Go"],
    },
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      skills: [
        "Spring Boot",
        "Node.js",
        "Express",
        "Oracle",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      category: "CI/CD & DevOps",
      skills: [
        "Git",
        "Github actions",
        "Docker",
        "Kubernetes",
        "AWS",
        "Helm",
        "Ansible",
      ],
    },
    {
      category: "Machine Learning and Artificial Intelligence",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Numpy",
        "Pandas",
        "LangChain",
        "Ollama",
      ],
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
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs sm:text-sm transition-colors hover:bg-secondary/80"
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
