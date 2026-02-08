"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="min-h-[calc(100dvh-80px)] flex items-center justify-center px-4 relative">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-size-[90px_90px]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-dark to-dark" />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-2 rounded-full">
                    <Sparkles className="w-4 h-4 text-brand" />
                    <span className="text-sm font-medium text-brand">AI Image Generator</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Create Images
                    <span className="block text-brand mt-2">With AI</span>
                </h1>

                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                    Turn your ideas into stunning images. Type what you imagine, get beautiful results instantly.
                </p>

                <div className="pt-4">
                    <button className="bg-brand text-black font-bold px-10 py-4 rounded-xl text-lg hover:bg-brand/90 transition-colors flex items-center gap-3 mx-auto">
                        <Sparkles className="w-5 h-5" />
                        Start Generating
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};