import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "North Carolina State University",
      logo: "/logos/ncsu.jpeg",
      duration: "2023 - 2025",
      location: "Raliegh, NC",
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
    <div className="space-y-6">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-b last:border-0 pb-6 last:pb-0 flex flex-col sm:flex-row gap-4 items-start"
            >
              <Image
                src={edu.logo}
                width={56}
                height={56}
                alt={edu.institution + " logo"}
                className="w-14 h-14 object-contain rounded-lg bg-white border"
              />
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-muted-foreground shrink-0">
                    {edu.duration}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-muted-foreground">
                  <span className="text-base flex items-center gap-2">
                    {edu.institution}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-sm">{edu.location}</span>
                </div>
                <p className="text-sm sm:text-base">{edu.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
