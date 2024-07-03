'use client'
import Link from "next/link"
import Image from "next/image"
import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion'
import { Login, Logout } from "@mui/icons-material";
const Sidemenu = ({ menu, setMenu, pathname }) => {
    const [isopen, setIsopen] = useState([false, false, false, false, false]);
    return (
        <div>
            <div className={`absolute h-screen left-0 top-0 right-60 bg-white ${menu ? "block" : "hidden"}`} onClick={() => { setMenu(!menu); setIsopen([false]) }}></div>
            <div className={`absolute ${menu ? "max-w-60" : "max-w-0"} flex flex-col justify-between h-screen w-full right-0 top-0 transition-all duration-150`}>
                <div className="w-60 h-full bg-black flex flex-col p-4 pt-10">
                    <Link href="/" className="w-52 m-auto">
                        <Image src="/images/logo.png" width={270} height={60} alt="Logo" />로고좀 예쁘게..
                    </Link>
                    <div className="flex flex-col h-full pt-8 px-1">
                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => { setIsopen([!isopen[0], false, false, false]) }}
                                className={`text-xl p-1 font-pretendard ${pathname === '/about' && "active"} ${isopen[0] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            > About us
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[0] ? "max-h-36" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[0] ? <ul className="h-full w-full py-3"><motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-lg h-10 flex items-center"><Link href={'/about'}>소개</Link></motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-lg h-10 flex items-center">조직도</motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="text-lg h-10 flex items-center">Contact</motion.li></ul> : <></>}
                        </div>

                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => { setIsopen([false, !isopen[1], false, false]) }}
                                className={`text-xl p-1 font-pretendard ${pathname === '/about' && "active"} ${isopen[1] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            > Notice
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[1] ? "max-h-36" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[1] ? <ul className="h-full w-full py-3"><motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-lg h-10 flex items-center"><Link href={'/notice'}>공지사항</Link></motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-lg h-10 flex items-center">투표</motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="text-lg h-10 flex items-center">결산안</motion.li></ul> : <></>}
                        </div>
                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => { setIsopen([false, false, !isopen[2], false]) }}
                                className={`text-xl p-1 font-pretendard ${pathname === '/about' && "active"} ${isopen[2] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            > Activity
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[2] ? "max-h-[6.5rem]" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[2] ? <ul className="h-full w-full py-3"><motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-lg h-10 flex items-center"><Link href={'/gallery'}>갤러리</Link></motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-lg h-10 flex items-center">캘린더</motion.li></ul> : <></>}
                        </div>
                        <div className="mt-4 h-fit">
                            <div
                                onClick={() => { setIsopen([false, false, false, !isopen[3]]) }}
                                className={`text-xl p-1 font-pretendard ${pathname === '/about' && "active"} ${isopen[3] ? "border-b-blue-300 border-b-2" : "border-none"}`}
                            > Wiki
                            </div>
                        </div>
                        <div className={`px-3 h-full w-full ${isopen[3] ? "max-h-[11.5rem]" : "max-h-0"} bg-[rgb(17,17,17)] overflow-hidden transition-all duration-150`}>
                            {isopen[3] ? <ul className="h-full w-full py-3"><motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-lg h-10 flex items-center"><Link href={'/about'}>리얼 강의평</Link></motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-lg h-10 flex items-center">꿀교양</motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="text-lg h-10 flex items-center">맛집</motion.li>
                                <motion.li initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="text-lg h-10 flex items-center">새내기 TIPS</motion.li></ul> : <></>}
                        </div>
                    </div>
                    <div>
                        <Link href={"/login"}><Login className="text-white"></Login></Link>
                        {/* <Login className="text-white"></Login> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidemenu;