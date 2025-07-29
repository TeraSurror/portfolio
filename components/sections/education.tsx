import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "North Carolina State University",
      logo: "/logos/ncsu.jpeg",
      duration: "2023 - 2025",
      location: "Raleigh, NC",
      description:
        "Relevant Coursework: Software Engineering, Cloud Computing, Neural Networks, Internet Protocols",
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Sardar Patel Institute of Technology",
      logo: "/logos/spit.jpeg",
      duration: "2017 - 2021",
      location: "Mumbai, Maharashtra, India",
      description:
        "Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks",
    },
  ];

  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={edu.logo}
                  width={48}
                  height={48}
                  alt={edu.institution + " logo"}
                  className="w-12 h-12 object-contain rounded-lg bg-white/10 border border-border p-1"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>📍</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0 bg-accent/30 px-2 py-1 rounded">
                    {edu.duration}
                  </span>
                </div>
                
                <div className="notion-callout mt-3">
                  <div className="flex items-start gap-3">
                    <span className="text-sm">📚</span>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
