import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "FitFiction",
      description:
        "FitFiction is a digital health platform that provides stress level predictions, personalized health recommendations, and an interactive chat interface powered by the LLaMA model trained on health data. 🏆 at Hack_NCState.",
      technologies: ["LangChain", "Python", "React", "Flask"],
      link: "https://github.com/TeraSurror/stress-detection",
      image: "/project-image.png",
    },
    {
      title: "Hecate",
      description:
        "Crafted a dynamically typed programming language using Java, featuring functions, classes, and inheritance. Built an interpreter for the language, handling syntax parsing, semantic analysis, and code execution",
      technologies: ["Java"],
      link: "https://github.com/TeraSurror/Hecate",
      image: "/project-image.png",
    },
    {
      title: "Static Site Generator",
      description:
        "Python-based static site generator that converts Markdown content into HTML.",
      technologies: ["Python", "Markdown"],
      link: "https://github.com/TeraSurror/static-site-generator",
      image: "/project-image.png",
    },
    {
      title: "Frogger 3D",
      description: "3D version of the game frogger implemented in WebGL.",
      technologies: ["JavaScript", "WebGL"],
      link: "https://github.com/TeraSurror/frogger",
      image: "/project-image.png",
    },
  ];

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <Card key={index} className="group rounded-xl w-full max-w-full">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl w-full max-w-full break-words">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full max-w-full">
                <span className="truncate w-full max-w-full break-words">
                  {project.title}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary shrink-0 transition-colors break-all"
                  style={{ wordBreak: "break-all" }}
                >
                  View Project →
                </a>
              </div>
            </CardTitle>
            <CardDescription className="sm:line-clamp-2 max-w-full break-words">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
