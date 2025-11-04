"use client"

import type { PortfolioData } from "./dashboard-page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Trash2, Palette } from "lucide-react"

interface PortfolioFormProps {
  data: PortfolioData
  onChange: (data: PortfolioData) => void
}

export function PortfolioForm({ data, onChange }: PortfolioFormProps) {
  const updateField = <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => {
    onChange({ ...data, [key]: value })
  }

  const updateExperience = (index: number, field: string, value: string) => {
    const newExperience = [...data.experience]
    newExperience[index] = { ...newExperience[index], [field]: value }
    updateField("experience", newExperience)
  }

  const addExperience = () => {
    updateField("experience", [
      ...data.experience,
      { id: Date.now().toString(), company: "", position: "", duration: "", description: "" },
    ])
  }

  const deleteExperience = (index: number) => {
    updateField(
      "experience",
      data.experience.filter((_, i) => i !== index),
    )
  }

  const updateProject = (index: number, field: string, value: string) => {
    const newProjects = [...data.projects]
    newProjects[index] = { ...newProjects[index], [field]: value }
    updateField("projects", newProjects)
  }

  const addProject = () => {
    updateField("projects", [
      ...data.projects,
      { id: Date.now().toString(), title: "", description: "", technologies: "", link: "" },
    ])
  }

  const deleteProject = (index: number) => {
    updateField(
      "projects",
      data.projects.filter((_, i) => i !== index),
    )
  }

  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-6">
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="customize" className="flex items-center gap-2">
          <Palette size={16} />
          <span className="hidden sm:inline">Customize</span>
        </TabsTrigger>
      </TabsList>

      {/* Basic Info */}
      <TabsContent value="basic" className="space-y-4">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Personal and professional overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <Input
                value={data.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your full name"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Professional Title</label>
              <Input
                value={data.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="e.g., Full Stack Developer"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Bio</label>
              <textarea
                value={data.bio}
                onChange={(e) => updateField("bio", e.target.value)}
                placeholder="Tell your story..."
                className="w-full h-24 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Location</label>
              <Input
                value={data.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="City, Country"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Skills (comma-separated)</label>
              <Input
                value={data.skills.join(", ")}
                onChange={(e) =>
                  updateField(
                    "skills",
                    e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter((s) => s),
                  )
                }
                placeholder="React, TypeScript, Node.js"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Contact Info */}
      <TabsContent value="contact" className="space-y-4">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How people can reach you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                value={data.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input
                type="tel"
                value={data.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="mt-1"
              />
            </div>
            <div className="pt-4 border-t border-border">
              <h4 className="font-medium mb-4">Social Links</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">GitHub</label>
                  <Input
                    value={data.social.github || ""}
                    onChange={(e) => updateField("social", { ...data.social, github: e.target.value })}
                    placeholder="https://github.com/username"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">LinkedIn</label>
                  <Input
                    value={data.social.linkedin || ""}
                    onChange={(e) => updateField("social", { ...data.social, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Twitter</label>
                  <Input
                    value={data.social.twitter || ""}
                    onChange={(e) => updateField("social", { ...data.social, twitter: e.target.value })}
                    placeholder="https://twitter.com/username"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <Input
                    value={data.social.website || ""}
                    onChange={(e) => updateField("social", { ...data.social, website: e.target.value })}
                    placeholder="https://yourwebsite.com"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Experience */}
      <TabsContent value="experience" className="space-y-4">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>Your professional background</CardDescription>
            </div>
            <Button onClick={addExperience} size="sm" className="gap-1">
              <Plus size={16} />
              Add
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="space-y-3 p-4 border border-border rounded-lg">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-sm">Experience {index + 1}</h4>
                  <Button
                    onClick={() => deleteExperience(index)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(index, "company", e.target.value)}
                    placeholder="Company name"
                  />
                  <Input
                    value={exp.position}
                    onChange={(e) => updateExperience(index, "position", e.target.value)}
                    placeholder="Position"
                  />
                </div>
                <Input
                  value={exp.duration}
                  onChange={(e) => updateExperience(index, "duration", e.target.value)}
                  placeholder="e.g., 2022 - Present"
                />
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(index, "description", e.target.value)}
                  placeholder="Job description"
                  className="w-full h-20 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Projects */}
      <TabsContent value="projects" className="space-y-4">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Showcase your best work</CardDescription>
            </div>
            <Button onClick={addProject} size="sm" className="gap-1">
              <Plus size={16} />
              Add
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {data.projects.map((project, index) => (
              <div key={project.id} className="space-y-3 p-4 border border-border rounded-lg">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-sm">Project {index + 1}</h4>
                  <Button
                    onClick={() => deleteProject(index)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
                <Input
                  value={project.title}
                  onChange={(e) => updateProject(index, "title", e.target.value)}
                  placeholder="Project title"
                />
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(index, "description", e.target.value)}
                  placeholder="Project description"
                  className="w-full h-20 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <Input
                  value={project.technologies}
                  onChange={(e) => updateProject(index, "technologies", e.target.value)}
                  placeholder="Technologies used"
                />
                <Input
                  value={project.link || ""}
                  onChange={(e) => updateProject(index, "link", e.target.value)}
                  placeholder="Project link (optional)"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="customize" className="space-y-4">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette size={20} />
              Customize Appearance
            </CardTitle>
            <CardDescription>Personalize your portfolio's look and feel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium block mb-3">Theme</label>
                <div className="space-y-2">
                  {["dark", "light"].map((theme) => (
                    <button
                      key={theme}
                      onClick={() => updateField("theme", theme as "dark" | "light")}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                        data.theme === theme
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full ${theme === "dark" ? "bg-slate-800" : "bg-white border border-slate-300"}`}
                        />
                        {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-3">Layout Style</label>
                <div className="space-y-2">
                  {["minimal", "modern", "creative"].map((layout) => (
                    <button
                      key={layout}
                      onClick={() => updateField("layout", layout as "minimal" | "modern" | "creative")}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                        data.layout === layout
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      {layout.charAt(0).toUpperCase() + layout.slice(1)} Layout
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-medium mb-4">Preview Settings</h4>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm text-muted-foreground">
                <p>Current Configuration:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Theme:{" "}
                    <span className="font-medium text-foreground">{data.theme === "dark" ? "Dark" : "Light"}</span>
                  </li>
                  <li>
                    Layout:{" "}
                    <span className="font-medium text-foreground">
                      {data.layout.charAt(0).toUpperCase() + data.layout.slice(1)}
                    </span>
                  </li>
                  <li>
                    Skills: <span className="font-medium text-foreground">{data.skills.length}</span>
                  </li>
                  <li>
                    Experience: <span className="font-medium text-foreground">{data.experience.length}</span>
                  </li>
                  <li>
                    Projects: <span className="font-medium text-foreground">{data.projects.length}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-medium mb-4">Tips for Best Results</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • Use the <strong>Modern</strong> layout for a professional appearance with gradient accents
                </li>
                <li>
                  • Choose <strong>Minimal</strong> for a clean, straightforward design
                </li>
                <li>
                  • Try <strong>Creative</strong> for a unique, eye-catching portfolio
                </li>
                <li>
                  • Switch between <strong>Dark</strong> and <strong>Light</strong> themes to match your preference
                </li>
                <li>• Add 3-5 skills and 2-3 projects for an optimal portfolio</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
