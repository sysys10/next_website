'use client'
import React, { useState } from "react";
import LeftCalendar from "./LeftCalender";
import { motion } from "framer-motion";
import convertMtoStr from "@/utils/monthtostr"
const Calendar = () => {
  type Event = {
    title: string;
    startDate: number;
    endDate: number;
  };
  
  type MonthlyEvents = {
    [day: number]: Event[];
  };
  
  type YearlyEvents = {
    [month: number]: MonthlyEvents;
  };
  
  type Events = {
    [year: number]: YearlyEvents;
  };
  
  const events: Events = {
    2022: {},
    2023: {},
    2024: {
      0: {
        1: [{ title: "1월 1일이라는 뜻", startDate: 1, endDate: 1 }],
      },
      6: {
        1: [
          { title: "수강신청", startDate: 1, endDate: 10 },
          { title: "이벤트 1", startDate: 1, endDate: 1 },
        ],
        2: [
          { title: "수강신청", startDate: 1, endDate: 10 },
          { title: "이벤트 1", startDate: 1, endDate: 2 },
        ],
        3: [{ title: "수강신청", startDate: 1, endDate: 10 }],
        5: [{ title: "웹사이트 회의", startDate: 5, endDate: 5 }],
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
  const yy:number = date.getFullYear();
  const mm:number = date.getMonth();
  const dd:number = date.getDate();
  const dayEvents = (events[yy] && events[yy][mm]?.[dd]) || [];
  const onPrevClick = () => {
    const yy:number = date.getFullYear();
    const mm:number = date.getMonth();
    setDate(new Date(yy, mm - 1, 1));
  };

  const onNextClick = () => {
    const yy:number = date.getFullYear();
    const mm:number = date.getMonth();
    setDate(new Date(yy, mm + 1, 1));
  };

  const onDateClick = (nd:number) => {
    const yy:number = date.getFullYear();
    const mm:number = date.getMonth();
    setDate(new Date(yy, mm, nd));
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <motion.div className="m-auto max-w-[1200px]">
      <div className="flex flex-col text-white px-6 font-pretendard mt-10">
        <div className="my-4">
          <h2 className="text-4xl text-right">Calendar</h2>
          <p className="text-xl text-right">월별 정시템</p>
        </div>
        <LeftCalendar
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
    </motion.div>
  );
};

export default Calendar;
