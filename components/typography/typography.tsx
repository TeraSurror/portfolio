import { cn } from "@/lib/utils";

export function H1({ text, className }: { text: string; className?: string }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-2xl lg:text-3xl tracking-wide",
        className
      )}
    >
      {text}
    </h1>
  );
}
