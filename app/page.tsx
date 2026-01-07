"use client";

import { useState } from "react";
import { About } from "@/components/sections/about";
import { WorkExperience } from "@/components/sections/work-experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about.tsx");
  const [activeActivity, setActiveActivity] = useState("explorer");

  const files = [
    { id: "about.tsx", name: "about.tsx", icon: "📄" },
    { id: "experience.tsx", name: "experience.tsx", icon: "💼" },
    { id: "projects.tsx", name: "projects.tsx", icon: "🚀" },
    { id: "education.tsx", name: "education.tsx", icon: "🎓" },
    { id: "skills.tsx", name: "skills.tsx", icon: "⚡" },
    { id: "contact.tsx", name: "contact.tsx", icon: "📞" },
  ];

  const components: Record<string, React.ReactNode> = {
    "about.tsx": <About />,
    "experience.tsx": <WorkExperience />,
    "projects.tsx": <Projects />,
    "education.tsx": <Education />,
    "skills.tsx": <Skills />,
    "contact.tsx": <Contact />,
  };

  const activeComponent = components[activeTab] || <About />;

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Activity Bar */}
      <div className="ide-activity-bar flex flex-col">
        <button
          onClick={() => setActiveActivity("explorer")}
          className={`ide-activity-icon ${activeActivity === "explorer" ? "active" : ""}`}
          title="Explorer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
          </svg>
        </button>
        <button
          onClick={() => setActiveActivity("search")}
          className={`ide-activity-icon ${activeActivity === "search" ? "active" : ""}`}
          title="Search"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
        <button
          onClick={() => setActiveActivity("git")}
          className={`ide-activity-icon ${activeActivity === "git" ? "active" : ""}`}
          title="Source Control"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
            <path d="M9 9h6M9 15h6M9 12h6"/>
          </svg>
        </button>
      </div>

      {/* File Explorer Sidebar */}
      {activeActivity === "explorer" && (
        <div className="ide-file-explorer flex flex-col">
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
            EXPLORER
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            <div className="px-2 text-xs font-semibold text-muted-foreground mb-1">PORTFOLIO</div>
            {files.map((file) => (
              <div
                key={file.id}
                onClick={() => setActiveTab(file.id)}
                className={`ide-file-item ${activeTab === file.id ? "active" : ""}`}
              >
                <span>{file.icon}</span>
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Editor Area */}
      <div className="ide-editor flex flex-col">
        {/* Tabs */}
        <div className="ide-tabs">
          {files.map((file) => (
            <div
              key={file.id}
              onClick={() => setActiveTab(file.id)}
              className={`ide-tab ${activeTab === file.id ? "active" : ""}`}
            >
              <span>{file.icon}</span>
              <span>{file.name}</span>
              {activeTab === file.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Close tab logic could go here
                  }}
                  className="ml-2 hover:bg-white/10 rounded px-1"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Editor Content */}
        <div className="ide-editor-content">
          {activeComponent}
        </div>
      </div>
    </div>
  );
}
