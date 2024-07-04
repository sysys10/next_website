'use client';
import Link from "next/link";
import Image from "next/image";
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Login, Logout } from "@mui/icons-material";
import './navbar.css';

const Sidemenu = ({ menu, setMenu, pathname }) => {
    const [isopen, setIsopen] = useState([false, false, false, false]);

    useEffect(() => {
        if (pathname.startsWith('/about')) {
            setIsopen([true, false, false, false]);
            setMenu(false);
        } else if (pathname.startsWith('/notice')) {
            setIsopen([false, true, false, false]);
            setMenu(false);
        } else if (pathname.startsWith('/activity')) {
            setIsopen([false, false, true, false]);
            setMenu(false);
        } else if (pathname.startsWith('/wiki')) {
            setIsopen([false, false, false, true]);
            setMenu(false);
        } else {
            setIsopen([false, false, false, false]);
            setMenu(false);
        }
    }, [pathname]);

    const handleToggle = (index) => {
        setIsopen(prev => prev.map((isOpen, i) => i === index ? !isOpen : false));
    };

    return (
        <div>
            <div className={`absolute h-screen left-0 top-0 right-60 ${menu ? "block" : "hidden"}`} onClick={() => { setMenu(!menu); setIsopen([false, false, false, false]) }}></div>
            <div className={`absolute ${menu ? "max-w-60" : "max-w-0"} flex flex-col justify-between h-screen w-full right-0 top-0 transition-all duration-150`}>
                <div className="w-60 h-full bg-black flex flex-col p-4 pt-10">
                    <Link href="/" className="w-52 m-auto">
                        <Image src="/images/logo.png" width={270} height={60} alt="Logo" />
                    </Link>
                    <div className="flex flex-col h-full pt-8 px-1">
                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => handleToggle(0)}
                                className={`text-xl p-1 font-pretendard  ${isopen[0] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            >
                                About us
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[0] ? "max-h-36" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[0] && (
                                <ul className="h-full w-full py-3">
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="text-lg h-10 flex items-center">
                                        <Link href='/about'>소개</Link>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-lg h-10 flex items-center">
                                        <Link href='/about/organization'>조직도</Link>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-lg h-10 flex items-center">
                                        <Link href='/about/contact'>Contact</Link>
                                    </motion.li>
                                </ul>
                            )}
                        </div>

                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => handleToggle(1)}
                                className={`text-xl p-1 font-pretendard  ${isopen[1] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            >
                                Notice
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[1] ? "max-h-36" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[1] && (
                                <ul className="h-full w-full py-3">
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="text-lg h-10 flex items-center">
                                        <Link href='/notice'>공지사항</Link>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-lg h-10 flex items-center">투표</motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-lg h-10 flex items-center">결산안</motion.li>
                                </ul>
                            )}
                        </div>

                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => handleToggle(2)}
                                className={`text-xl p-1 font-pretendard  ${isopen[2] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            >
                                Activity
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[2] ? "max-h-[6.5rem]" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[2] && (
                                <ul className="h-full w-full py-3">
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="text-lg h-10 flex items-center">
                                        <Link href='/activity/gallery'>갤러리</Link>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-lg h-10 flex items-center"> <Link href='/activity/calendar'>캘린더</Link></motion.li>
                                </ul>
                            )}
                        </div>

                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => handleToggle(3)}
                                className={`text-xl p-1 font-pretendard${isopen[3] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            >
                                Wiki
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[3] ? "max-h-[11.5rem]" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[3] && (
                                <ul className="h-full w-full py-3">
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="text-lg h-10 flex items-center">
                                        <Link href='/about'>리얼 강의평</Link>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-lg h-10 flex items-center">꿀교양</motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-lg h-10 flex items-center">맛집</motion.li>
                                    <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="text-lg h-10 flex items-center">새내기 TIPS</motion.li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div>
                        <Link href="/login"><Login className="text-white" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidemenu;
