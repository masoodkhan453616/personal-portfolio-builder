"use client"

import { useState, useEffect } from "react"
import { LoginPage } from "@/components/login-page"
import { DashboardPage } from "@/components/dashboard-page"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const token = localStorage.getItem("auth_token")
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  if (!mounted) return null

  return isLoggedIn ? (
    <DashboardPage
      onLogout={() => {
        localStorage.removeItem("auth_token")
        setIsLoggedIn(false)
      }}
    />
  ) : (
    <LoginPage
      onLoginSuccess={() => {
        localStorage.setItem("auth_token", "portfolio_builder_token")
        setIsLoggedIn(true)
      }}
    />
  )
}
