import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      emoji: "💻",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "Go"],
    },
    {
      category: "Frontend Development",
      emoji: "🎨",
      skills: ["React", "Next.js", "HTML5", "CSS", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      emoji: "⚙️",
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
      emoji: "🚀",
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
      emoji: "🤖",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {skillCategories.map((category, index) => (
        <Card key={index} className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span>{category.emoji}</span>
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="notion-tag"
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
