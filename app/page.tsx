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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <H1 text="Harsh Shelar" className="text-2xl sm:text-3xl lg:text-4xl" />
      <p className="text-base sm:text-lg text-muted-foreground mt-2 mb-6 sm:mb-8">
        Welcome to my digital space
      </p>
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="w-full flex flex-wrap gap-2 justify-start">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <div className="mt-6 sm:mt-8">
          <TabsContent value="about">
            <About />
          </TabsContent>
          <TabsContent value="experience">
            <WorkExperience />
          </TabsContent>
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
          <TabsContent value="education">
            <Education />
          </TabsContent>
          <TabsContent value="skills">
            <Skills />
          </TabsContent>
          <TabsContent value="contact">
            <Contact />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
