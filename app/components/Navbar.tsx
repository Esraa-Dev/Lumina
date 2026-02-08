"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, Zap, LogOut, LogOutIcon } from "lucide-react";

export const Navbar = () => {
    const [user, setUser] = useState(true);

    return (
        <nav className="flex items-center justify-between py-4 container h-20 border-b bg-dark border-white/5 sticky top-0 z-50">

            <Link href="/" className="flex items-center gap-3 group">
                <div className="bg-brand p-2 rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <Brain size={24} className="text-black" />
                </div>
                <span className="text-2xl font-black text-white tracking-tighter uppercase">
                    LUMINA<span className="text-brand"> .</span>
                </span>
            </Link>

            <div className="flex items-center gap-8">
                {user ? (
                    <div className="flex items-center gap-6">

                        <div className="flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full border border-brand/20 transition-all hover:bg-brand/25 cursor-default">
                            <Zap size={14} className="fill-brand text-brand" />
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand">
                                50 Credits
                            </span>
                        </div>

                        <div className="relative group">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full border border-white/10 p-0.5 cursor-pointer hover:border-brand transition-all">
                                    <img
                                        src="/assets/profile.jpg"
                                        className="w-full h-full rounded-full"
                                        alt="avatar"
                                    />
                                </div>
                                <p className="text-lg tracking-wide">Hi, Esraa</p>
                            </div>

                            <div className="absolute right-0 top-full pt-4 hidden group-hover:block w-48 z-50">
                                <ul className="bg-dark/95 backdrop-blur-sm border border-white/15 rounded-xl shadow-2xl overflow-hidden p-2 animate-scaleIn">
                                    <li
                                        onClick={() => {
                                            setUser(false)
                                        }}
                                        className="flex items-center gap-3 py-2.5 px-3 hover:bg-red-500/15 cursor-pointer text-sm text-red-500 rounded-lg transition-all duration-200 active:scale-95 group/logout"
                                    >
                                        <LogOutIcon size={15} />
                                        <span className="font-medium text-sm">Logout</span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                ) : (
                    <div className="flex gap-1 items-center">
                        <Link href="/buy">
                            <button className="text-white cursor-pointer text-base tracking-wide px-5 py-2 rounded-lg hover:bg-brand hover:text-black transition-all">
                                Pricing
                            </button>
                        </Link>
                        <Link href="/login">
                            <button className="text-white cursor-pointer text-base tracking-wide bg-white/5 px-5 py-2 rounded-lg hover:bg-brand hover:text-black transition-all">
                                Login
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};