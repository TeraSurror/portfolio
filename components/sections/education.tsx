import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "North Carolina State University",
      duration: "2023 - 2025",
      location: "Raliegh, NC",
      description:
        "Relevant Coursework: Software Engineering, Cloud Computing, Neural Networks, Internet Protocols",
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Sardar Patel Institute of Technology",
      duration: "2017 - 2021",
      location: "Mumbai, Maharashtra, India",
      description:
        "Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-muted-foreground shrink-0">
                    {edu.duration}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-muted-foreground">
                  <span className="text-base">{edu.institution}</span>
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
