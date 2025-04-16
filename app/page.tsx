import { H1 } from "@/components/typography/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <hr />
        <br />
        <TabsContent value="about">About view</TabsContent>
        <TabsContent value="resume">Resume View</TabsContent>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
        <TabsContent value="contact">Contact View</TabsContent>
      </Tabs>
      <hr />
    </div>
  );
}

function Projects() {
  const projectList = [
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
    {
      title: "Project title",
      description: "Some description about the project",
      link: "some link man idk",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {projectList.map((project, idx) => {
        return (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Some Project stuff</p>
            </CardContent>
            <CardFooter>
              <p>feet hehehe</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
