import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <Card className="max-w-3xl mx-auto rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm sm:text-base text-muted-foreground">
          Hi! I&apos;m a passionate software developer with a love for creating
          elegant solutions to complex problems. With a strong foundation in
          modern web technologies and a keen eye for detail, I strive to build
          applications that are not just functional, but also intuitive and
          user-friendly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-medium">Location</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              New York, USA
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-medium">Languages</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              English, Marathi, Hindi
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
