"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { About } from "@/components/sections/about";
import { WorkExperience } from "@/components/sections/work-experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { value: "about", label: "📋 About", component: <About /> },
    { value: "experience", label: "💼 Experience", component: <WorkExperience /> },
    { value: "projects", label: "🚀 Projects", component: <Projects /> },
    { value: "education", label: "🎓 Education", component: <Education /> },
    { value: "skills", label: "⚡ Skills", component: <Skills /> },
    { value: "contact", label: "📞 Contact", component: <Contact /> },
  ];

  const activeTabData = tabs.find(tab => tab.value === activeTab);

  return (
    <div className="py-8 sm:py-12 notion-page-enter">
      {/* Notion-style page header */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>🏠</span>
          <span>Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">
          Harsh Shelar
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to my digital space
        </p>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div className="mb-8 sm:hidden">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-card border border-border rounded-lg text-foreground hover:bg-accent/30 transition-colors"
          >
            <span>{activeTabData?.label}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 animate-in fade-in-0 slide-in-from-top-2 duration-200">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => {
                    setActiveTab(tab.value);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-accent/30 transition-colors first:rounded-t-lg last:rounded-b-lg ${activeTab === tab.value ? 'bg-accent text-foreground' : 'text-muted-foreground'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-8 hidden sm:block">
          <TabsList className="bg-transparent p-0 h-auto gap-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="notion-block px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-foreground"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Content sections */}
        <div className="space-y-6">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="focus-visible:outline-none mt-0 animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
            >
              {tab.component}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
