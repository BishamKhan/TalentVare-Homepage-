"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-12 py-3">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Image
            src="/assets/images/logo.png" 
            width={40}
            height={40}
            />
          {/* <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
            </div>
          </div> */}

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Find Jobs
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm">
              Top Companies
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm">
              Job Tracker
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm">
              My Calendar
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm">
              Documents
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm">
              Messages
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm">
              Notifications
            </Link>
          </div>
        </div>

        {/* Search and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 border-none bg-[#F6F9FF] text-sm"
            />
          </div>

          {/* Resume Builder Button */}
          <Button className="bg-[#0154AA] hover:bg-[#0a6acf] text-white px-4 py-2 rounded-lg text-sm font-medium">
            Resume Builder
          </Button>

          {/* Profile Avatar */}
          <Avatar className="w-10 h-10">
            <AvatarImage src="/assets/images/avatar2.jpg" />
            <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">AF</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden mt-4 flex flex-wrap gap-4">
        <Link href="#" className="text-gray-700 hover:text-[#0154AA] font-medium text-sm">
          Find Jobs
        </Link>
        <Link href="#" className="text-gray-500 hover:text-[#0154AA] font-medium text-sm">
          Top Companies
        </Link>
        <Link href="#" className="text-gray-500 hover:text-[#0154AA] font-medium text-sm">
          Job Tracker
        </Link>
        <Link href="#" className="text-gray-500 hover:text-[#0154AA] font-medium text-sm">
          My Calendar
        </Link>
        <Link href="#" className="text-gray-500 hover:text-[#0154AA] font-medium text-sm">
          Documents
        </Link>
        <Link href="#" className="text-gray-500 hover:text-[#0154AA] font-medium text-sm">
          Messages
        </Link>
        <Link href="#" className="text-gray-500 hover:text-[#0154AA] font-medium text-sm">
          Notifications
        </Link>
      </div>
    </nav>
  )
}
