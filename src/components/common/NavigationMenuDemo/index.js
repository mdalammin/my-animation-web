"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NavigationMenu() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  // ⭐ ADD URL FOR ALL ITEMS
  const menuItems = [
    {
      title: "Products",
      url: "/products",
      items: [
        {
          name: "Analytics",
          description: "Get insights from your data",
          url: "/products/analytics",
        },
        {
          name: "Engagement",
          description: "Connect with your audience",
          url: "/products/engagement",
          subItems: [
            {
              name: "Email Marketing",
              description: "Send targeted campaigns",
              url: "/products/engagement/email-marketing",
            },
            {
              name: "Social Media",
              description: "Manage all platforms",
              url: "/products/engagement/social-media",
            },
            {
              name: "Live Chat",
              description: "Talk to customers in real-time",
              url: "/products/engagement/live-chat",
            },
            {
              name: "Push Notifications",
              description: "Reach users instantly",
              url: "/products/engagement/push-notifications",
            },
          ],
        },
        {
          name: "Security",
          description: "Keep your data safe",
          url: "/products/security",
        },
        {
          name: "Integrations",
          description: "Connect with other tools",
          url: "/products/integrations",
        },
      ],
    },
    {
      title: "Solutions",
      url: "/solutions",
      items: [
        {
          name: "Enterprise",
          description: "For large organizations",
          url: "/solutions/enterprise",
        },
        {
          name: "Small Business",
          description: "For growing teams",
          url: "/solutions/small-business",
        },
        { name: "Startup", description: "For new ventures", url: "/solutions/startup" },
      ],
    },
    {
      title: "Resources",
      url: "/resources",
      items: [
        {
          name: "Documentation",
          description: "Learn how to use our platform",
          url: "/resources/documentation",
        },
        {
          name: "API Reference",
          description: "Complete API documentation",
          url: "/resources/api-reference",
        },
        {
          name: "Guides",
          description: "Step-by-step tutorials",
          url: "/resources/guides",
        },
        {
          name: "Blog",
          description: "Latest news and updates",
          url: "/resources/blog",
        },
      ],
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Logo
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
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition"
                >
                  {menu.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>

                {/* MAIN DROPDOWN */}
                {openMenu === idx && (
                  <div
                    className="absolute left-0 top-full w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-fadeSlide"
                    onMouseEnter={() => setOpenMenu(idx)}
                  >
                    {menu.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="relative"
                        onMouseEnter={() => item.subItems && setOpenSubMenu(itemIdx)}
                        onMouseLeave={() => setOpenSubMenu(null)}
                      >
                        <Link
                          href={item.url}
                          className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 transition"
                        >
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {item.name}
                            </div>
                            <div className="text-gray-500 text-xs mt-1">
                              {item.description}
                            </div>
                          </div>

                          {item.subItems && (
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          )}
                        </Link>

                        {/* SUB MENU */}
                        {openSubMenu === itemIdx && item.subItems && (
                          <div className="absolute left-full top-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 ml-1 animate-fadeSlide">
                            {item.subItems.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.url}
                                className="block px-4 py-3 hover:bg-gray-50"
                              >
                                <div className="font-medium text-gray-800 text-sm">
                                  {sub.name}
                                </div>
                                <div className="text-gray-500 text-xs mt-1">
                                  {sub.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/pricing" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
              Pricing
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
              About
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/signin" className="px-4 py-2 text-sm text-gray-700 rounded-md hover:text-gray-900">
              Sign In
            </Link>
            <Link href="/get-started" className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200">
          {menuItems.map((menu, idx) => (
            <div key={idx} className="border-b">
              <button
                onClick={() =>
                  setMobileSubMenu(mobileSubMenu === idx ? null : idx)
                }
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-gray-700"
              >
                {menu.title}
                <ChevronDown
                  className={`h-5 w-5 transition ${mobileSubMenu === idx ? "rotate-180" : ""}`}
                />
              </button>

              {/* MOBILE DROPDOWN */}
              {mobileSubMenu === idx && (
                <div className="bg-gray-50">
                  {menu.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b">
                      <Link href={item.url} className="block px-6 py-3 text-gray-700">
                        {item.name}
                      </Link>

                      {/* MOBILE SUB SUB MENU */}
                      {item.subItems &&
                        item.subItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.url}
                            className="block px-10 py-2 text-gray-500"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
