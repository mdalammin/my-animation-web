import React from "react";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";
import GurditSingh from "@/assets/GurditSingh.png";
import pritpalsingh from "@/assets/pritpalsingh.jpg";
import rahulsingla from "@/assets/rahulsingla.jpg";
import arshleen from "@/assets/arshleen2.jpg";
import Link from "next/link";

const teamMembers = [
    {
        name: "Er. Gurdit Singh",
        role: "CEO",
        img: GurditSingh,
        link: "https://www.facebook.com/er.gurdit"
    },
    {
        name: "Pritpal Singh",
        role: "Senior Developer",
        img: pritpalsingh,
        link: "https://www.facebook.com/pritpalsingh.in"
    },
    {
        name: "Rahul Singla",
        role: "Content Writer",
        img: rahulsingla,
        link: "https://www.facebook.com/rahul.singla.71697"
    },
    {
        name: "Arshleen Kaur",
        role: "QA tester",
        img: arshleen,
        link: "https://www.facebook.com/arsh.kaur.98871174"
    },
    // { name: "Er. Gurdit Singh", role: "CEO" },
    // { name: "Er. Gurdit Singh", role: "CEO" },
    // { name: "Er. Gurdit Singh", role: "CEO" },
    // { name: "Er. Gurdit Singh", role: "CEO" },
];

export default function AllTeamMembers() {
    return (
        <section className="bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)] text-white py-20 px-4 md:px-8 lg:px-12 w-full">

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                    Our leadership team brings clarity, innovation, and direction.
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Guiding the vision and culture of SchoolDeeds.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center group relative"
                    >

                        {/* Gradient Border Wrapper (DEFAULT) */}
                        <div
                            className="
                                relative p-[1px] rounded-3xl mb-4
                                bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8]
                                transition-all duration-300
                                transform group-hover:-translate-y-6
                                group-hover:bg-none"
                        >
                            {/* White border on hover */}
                            <div
                                className="
                                rounded-[22px] p-[2px]
                                 transition-all duration-300
                               group-hover:bg-white "
                            >
                                {/* Inner dark background */}
                                <div className="bg-[#05070A] rounded-[20px] overflow-hidden">
                                    <div className="w-[250px] h-[250px] relative rounded-2xl overflow-hidden">
                                        <Image
                                            src={member?.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div
                            className="
                flex gap-4 text-gray-400
                opacity-0 translate-y-4
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0
              "
                        >
                            <Link href={member?.link}><Facebook className="cursor-pointer hover:text-white transition-colors" /></Link>
                            <Link href={'#'}><Linkedin className="cursor-pointer hover:text-white transition-colors" /></Link>
                        </div>

                        {/* Name & Role */}
                        <h3 className="text-xl font-medium text-white mt-4 mb-1">
                            {member.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
