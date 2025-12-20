import React from 'react'
import { BarChart3, LayoutDashboard } from 'lucide-react'

const features = [
    {
        title: "Realtime Analytics",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <BarChart3 className="text-[#3b82f6]" size={24} />
    },
    {
        title: "Realtime Analytics",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <BarChart3 className="text-[#3b82f6]" size={24} />
    },
    {
        title: "Realtime Analytics",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <BarChart3 className="text-[#3b82f6]" size={24} />
    },
    {
        title: "Realtime Analytics",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <BarChart3 className="text-[#3b82f6]" size={24} />
    },
    {
        title: "Realtime Analytics",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <BarChart3 className="text-[#3b82f6]" size={24} />
    },
    {
        title: "Realtime Analytics",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <BarChart3 className="text-[#3b82f6]" size={24} />
    }
]

export default function Features() {
    return (
        <section className="bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)] text-white py-20 px-4 md:px-8 lg:px-12 w-full relative overflow-hidden">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    A Powerful, Unified Platform for Every Role
                </h2>
                <p className="text-gray-400 text-lg">
                    Tailored tools and dashboard to empower everyone in your school community
                </p>
            </div>

            {/* Main Container 1 */}
            <div className="max-w-7xl mx-auto relative z-10 mb-14">

                <div className="bg-[linear-gradient(106.76deg,rgba(31,185,232,0.1)_11.57%,rgba(222,70,70,0.1)_88.65%)] rounded-[20px] relative overflow-hidden min-h-[600px] p-8 md:p-16 border-[1.5px] border-[#FFFFFF80] ">

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    {/* Top Icon section */}
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="mb-4">
                            <LayoutDashboard size={48} className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-white">Features for Principals</h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#FFFFFF1A] rounded-2xl p-6 hover:bg-[#FFFFFF15] transition-colors border border-white/5 group">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="mt-1">
                                        {/* Custom Icon styling with search glass overlay simulation if needed, but standard lucide for now */}
                                        <div className="relative">
                                            {feature.icon}
                                            {/* <div className="absolute -bottom-1 -right-1 bg-[#0A0C10] rounded-full p-[2px]">
                                                    <div className="w-2 h-2 border border-red-500 rounded-full"></div>
                                                </div> */}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white text-lg mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,#1FB9E8_32.69%,#DE4646_54.33%)] transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* Main Container 2 */}
            <div className="max-w-7xl mx-auto relative z-10 mb-14">

                <div className="bg-[linear-gradient(106.76deg,rgba(31,185,232,0.1)_11.57%,rgba(222,70,70,0.1)_88.65%)] rounded-[20px] relative overflow-hidden min-h-[600px] p-8 md:p-16 border-[1.5px] border-[#FFFFFF80] ">

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    {/* Top Icon section */}
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="mb-4">
                            <LayoutDashboard size={48} className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-white">Features for Principals</h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#FFFFFF1A] rounded-2xl p-6 hover:bg-[#FFFFFF15] transition-colors border border-white/5 group">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="mt-1">
                                        {/* Custom Icon styling with search glass overlay simulation if needed, but standard lucide for now */}
                                        <div className="relative">
                                            {feature.icon}
                                            {/* <div className="absolute -bottom-1 -right-1 bg-[#0A0C10] rounded-full p-[2px]">
                                                    <div className="w-2 h-2 border border-red-500 rounded-full"></div>
                                                </div> */}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white text-lg mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,#1FB9E8_32.69%,#DE4646_54.33%)] transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* Main Container 3 */}
            <div className="max-w-7xl mx-auto relative z-10 mb-14">

                <div className="bg-[linear-gradient(106.76deg,rgba(31,185,232,0.1)_11.57%,rgba(222,70,70,0.1)_88.65%)] rounded-[20px] relative overflow-hidden min-h-[600px] p-8 md:p-16 border-[1.5px] border-[#FFFFFF80] ">

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    {/* Top Icon section */}
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="mb-4">
                            <LayoutDashboard size={48} className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-white">Features for Principals</h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#FFFFFF1A] rounded-2xl p-6 hover:bg-[#FFFFFF15] transition-colors border border-white/5 group">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="mt-1">
                                        {/* Custom Icon styling with search glass overlay simulation if needed, but standard lucide for now */}
                                        <div className="relative">
                                            {feature.icon}
                                            {/* <div className="absolute -bottom-1 -right-1 bg-[#0A0C10] rounded-full p-[2px]">
                                                    <div className="w-2 h-2 border border-red-500 rounded-full"></div>
                                                </div> */}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white text-lg mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,#1FB9E8_32.69%,#DE4646_54.33%)] transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* Main Container 4 */}
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="bg-[linear-gradient(106.76deg,rgba(31,185,232,0.1)_11.57%,rgba(222,70,70,0.1)_88.65%)] rounded-[20px] relative overflow-hidden min-h-[600px] p-8 md:p-16 border-[1.5px] border-[#FFFFFF80] ">

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    {/* Top Icon section */}
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="mb-4">
                            <LayoutDashboard size={48} className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-white">Features for Principals</h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#FFFFFF1A] rounded-2xl p-6 hover:bg-[#FFFFFF15] transition-colors border border-white/5 group">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="mt-1">
                                        {/* Custom Icon styling with search glass overlay simulation if needed, but standard lucide for now */}
                                        <div className="relative">
                                            {feature.icon}
                                            {/* <div className="absolute -bottom-1 -right-1 bg-[#0A0C10] rounded-full p-[2px]">
                                                    <div className="w-2 h-2 border border-red-500 rounded-full"></div>
                                                </div> */}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white text-lg mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,#1FB9E8_32.69%,#DE4646_54.33%)] transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
