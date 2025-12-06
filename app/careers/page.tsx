'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Code2CashNavbar } from '@/components/ui/code2cash-navbar';
import { Footer } from '@/components/ui/footer-section';
import GalleryHoverCarousel from '@/components/ui/gallery-hover-carousel';
import InternshipPerks from '@/components/ui/internship-perks';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-[#31a39c] selection:text-white flex flex-col">
            <Code2CashNavbar />

            <div className="flex-grow flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#31a39c]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#31a39c]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 w-full">
                    {/* Header */}


                    {/* Internship Carousel */}
                    <GalleryHoverCarousel />

                    {/* Perks Section */}
                    <InternshipPerks />

                    <div className="pb-20 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-[#31a39c] transition-colors duration-300 group px-6 py-3 rounded-full border border-white/10 hover:border-[#31a39c]/50 bg-white/5"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
