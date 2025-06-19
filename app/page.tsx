import { H1 } from "@/components/typography/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { About } from "@/components/sections/about";
import { WorkExperience } from "@/components/sections/work-experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-3 sm:py-6">
      <H1 text="Harsh Shelar" className="text-2xl sm:text-3xl lg:text-4xl" />
      <p className="text-base sm:text-lg text-muted-foreground mt-2 mb-4 sm:mb-6">
        Welcome to my digital space
      </p>
      <Tabs defaultValue="about" className="w-full">
        <div className="border rounded-lg p-1.5 sm:p-2 mb-4 sm:mb-6 overflow-x-auto shadow-sm">
          <TabsList className="w-full flex min-w-max sm:min-w-0 gap-0.5 sm:gap-1">
            <TabsTrigger
              className="px-3 sm:px-4 hover:bg-secondary/80"
              value="about"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              className="px-3 sm:px-4 hover:bg-secondary/80"
              value="experience"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              className="px-3 sm:px-4 hover:bg-secondary/80"
              value="projects"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger className="px-3 sm:px-4" value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className="px-3 sm:px-4" value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="px-3 sm:px-4" value="contact">
              Contact
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-4">
          <TabsContent value="about" className="focus-visible:outline-none">
            <About />
          </TabsContent>
          <TabsContent
            value="experience"
            className="focus-visible:outline-none"
          >
            <WorkExperience />
          </TabsContent>
          <TabsContent value="projects" className="focus-visible:outline-none">
            <Projects />
          </TabsContent>
          <TabsContent value="education" className="focus-visible:outline-none">
            <Education />
          </TabsContent>
          <TabsContent value="skills" className="focus-visible:outline-none">
            <Skills />
          </TabsContent>
          <TabsContent value="contact" className="focus-visible:outline-none">
            <Contact />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
