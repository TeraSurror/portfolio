export function About() {
  return (
    <div className="space-y-6">
      {/* Notion-style text block */}
      <div className="notion-block p-3 -mx-3">
        <p className="text-base leading-relaxed text-foreground">
          Hi! I&apos;m a passionate software developer with a love for creating
          elegant solutions to complex problems. With a strong foundation in
          modern web technologies and a keen eye for detail, I strive to build
          applications that are not just functional, but also intuitive and
          user-friendly.
        </p>
      </div>

      {/* Notion-style callout block */}
      <div className="notion-callout">
        <div className="flex items-start gap-3">
          <span className="text-lg">💡</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground mb-1">Quick Facts</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">📍</span>
                <span className="text-foreground">New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">🗣️</span>
                <span className="text-foreground">English, Marathi, Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
