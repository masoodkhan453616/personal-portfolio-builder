// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// interface LoginPageProps {
//   onLoginSuccess: () => void
// }

// export function LoginPage({ onLoginSuccess }: LoginPageProps) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")

//   // Password validation function
//   const validatePassword = (pwd: string): string[] => {
//     const criteria: string[] = []

//     if (pwd.length < 8) criteria.push("at least 8 characters")
//     if (!/[A-Z]/.test(pwd)) criteria.push("one uppercase letter")
//     if (!/[a-z]/.test(pwd)) criteria.push("one lowercase letter")
//     if (!/\d/.test(pwd)) criteria.push("one number")
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) criteria.push("one special character")

//     return criteria
//   }

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault()

//     // Email validation
//     if (!email || !email.includes("@") || !email.includes(".")) {
//       setError("Please enter a valid email address")
//       return
//     }

//     // Password criteria check
//     const failedCriteria = validatePassword(password)
//     if (failedCriteria.length > 0) {
//       setError(`Password must contain: ${failedCriteria.join(", ")}`)
//       return
//     }

//     // For demo purposes - accept any valid-format credentials
//     onLoginSuccess()
//   }

//   const handlePasswordChange = (value: string) => {
//     setPassword(value)
//     setPasswordCriteria(validatePassword(value)) // Update live feedback
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
//       <Card className="w-full max-w-md border-slate-700 bg-slate-800/50 backdrop-blur">
//         <CardHeader className="space-y-2">
//           <div className="flex items-center justify-center mb-4">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">P</span>
//             </div>
//           </div>
//           <CardTitle className="text-2xl text-center text-white">Portfolio Builder</CardTitle>
//           <CardDescription className="text-center text-slate-400">
//             Create your stunning portfolio website
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-slate-300">Email</label>
//               <Input
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-slate-300">Password</label>
//               <Input
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
//               />
//             </div>
//             {error && <p className="text-sm text-red-400">{error}</p>}
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold"
//             >
//               Sign In
//             </Button>
//           </form>
//           <p className="text-xs text-slate-400 text-center mt-4">Demo: Use any email/password to continue</p>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

interface LoginPageProps {
  onLoginSuccess: () => void
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [passwordCriteria, setPasswordCriteria] = useState<string[]>([])

  // Password validation function
  const validatePassword = (pwd: string): string[] => {
    const criteria: string[] = []

    if (pwd.length < 8) criteria.push("at least 8 characters")
    if (!/[A-Z]/.test(pwd)) criteria.push("one uppercase letter")
    if (!/[a-z]/.test(pwd)) criteria.push("one lowercase letter")
    if (!/\d/.test(pwd)) criteria.push("one number")
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) criteria.push("one special character")

    return criteria
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Email validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address")
      return
    }

    // Password criteria check
    const failedCriteria = validatePassword(password)
    if (failedCriteria.length > 0) {
      setError(`Password must contain: ${failedCriteria.join(", ")}`)
      return
    }

    // For demo purposes - accept any valid-format credentials
    onLoginSuccess()
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    setPasswordCriteria(validatePassword(value)) // Update live feedback
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <Card className="w-full max-w-md border-slate-700 bg-slate-800/50 backdrop-blur">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center text-white">Portfolio Builder</CardTitle>
          <CardDescription className="text-center text-slate-400">
            Create your stunning portfolio website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <Input
                type="password"
                placeholder="Enter a strong password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cyan-500"
              />

              {/* Live password strength feedback */}
              {password.length > 0 && passwordCriteria.length > 0 && (
                <div className="mt-2 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <AlertCircle className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-300">Password must include:</p>
                      <ul className="mt-1 space-y-1">
                        {[
                          { test: password.length >= 8, text: "At least 8 characters" },
                          { test: /[A-Z]/.test(password), text: "One uppercase letter" },
                          { test: /[a-z]/.test(password), text: "One lowercase letter" },
                          { test: /\d/.test(password), text: "One number" },
                          { test: /[!@#$%^&*(),.?":{}|<>]/.test(password), text: "One special character (!@#$ etc.)" },
                        ].map((item, i) => (
                          <li
                            key={i}
                            className={`flex items-center gap-2 ${
                              item.test ? "text-green-400" : "text-slate-500"
                            }`}
                          >
                            <span>{item.test ? "✓" : "✗"}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {password.length > 0 && passwordCriteria.length === 0 && (
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span>✓</span> Strong password!
                </p>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-900/20 border border-red-800 rounded-lg flex items-start gap-2 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition-all duration-200"
            >
              Sign In
            </Button>
          </form>

          {/* <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Demo credentials example:
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Email: <span className="font-mono text-cyan-400">demo@example.com</span>
              <br />
              Password: <span className="font-mono text-cyan-400">Password123!</span>
            </p>
          </div> */}
        </CardContent>
      </Card>
    </div>
  )
}