export function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "harshshelar22@gmail.com",
      href: "mailto:harshshelar22@gmail.com",
      logo: "/logos/email.jpeg",
      emoji: "📧",
    },
    {
      title: "GitHub",
      value: "github.com/TeraSurror",
      href: "https://github.com/TeraSurror",
      logo: "/logos/github.jpeg",
      emoji: "🐙",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/harsh-shelar",
      href: "https://linkedin.com/in/harsh-shelar",
      logo: "/logos/linkedin.jpeg",
      emoji: "💼",
    },
    {
      title: "Instagram",
      value: "@harshshelar22",
      href: "https://www.instagram.com/harsh_shelar/",
      logo: "/logos/instagram.jpeg",
      emoji: "📸",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="ide-code-block">
        <p className="text-sm leading-relaxed text-foreground">
          <span className="text-[var(--syntax-keyword)]">const</span>{" "}
          <span className="text-[var(--syntax-type)]">contact</span> = {"{"}
        </p>
        <p className="text-sm leading-relaxed text-foreground ml-4">
          <span className="text-[var(--syntax-property)]">message</span>:{" "}
          <span className="text-[var(--syntax-string)]">
            &apos;Always open to new opportunities and collaborations&apos;
          </span>
          ,
        </p>
        <p className="text-sm leading-relaxed text-foreground">{"}"};</p>
      </div>

      {/* Contact methods */}
      <div className="space-y-2">
        {contactMethods.map((method) => (
          <a
            key={method.title}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block ide-code-block hover:bg-accent/20 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{method.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-foreground text-sm">
                  {method.title}
                </div>
                <div className="text-xs text-muted-foreground truncate font-mono">
                  {method.value}
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-muted-foreground">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
