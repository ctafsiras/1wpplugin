"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Search, ShieldCheck, LogIn, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { isLoggedIn, logoutUser } from "@/lib/auth"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserLoggedIn(isLoggedIn())
    }
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleLogout = () => {
    logoutUser()
    setUserLoggedIn(false)
    router.push("/")
  }

  return (
    <>
      {/* Security Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>
              ALL PRODUCTS ON 1WPPLUGIN.COM ARE SCANNED BY NORTON & VERIFIED BY MCAFEE TO ENSURE 100% SECURITY.
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {userLoggedIn ? (
              <button onClick={handleLogout} className="hover:text-purple-400">
                Log out
              </button>
            ) : (
              <Link href="/login" className="hover:text-purple-400">
                Log in
              </Link>
            )}
            <Link href="/dmca" className="hover:text-purple-400">
              GPL, COPYRIGHTS & DMCA
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gray-800 py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center mb-4 md:mb-0">
            <div className="relative h-10 w-10 mr-2">
              <Image src="/1wpplugin-logo.png" alt="1wpplugin.com" fill className="object-contain" />
            </div>
            <span className="text-white text-2xl font-bold">
              1WP<span className="text-blue-500">plugin.com</span>
            </span>
          </Link>

          <div className="w-full md:w-1/2 flex mb-4 md:mb-0">
            <form onSubmit={handleSearch} className="w-full flex">
              <Input
                type="text"
                placeholder="Search for any Theme or Plugin..."
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="rounded-l-none bg-purple-600 hover:bg-purple-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>

          <div className="flex gap-4">
            {userLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline" className="text-white border-purple-600 hover:bg-purple-700">
                    MY ACCOUNT
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="text-white border-purple-600 hover:bg-purple-700"
                  onClick={handleLogout}
                >
                  LOG OUT
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <LogIn className="h-5 w-5 mr-2" />
                    SIGN IN
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <UserPlus className="h-5 w-5 mr-2" />
                    SIGN UP
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-sky-500 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-start gap-1 md:gap-6 text-sm font-medium">
          <Link href="/" className="bg-white text-sky-700 px-4 py-2 rounded-full hover:bg-sky-100">
            HOME
          </Link>
          <Link href="/plugins" className="px-4 py-2 hover:bg-sky-600 rounded-full">
            PLUGINS
          </Link>
          <Link href="/themes" className="px-4 py-2 hover:bg-sky-600 rounded-full">
            THEMES
          </Link>
          <Link href="/pricing" className="px-4 py-2 hover:bg-sky-600 rounded-full">
            PRICING & MEMBERSHIP
          </Link>
          <Link href="/contact" className="px-4 py-2 hover:bg-sky-600 rounded-full">
            CONTACT
          </Link>
          <Link href="/hosting" className="px-4 py-2 hover:bg-sky-600 rounded-full flex items-center">
            HOSTING
            <span className="ml-1 bg-blue-700 text-xs px-1 rounded">NEW</span>
          </Link>
          <Link href="/vpn" className="px-4 py-2 hover:bg-sky-600 rounded-full flex items-center">
            VPN
            <span className="ml-1 bg-blue-700 text-xs px-1 rounded">NEW</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
