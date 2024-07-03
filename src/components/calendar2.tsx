'use client'
import React, { useState } from "react";
import WhiteCalendar from "@/components/whiteCalendar";
import { motion } from "framer-motion";
import convertMtoStr from "@/utils/monthtostr"
import { Events } from "@/types/calendarProps";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const Calendar2 = () => {

    const events: Events = {
        2022: {},
        2023: {},
        2024: {
            0: {
                1: [{ title: "1월 1일이라는 뜻", startDate: 1, endDate: 1 }],
            },
            6: {
                1: [
                    { title: "수강신청", startDate: 1, endDate: 3 },
                    { title: "이벤트 1", startDate: 1, endDate: 2 },
                ],
                2: [
                    { title: "수강신청", startDate: 1, endDate: 3 },
                    { title: "이벤트 1", startDate: 1, endDate: 2 },
                ],
                3: [{ title: "수강신청", startDate: 1, endDate: 3 }, { title: "밥", startDate: 3, endDate: 5}],
                5: [{ title: "웹사이트 회의", startDate: 5, endDate: 5 }],
                7: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 7, endDate: 7 }],
                8: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 8, endDate: 10 }],
                9: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 8, endDate: 10 }],
                13: [{ title: "밥먹기", startDate: 13, endDate: 14 }],
                20: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23 }],
                21: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23 }],
                22: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23 }],
                23: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23 }],

                10: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 8, endDate: 10 }],
                31: [{ title: '밥먹기', startDate: 31, endDate: 31 }]
            },
            7: {
                1: [{ title: "밥먹기", startDate: 1, endDate: 1 }],
            },

        },
        2025: {},
        2026: {},
        2027: {},
    };

    const [date, setDate] = useState(new Date());
    const [modalIsOpen, setIsOpen] = useState(false);
    const yy: number = date.getFullYear();
    const mm: number = date.getMonth();
    const dd: number = date.getDate();
    const dayEvents = (events[yy] && events[yy][mm]?.[dd]) || [];
    const onPrevClick = () => {
        const yy: number = date.getFullYear();
        const mm: number = date.getMonth();
        setDate(new Date(yy, mm - 1, 1));
    };

    const onNextClick = () => {
        const yy: number = date.getFullYear();
        const mm: number = date.getMonth();
        setDate(new Date(yy, mm + 1, 1));
    };
    const onDateClick = (nd: number) => {
        const yy: number = date.getFullYear();
        const mm: number = date.getMonth();
        setDate(new Date(yy, mm, nd));
        setIsOpen(true);
    };
    function closeModal() {
        setIsOpen(false);
    }

    return (<div className="w-full bg-white h-screen pt-10">
        <div className="m-auto flex flex-col max-w-[1264px] w-full text-black px-8 font-pretendard mt-10">
            {/* <div className="my-4">
                <h2 className="text-5xl text-right">Calendar</h2>
            </div> */}
            <div className="flex justify-between">
                <div className="text-6xl font-semibold">{convertMtoStr(mm)}</div>
                <div className="flex flex-col text-4xl">
                    {yy}
                    <div className="flex ml-2"><MdArrowBack onClick={onPrevClick} /> <MdArrowForward onClick={onNextClick} /></div>
                </div>
            </div>
            <WhiteCalendar
                date={date}
                setDate={setDate}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                onDateClick={onDateClick}
                convertMtoStr={convertMtoStr}
                events={events}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                yy={yy}
                mm={mm}
                dd={dd}
                dayEvents={dayEvents}
            />
        </div>
    </div>)
}
export default Calendar2;