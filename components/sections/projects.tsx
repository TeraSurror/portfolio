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
      title: "Project Name",
      description: "A brief description of the project",
      technologies: ["React", "Next.js", "TypeScript"],
      link: "https://github.com/yourusername/project",
      image: "/project-image.png",
    },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="group hover:shadow-lg transition-shadow">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate">{project.title}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary shrink-0"
                >
                  View →
                </a>
              </div>
            </CardTitle>
            <CardDescription className="line-clamp-2">
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
