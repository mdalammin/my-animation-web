import Image from 'next/image'
import React from 'react'
import certificate from "@/assets/certification.png"

export default function CertificateImage() {
    return (
        <section className='bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)] text-white py-16 px-4 md:px-12 lg:px-24 w-full relative overflow-hidden'>
            <div className="max-w-7xl mx-auto flex flex-col  justify-center ">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Registered by MSME & GST</h2>
                    <p className="text-gray-400 text-lg">GST Number: 03gioahyro</p>
                </div>
                <div className='w-full max-w-4xl mx-auto flex justify-center'>
                    <Image
                        src={certificate}
                        alt='certificate'
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
