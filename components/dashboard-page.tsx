"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PortfolioForm } from "@/components/portfolio-form"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { LogOut, Menu, X, Download, Eye, EyeOff } from "lucide-react"

interface DashboardPageProps {
  onLogout: () => void
}

export interface PortfolioData {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  skills: string[]
  experience: Array<{
    id: string
    company: string
    position: string
    duration: string
    description: string
  }>
  projects: Array<{
    id: string
    title: string
    description: string
    technologies: string
    link?: string
  }>
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
  theme: "dark" | "light"
  layout: "minimal" | "modern" | "creative"
}

export function DashboardPage({ onLogout }: DashboardPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showPreview, setShowPreview] = useState(true)
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    name: "Your Name",
    title: "Full Stack Developer",
    bio: "I build beautiful and functional digital experiences.",
    email: "you@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js", "CSS", "Web Design"],
    experience: [
      {
        id: "1",
        company: "Tech Company",
        position: "Senior Developer",
        duration: "2022 - Present",
        description: "Led development of key features and mentored junior developers.",
      },
    ],
    projects: [
      {
        id: "1",
        title: "E-Commerce Platform",
        description: "A modern e-commerce solution with real-time inventory management.",
        technologies: "React, Node.js, PostgreSQL",
        link: "https://example.com",
      },
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    theme: "dark",
    layout: "modern",
  })

  const handleExport = () => {
    const json = JSON.stringify(portfolioData, null, 2)
    const blob = new Blob([json], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `portfolio_${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string)
        setPortfolioData(imported)
      } catch {
        alert("Failed to import portfolio. Please check the file format.")
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Portfolio Builder</h1>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <label className="cursor-pointer">
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors">
                Import
              </span>
            </label>
            <Button onClick={handleExport} variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download size={16} />
              Export
            </Button>
            <Button
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
              size="sm"
              className="gap-2 hidden lg:flex"
            >
              {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
              {showPreview ? "Hide" : "Show"}
            </Button>
            <Button onClick={onLogout} variant="default" size="sm" className="gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border p-4 space-y-2">
            <label className="cursor-pointer block">
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
              <span className="block w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors text-left">
                Import
              </span>
            </label>
            <Button
              onClick={handleExport}
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 bg-transparent"
            >
              <Download size={16} />
              Export
            </Button>
            <Button
              onClick={() => {
                setShowPreview(!showPreview)
                setMobileMenuOpen(false)
              }}
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2"
            >
              {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
              {showPreview ? "Hide Preview" : "Show Preview"}
            </Button>
            <Button
              onClick={() => {
                setMobileMenuOpen(false)
                onLogout()
              }}
              variant="default"
              size="sm"
              className="w-full justify-start gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className={`grid gap-8 ${showPreview ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
          {/* Form Section */}
          <div>
            <div className="text-sm font-semibold text-muted-foreground mb-4">Build Your Portfolio</div>
            <PortfolioForm data={portfolioData} onChange={setPortfolioData} />
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="order-1 lg:order-2">
              <div className="sticky top-20">
                <div className="text-sm font-semibold text-muted-foreground mb-4">Live Preview</div>
                <PortfolioPreview data={portfolioData} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
