"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
// import logo from "@/logo.png"
import Link from "next/link";
import Image from "next/image";

export default function NavigationMenu({ bgTransparent }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  //  ADD URL FOR ALL ITEMS
  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Subscription",
      url: "/subscription",
    },
    {
      title: "Certification",
      url: "/certification",
    },
    {
      title: "Video Tutorials",
      url: "/video-tutorials",
    },
    {
      title: "Our Features",
      url: "/our-features",
    },
    {
      title: "Schooldeeds",
      url: "#",
      items: [
        {
          name: "About US",
          description: "Get insights from your data",
          url: "/about-us",
        },
        {
          name: "Contact Us",
          description: "Connect with your audience",
          url: "/contact-us",
          // subItems: [
          //   {
          //     name: "Email Marketing",
          //     description: "Send targeted campaigns",
          //     url: "/products/engagement/email-marketing",
          //   },
          //   {
          //     name: "Social Media",
          //     description: "Manage all platforms",
          //     url: "/products/engagement/social-media",
          //   },
          //   {
          //     name: "Live Chat",
          //     description: "Talk to customers in real-time",
          //     url: "/products/engagement/live-chat",
          //   },
          //   {
          //     name: "Push Notifications",
          //     description: "Reach users instantly",
          //     url: "/products/engagement/push-notifications",
          //   },
          // ],
        },
        {
          name: "Clients",
          description: "Keep your data safe",
          url: "/clients",
        },
        {
          name: "Our Teams",
          description: "Keep your data safe",
          url: "/our-teams",
        },
        {
          name: "Careers",
          description: "Keep your data safe",
          url: "/careers",
        },
        {
          name: "Articles",
          description: "Keep your data safe",
          url: "/articles",
        },
      ],
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ];

  return (
    <nav className={`fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full max-w-7xl z-[100] transition-all duration-300 rounded-[20px] ${bgTransparent ? "bg-[linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),linear-gradient(106.76deg,rgba(31,185,232,0.2)_11.57%,rgba(222,70,70,0.2)_88.65%)] backdrop-blur-[4px]" : "bg-[linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),linear-gradient(106.76deg,rgba(31,185,232,0.2)_11.57%,rgba(222,70,70,0.2)_88.65%)] backdrop-blur-[4px]"}`}>
      <div className=" px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-[44px] h-[60px] my-2" >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((menu, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setOpenMenu(idx)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenSubMenu(null);
                }}
              >
                <Link
                  href={menu.url}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-md transition"
                >
                  {menu.title}
                  {
                    menu?.items && <ChevronDown className="ml-1 h-4 w-4" />
                  }
                </Link>

                {/* MAIN DROPDOWN */}
                {menu?.items && openMenu === idx && (
                  <div
                    className="absolute left-0 top-full w-36 bg-white/10 backdrop-blur-sm rounded-[20px] shadow-lg py-2 z-50 animate-fadeSlide"
                    onMouseEnter={() => setOpenMenu(idx)}
                  >
                    {menu?.items &&
                      menu?.items?.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="relative"
                          onMouseEnter={() => item.subItems && setOpenSubMenu(itemIdx)}
                          onMouseLeave={() => setOpenSubMenu(null)}
                        >
                          <Link
                            href={item.url}
                            // className="flex justify-between items-center px-4 py-3 transition border-b border-white/10"
                            className={`flex justify-between items-center py-3 transition mx-4 ${itemIdx < menu.items.length - 1 ? 'border-b border-white/10' : ''}`}
                          >
                            <div>
                              <div className="font-medium text-white text-sm">
                                {item.name}
                              </div>
                              {/* <div className="text-gray-500 text-xs mt-1">
                              {item.description}
                            </div> */}
                            </div>

                            {item.subItems && (
                              <ChevronRight className="h-4 w-4 text-gray-500" />
                            )}
                          </Link>

                          {/* SUB MENU */}
                          {/* {openSubMenu === itemIdx && item.subItems && (
                          <div className="absolute left-full top-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 ml-1 animate-fadeSlide">
                            {item.subItems.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.url}
                                className="block px-4 py-3 hover:bg-gray-50"
                              >
                                <div className="font-medium text-white text-sm">
                                  {sub.name}
                                </div>
                                <div className="text-white text-xs mt-1">
                                  {sub.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )} */}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm text-white rounded-full border border-white"
              style={{
                background: 'linear-gradient(270deg, rgba(234, 61, 52, 0.7) 0%, rgba(31, 185, 232, 0.7) 98.7%)'
              }}
            >
              LogIn
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm text-black rounded-full border border-white bg-white"

            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg rounded-b-[20px] border-t border-white/10 animate-fadeSlide max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
          <div className="p-4 space-y-1">
            {menuItems.map((menu, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden">
                <div
                  onClick={() => setMobileSubMenu(mobileSubMenu === idx ? null : idx)}
                  className="flex items-center justify-between hover:bg-white/10 transition-colors">
                  <Link
                    href={menu?.url}
                    className="flex-grow px-4 py-3 text-white font-medium "
                    onClick={() => !menu.items && setMobileOpen(false)}
                  >
                    {menu.title}
                  </Link>
                  {menu?.items && (
                    <button
                      onClick={() => setMobileSubMenu(mobileSubMenu === idx ? null : idx)}
                      className="px-4 py-3 text-white"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${mobileSubMenu === idx ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Only Icon click and dropdown Open */}

                {/* <div className="flex items-center justify-between">
                  <Link
                    href={menu.url}
                    className="flex-grow px-4 py-3 text-white font-medium hover:bg-white/10 transition-colors"
                    onClick={() => !menu.items && setMobileOpen(false)}
                  >
                    {menu.title}
                  </Link>
                  {menu?.items && (
                    <button
                      onClick={() => setMobileSubMenu(mobileSubMenu === idx ? null : idx)}
                      className="px-4 py-3 text-white hover:bg-white/10 transition-colors"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${mobileSubMenu === idx ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div> */}

                {/* MOBILE DROPDOWN */}
                {menu?.items && mobileSubMenu === idx && (
                  <div className="bg-white/5 mx-2 mb-2 rounded-lg py-1 border border-white/5">
                    {menu.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.url}
                        className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <Link
                href="/login"
                className="flex items-center justify-center px-4 py-3 text-sm text-white rounded-full border border-white/20"
                style={{
                  background: 'linear-gradient(270deg, rgba(234, 61, 52, 0.7) 0%, rgba(31, 185, 232, 0.7) 98.7%)'
                }}
                onClick={() => setMobileOpen(false)}
              >
                LogIn
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center px-4 py-3 text-sm text-black rounded-full bg-white font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
