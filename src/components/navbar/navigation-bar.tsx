"use client";
import Link from "next/link";
import Image from "next/image";
import GetScrollY from "@/hooks/getScrollY";
import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import DropMenu from "@/components/navbar/dropMenu";
import Sidemenu from "./sidemenu";
import "./navbar.css"
const NavigationBar = () => {
    const pathname = usePathname();
    const navRef = useRef<(null | HTMLDivElement)[]>([]);
    const scrollY = GetScrollY();
    const nav_bg = scrollY > 60 ? "nav_blur" : "nav_first";
    const [menu, setMenu] = useState(false);

    return (
        <header className={`z-50 fixed top-0 left-0 right-0 h-[60px] ${nav_bg}`}>
            <nav className="flex justify-between w-full max-w-[1280px] m-auto h-[60px] items-center text-white">
                <Link href="/" className={`mobile:w-[270px] w-[180px] ml-4`}>
                    <Image src="/images/logo.png" width={270} height={60} alt="Logo" />
                </Link>
                <div className="h-full justify-between">
                    <div></div>
                    <ul className="nav_items h-full">
                        <li
                            className="w-[160px] h-full"
                            ref={(el) => navRef.current[0] = el}
                        >
                            <p className={`h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard ${pathname === '/about' && " active"}`}>
                                About us
                            </p>
                        </li>
                        <li
                            className="w-[160px] h-full"
                            ref={(el) => (navRef.current[1] = el)}
                        >
                            <p className={`h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard ${pathname === '/about' && " active"}`}>
                                Notice
                            </p>
                        </li>
                        <li
                            className="w-[160px] h-full"
                            ref={(el) => (navRef.current[2] = el)}
                        >
                            <p className={`h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard ${pathname === '/about' && " active"}`}>
                                Activity
                            </p>
                        </li>
                        <li
                            className="wiki w-[160px] h-full"
                            ref={(el) => (navRef.current[3] = el)}
                        >
                             <p className={`h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard ${pathname === '/about' && " active"}`}>
                                Wiki
                            </p>
                        </li>
                        <li
                            className="login w-[160px] h-full"
                            ref={(el) => (navRef.current[4] = el)}
                        >
                             <p className={`h-full flex items-center justify-center hover:drop-shadow-white-lg font-pretendard ${pathname === '/about' && " active"}`}>
                                Login
                            </p>
                        </li>
                    </ul>
                    <DropMenu nav_bg={nav_bg} navRef={navRef} />
                    <div className="mobile_nav text-3xl mr-10 mt-3.5">
                        <GiHamburgerMenu onClick={() => { setMenu(!menu) }} />
                    </div>
                    <Sidemenu menu={menu} setMenu={setMenu} pathname={pathname} />
                </div>
            </nav>
        </header >
    )
}

export default NavigationBar;