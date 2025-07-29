import Image from "next/image";

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
    <div className="space-y-6">
      {/* Notion-style text block */}
      <div className="notion-block p-3 -mx-3">
        <p className="text-base leading-relaxed text-foreground">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>
      </div>

      {/* Contact methods as Notion-style blocks */}
      <div className="space-y-2">
        {contactMethods.map((method) => (
          <a
            key={method.title}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block notion-block p-3 -mx-3 transition-all duration-150 hover:bg-accent/30 rounded-md group"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 bg-accent/30 rounded-lg flex items-center justify-center text-sm">
                  {method.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground text-sm">
                    {method.title}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {method.value}
                  </div>
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
