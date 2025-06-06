"use client"

import { Search, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image"
import { useState } from "react"

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: "#", label: "Find Jobs", active: true },
    { href: "#", label: "Top Companies", active: false },
    { href: "#", label: "Job Tracker", active: false },
    { href: "#", label: "My Calendar", active: false },
    { href: "#", label: "Documents", active: false },
    { href: "#", label: "Messages", active: false },
    { href: "#", label: "Notifications", active: false },
  ]

  return (
    <nav className="bg-white px-4 md:px-12 py-3 sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex items-center justify-between">
          {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/images/logo.png" width={40} height={40} alt="logo" className="flex-shrink-0" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-medium text-sm hover:text-[#0154AA] ${link.active ? "text-gray-700" : "text-gray-500"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
</div>
        {/* Desktop Search and Profile Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 border-none bg-[#F6F9FF] text-sm focus:ring-2 focus:ring-[#0154AA] focus:ring-opacity-20"
            />
          </div>

          <Button className="bg-[#0154AA] hover:bg-[#0a6acf] text-white px-4 py-2 rounded-lg text-sm font-medium">
            Resume Builder
          </Button>

          <Avatar className="w-10 h-10">
            <AvatarImage src="/assets/images/avatar2.jpg" />
            <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">AF</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile/Tablet Right Section */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Search Section */}
          <div className="flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-48 sm:w-64 border-none bg-[#F6F9FF] text-sm focus:ring-2 focus:ring-[#0154AA] focus:ring-opacity-20"
                    autoFocus
                  />
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)} className="p-2">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(true)} className="p-2">
                  <Search className="w-5 h-5 text-gray-600" />
                </Button>

                {/* Mobile Menu */}
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Menu className="w-5 h-5 text-gray-600" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    {/* title is used here to prevent the runtime error. error:`DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users. */}
                    <SheetTitle />
                    <div className="flex flex-col space-y-4 mt-8">
                      <div className="flex items-center space-x-3 px-4 pb-4 border-b">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="/assets/images/avatar2.jpg" />
                          <AvatarFallback className="bg-gray-200 text-gray-600">AF</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">Albert dFlores</p>
                          <p className="text-sm text-gray-500">Product Designer</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {navigationLinks.map((link) => (
                          <SheetClose asChild key={link.label}>
                            <Link
                              href={link.href}
                              className={`block px-4 py-3 rounded-lg font-medium text-sm hover:bg-gray-50 hover:text-[#0154AA] transition-colors ${
                                link.active ? "text-gray-700 bg-gray-50" : "text-gray-500"
                              }`}
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>

                      <div className="pt-4 px-4 border-t">
                        <Button className="w-full bg-[#0154AA] hover:bg-[#0a6acf] text-white rounded-lg">
                          Resume Builder
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar