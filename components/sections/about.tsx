// Syntax highlighting helper components
function SyntaxKeyword({ children }: { children: string }) {
  return <span className="text-[var(--syntax-keyword)]">{children}</span>;
}

function SyntaxType({ children }: { children: string }) {
  return <span className="text-[var(--syntax-type)]">{children}</span>;
}

function SyntaxProperty({ children }: { children: string }) {
  return <span className="text-[var(--syntax-property)]">{children}</span>;
}

function SyntaxString({ children }: { children: string }) {
  return <span className="text-[var(--syntax-string)]">{children}</span>;
}

function SyntaxNumber({ children }: { children: string | number }) {
  return <span className="text-[var(--syntax-number)]">{children}</span>;
}

function CodeComment({ text }: { text: string }) {
  return (
    <p className="text-sm leading-relaxed text-[var(--syntax-comment)] mb-1">
      {"// "}{text}
    </p>
  );
}

function CodeLine({ children, indent = 0 }: { children: React.ReactNode; indent?: number }) {
  const marginClass = indent > 0 ? `ml-${indent * 4}` : "";
  return (
    <p className={`text-sm leading-relaxed text-foreground ${marginClass}`}>
      {children}
    </p>
  );
}

function ArrayItems({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, index) => (
        <p key={index} className="text-sm leading-relaxed text-foreground ml-8">
          <span className="text-[var(--syntax-string)]">&apos;{item}&apos;</span>
          {index < items.length - 1 ? "," : ""}
        </p>
      ))}
    </>
  );
}

export function About() {
  return (
    <div className="space-y-6">
      {/* Section 1: Developer Profile */}
      <div className="ide-code-block">
        <CodeComment text="Developer Profile" />
        <CodeLine>
          <SyntaxKeyword>const</SyntaxKeyword>{" "}
          <SyntaxType>developer</SyntaxType> = {"{"}
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>name</SyntaxProperty>:{" "}
          <SyntaxString>&apos;Harsh Shelar&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>role</SyntaxProperty>:{" "}
          <SyntaxString>&apos;Software Engineer&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>location</SyntaxProperty>:{" "}
          <SyntaxString>&apos;New York, USA&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>languages</SyntaxProperty>: [
        </CodeLine>
        <ArrayItems items={["English", "Marathi", "Hindi"]} />
        <CodeLine indent={1}>],</CodeLine>
        <CodeLine>{"}"}</CodeLine>
      </div>

      {/* Section 2: Professional Summary */}
      <div className="ide-code-block">
        <CodeComment text="Professional Summary" />
        <CodeLine>
          <SyntaxKeyword>const</SyntaxKeyword>{" "}
          <SyntaxType>professional</SyntaxType> = {"{"}
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>yearsOfExperience</SyntaxProperty>:{" "}
          <SyntaxNumber>4</SyntaxNumber>,
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>specializations</SyntaxProperty>: [
        </CodeLine>
        <ArrayItems items={[
          "Full-Stack Development",
          "Cloud Architecture",
          "Machine Learning",
          "DevOps & CI/CD"
        ]} />
        <CodeLine indent={1}>],</CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>currentFocus</SyntaxProperty>:{" "}
          <SyntaxString>&apos;Building AI-powered applications and scalable systems&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>industries</SyntaxProperty>: [
        </CodeLine>
        <ArrayItems items={["Finance", "Research", "Technology"]} />
        <CodeLine indent={1}>],</CodeLine>
        <CodeLine>{"}"}</CodeLine>
      </div>

      {/* Section 3: Personal Interests */}
      <div className="ide-code-block">
        <CodeComment text="Beyond the Code" />
        <CodeLine>
          <SyntaxKeyword>const</SyntaxKeyword>{" "}
          <SyntaxType>interests</SyntaxType> = {"{"}
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>hobbies</SyntaxProperty>: [
        </CodeLine>
        <ArrayItems items={[
          "Open Source Contributing",
          "Hiking",
          "Art"
        ]} />
        <CodeLine indent={1}>],</CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>passions</SyntaxProperty>: [
        </CodeLine>
        <ArrayItems items={[
          "Solving Complex Problems",
          "Learning New Technologies",
        ]} />
        <CodeLine indent={1}>],</CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>currentlyExploring</SyntaxProperty>:{" "}
          <SyntaxString>&apos;C++ and Systems Programming&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine>{"}"}</CodeLine>
      </div>

      {/* Section 4: Tech Philosophy */}
      <div className="ide-code-block">
        <CodeComment text="Development Philosophy" />
        <CodeLine>
          <SyntaxKeyword>const</SyntaxKeyword>{" "}
          <SyntaxType>philosophy</SyntaxType> = {"{"}
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>approach</SyntaxProperty>:{" "}
          <SyntaxString>&apos;Write clean, maintainable code that solves real problems&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>methodology</SyntaxProperty>:{" "}
          <SyntaxString>&apos;Agile with a focus on iterative improvement&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>principles</SyntaxProperty>: [
        </CodeLine>
        <ArrayItems items={[
          "SOLID principles",
          "Test-Driven Development",
          "Documentation as Code",
        ]} />
        <CodeLine indent={1}>],</CodeLine>
        <CodeLine indent={1}>
          <SyntaxProperty>motto</SyntaxProperty>:{" "}
          <SyntaxString>&apos;Ship fast, learn faster&apos;</SyntaxString>,
        </CodeLine>
        <CodeLine>{"}"}</CodeLine>
      </div>
    </div>
  );
}
