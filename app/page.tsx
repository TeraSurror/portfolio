import { H1 } from "@/components/typography/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="max-w-full">
      <H1 text="harsh's portfolio 1.0" />
      <br />
      <hr />
      <br />
      <Tabs defaultValue="about" className="max-w-full">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <br />
        <TabsContent value="about">About view</TabsContent>
        <TabsContent value="resume">Resume View</TabsContent>
        <TabsContent value="projects">Projects View</TabsContent>
        <TabsContent value="contact">Contact View</TabsContent>
      </Tabs>
      <hr />
    </div>
  );
}
