"use client";
import Link from "next/link";
import GetScrollY from "@/hooks/getScrollY";
import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import DropMenu from "@/components/navbar/dropMenu";
import "./navbar.css"
const NavigationBar = () => {
    const pathname = usePathname();
    const navRef = useRef<(null|HTMLDivElement)[]>([]);
    const scrollY = GetScrollY();
    const nav_bg = scrollY > 60 ? "nav_blur" : "nav_first";

    return (
        <header className={`z-50 fixed top-0 left-0 right-0 h-[60px] ${nav_bg}`}>
            <nav className="flex justify-between w-full max-w-[1280px] m-auto h-[60px] items-center text-white">
                <Link href="/" className={`mobile:w-[270px] w-[180px] ml-4`}>
                    <img src="/images/logo.png" />
                </Link>
                <div className="h-full justify-between">
                    <div></div>
                    <ul className="nav_items h-full">
                        <li
                            className="w-[160px] h-full"
                            ref={(el) => navRef.current[0] = el}
                        >
                            <Link
                                href="/about"
                                className="h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard"
                            >
                                About us
                            </Link>
                        </li>
                        <li
                            className="w-[160px] h-full"
                            ref={(el) => (navRef.current[1] = el)}
                        >
                            <Link
                                href="/notice"
                                className="h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard"
                            >
                                Notice
                            </Link>
                        </li>
                        <li
                            className="w-[160px] h-full"
                            ref={(el) => (navRef.current[2] = el)}
                        >
                            <Link
                                href="/active"
                                className="h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard"
                            >
                                Activity
                            </Link>
                        </li>
                        <li
                            className="wiki w-[160px] h-full"
                            ref={(el) => (navRef.current[3] = el)}
                        >
                            <Link
                                href="/wiki"
                                className="h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard"
                            >
                                Wiki
                            </Link>
                        </li>
                        <li
                            className="login w-[160px] h-full"
                            ref={(el) => (navRef.current[4] = el)}
                        >
                            <Link
                                href="/login"
                                className="h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                    <DropMenu nav_bg={nav_bg} navRef={navRef} />
                    <div className="mobile_nav text-3xl mr-10 mt-3.5">
                        <GiHamburgerMenu />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavigationBar;