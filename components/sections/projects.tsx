import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "FitFiction",
      description:
        "FitFiction is a digital health platform that provides stress level predictions, personalized health recommendations, and an interactive chat interface powered by the LLaMA model trained on health data. 🏆 at Hack_NCState.",
      technologies: ["LangChain", "Python", "React", "Flask"],
      link: "https://github.com/TeraSurror/stress-detection",
      emoji: "🏥",
    },
    {
      title: "Hecate",
      description:
        "Crafted a dynamically typed programming language using Java, featuring functions, classes, and inheritance. Built an interpreter for the language, handling syntax parsing, semantic analysis, and code execution",
      technologies: ["Java"],
      link: "https://github.com/TeraSurror/Hecate",
      emoji: "⚡",
    },
    {
      title: "Static Site Generator",
      description:
        "Python-based static site generator that converts Markdown content into HTML.",
      technologies: ["Python", "Markdown"],
      link: "https://github.com/TeraSurror/static-site-generator",
      emoji: "📝",
    },
    {
      title: "Frogger 3D",
      description: "3D version of the game frogger implemented in WebGL.",
      technologies: ["JavaScript", "WebGL"],
      link: "https://github.com/TeraSurror/frogger",
      emoji: "🐸",
    },
  ];

  return (
    <div className="space-y-3">
      {projects.map((project, index) => (
        <Card key={index} className="group">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center text-lg">
                  {project.emoji}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="notion-button text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View →
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
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
