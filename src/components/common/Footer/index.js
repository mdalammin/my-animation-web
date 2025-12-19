import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, X } from "lucide-react";
import Image from "next/image";

// Social Media Icons with specific brand colors/styles
const SocialIcon = ({ href, icon, className }) => (
    <Link
        href={href}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${className}`}
    >
        {icon}
    </Link>
);

const FooterColumn = ({ title, links }) => (
    <div className="flex flex-col gap-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <ul className="flex flex-col gap-2">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="w-full bg-[#0B0D13] pt-16 flex flex-col items-center">
            {/* Main Content */}
            <div className="w-full max-w-7xl px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                {/* Left Section: Brand Card & Socials */}
                <div className="lg:col-span-5 flex flex-col gap-8">

                    {/* Brand Card */}
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] w-fit">
                        <div className="bg-[#1A1D26] rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[300px] ">
                            {/* Logo Shield Placeholder */}
                            <div className="w-12 h-12 relative flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Next.js Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-white text-lg font-medium">Schooldeeds</span>
                                <span className="text-gray-500 text-xs tracking-wider">GSTINBERDF1230P</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] flex items-center justify-center hover:opacity-90 transition-opacity">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        {/* Youtube */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-90 transition-opacity">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#14171A] flex items-center justify-center hover:opacity-90 transition-opacity border border-gray-700">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center hover:opacity-90 transition-opacity">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Right Section: Links */}
                <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
                    <FooterColumn
                        title="Product"
                        links={[
                            { label: "Features", href: "/features" },
                            { label: "Pricing", href: "/pricing" },
                            { label: "Demo", href: "/demo" },
                        ]}
                    />
                    <FooterColumn
                        title="Company"
                        links={[
                            { label: "About Us", href: "/about" },
                            { label: "Blog", href: "/blog" },
                            { label: "Join Us", href: "/join" },
                        ]}
                    />
                    <FooterColumn
                        title="Support"
                        links={[
                            { label: "Contact Us", href: "/contact" },
                            { label: "Terms Conditions", href: "/terms" },
                            { label: "Privacy Policy", href: "/privacy" },
                        ]}
                    />
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="w-full h-16 bg-[linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] flex items-center justify-center">
                <p className="text-gray-300 text-sm">
                    © 2021 www.schooldeeds.com - All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
