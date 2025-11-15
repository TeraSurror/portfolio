export function About() {
  return (
    <div className="space-y-4">
      <div className="ide-code-block">
        <p className="text-sm leading-relaxed text-foreground">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#4ec9b0]">about</span> = {"{"}
        </p>
        <p className="text-sm leading-relaxed text-foreground ml-4">
          <span className="text-[#9cdcfe]">name</span>:{" "}
          <span className="text-[#ce9178]">&apos;Harsh Shelar&apos;</span>,
        </p>
        <p className="text-sm leading-relaxed text-foreground ml-4">
          <span className="text-[#9cdcfe]">description</span>:{" "}
          <span className="text-[#ce9178]">
            &apos;Passionate software developer with a love for creating elegant
            solutions to complex problems&apos;
          </span>
          ,
        </p>
        <p className="text-sm leading-relaxed text-foreground ml-4">
          <span className="text-[#9cdcfe]">location</span>:{" "}
          <span className="text-[#ce9178]">&apos;New York, USA&apos;</span>,
        </p>
        <p className="text-sm leading-relaxed text-foreground ml-4">
          <span className="text-[#9cdcfe]">languages</span>: [
          <span className="text-[#ce9178]">
            &apos;English&apos;, &apos;Marathi&apos;, &apos;Hindi&apos;
          </span>
          ],
        </p>
        <p className="text-sm leading-relaxed text-foreground">{"}"};</p>
      </div>
    </div>
  );
}
