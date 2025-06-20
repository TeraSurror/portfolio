import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "harshshelar22@gmail.com",
      href: "mailto:harshshelar22@gmail.com",
      logo: "/logos/email.jpeg",
    },
    {
      title: "GitHub",
      value: "github.com/TeraSurror",
      href: "https://github.com/TeraSurror",
      logo: "/logos/github.jpeg",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/harsh-shelar",
      href: "https://linkedin.com/in/harsh-shelar",
      logo: "/logos/linkedin.jpeg",
    },
    {
      title: "Instagram",
      value: "@harshshelar22",
      href: "https://www.instagram.com/harsh_shelar/",
      logo: "/logos/instagram.jpeg",
    },
  ];

  return (
    <Card className="max-w-3xl mx-auto rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">
          Let&apos;s Connect
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm sm:text-base text-muted-foreground">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4 flex items-center gap-3"
              >
                <Image
                  src={method.logo}
                  width={24}
                  height={24}
                  alt={method.title + " logo"}
                  className="w-6 h-6 object-contain rounded-lg bg-white border"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm sm:text-base">
                    {method.title}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground truncate">
                    {method.value}
                  </div>
                </div>
              </Button>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
