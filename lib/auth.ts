"use client"

import { useState, useEffect } from "react"

// Define user type
export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "user" | "admin"
  plan?: "basic" | "megapack" | "vpn"
  planExpiry?: Date
}

// Mock user data for demonstration
const MOCK_USERS = [
  {
    id: "1",
    email: "demo@example.com",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
    role: "user" as const,
    plan: "vpn" as const,
    planExpiry: new Date("2025-12-31"),
  },
  {
    id: "2",
    email: "admin@example.com",
    password: "admin123",
    firstName: "Admin",
    lastName: "User",
    role: "admin" as const,
  },
]

// Auth context state
export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check for stored user on component mount
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse stored user", e)
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Find user with matching credentials
      const matchedUser = MOCK_USERS.find((u) => u.email === email && u.password === password)

      if (matchedUser) {
        // Create user object without password
        const { password, ...userWithoutPassword } = matchedUser
        setUser(userWithoutPassword)

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(userWithoutPassword))
        return userWithoutPassword
      } else {
        throw new Error("Invalid email or password")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      return null
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
    whatsappNotifications?: boolean
  }) => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if user already exists
      if (MOCK_USERS.some((u) => u.email === userData.email)) {
        throw new Error("User with this email already exists")
      }

      // Create new user
      const newUser: User = {
        id: `${MOCK_USERS.length + 1}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: "user",
      }

      // In a real app, we would save this to a database
      // For demo purposes, we'll just set the current user
      setUser(newUser)

      // Store in localStorage
      localStorage.setItem("user", JSON.stringify(newUser))
      return newUser
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      return null
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
  }
}

export const isLoggedIn = () => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("user") !== null
}

export const logoutUser = () => {
  if (typeof window === "undefined") return
  localStorage.removeItem("user")
}

export const registerUser = async (userData: any) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Check if user already exists
  if (MOCK_USERS.some((u) => u.email === userData.email)) {
    return { success: false, message: "User with this email already exists" }
  }

  return { success: true, message: "Registration successful" }
}
