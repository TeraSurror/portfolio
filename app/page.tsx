import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { About } from "@/components/sections/about";
import { WorkExperience } from "@/components/sections/work-experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="py-8 sm:py-12 notion-page-enter">
      {/* Notion-style page header */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>🏠</span>
          <span>Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">
          Harsh Shelar
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to my digital space
        </p>
      </div>

      {/* Notion-style navigation tabs */}
      <Tabs defaultValue="about" className="w-full">
        <div className="mb-8">
          <TabsList className="bg-transparent p-0 h-auto gap-1">
            <TabsTrigger
              value="about"
              className="notion-block px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-foreground"
            >
              📋 About
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="notion-block px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-foreground"
            >
              💼 Experience
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="notion-block px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-foreground"
            >
              🚀 Projects
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="notion-block px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-foreground"
            >
              🎓 Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="notion-block px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-foreground"
            >
              ⚡ Skills
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="notion-block px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-foreground"
            >
              📞 Contact
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Content sections */}
        <div className="space-y-6">
          <TabsContent value="about" className="focus-visible:outline-none mt-0 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <About />
          </TabsContent>
          <TabsContent value="experience" className="focus-visible:outline-none mt-0 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <WorkExperience />
          </TabsContent>
          <TabsContent value="projects" className="focus-visible:outline-none mt-0 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <Projects />
          </TabsContent>
          <TabsContent value="education" className="focus-visible:outline-none mt-0 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <Education />
          </TabsContent>
          <TabsContent value="skills" className="focus-visible:outline-none mt-0 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <Skills />
          </TabsContent>
          <TabsContent value="contact" className="focus-visible:outline-none mt-0 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <Contact />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
