import Line from "@/app/ui/line";

export default function Home() {
  const commandList: string[] = [
    "Hey I'm Harsh Shelar👋",
    "You can check out what I'm working on here.",
  ];

  return (
    <>
      <br />
      <br />
      {commandList.map((text, idx) => {
        return <Line key={idx} text={text} />;
      })}
    </>
  );
}
