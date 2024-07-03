'use client'

import "./LeftCalendar.css";
import { LeftCalendarProps } from "@/types/LeftCalenderProps";
import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Modal from "react-modal";
import PopupCalendar from "./PopupCalender";
import BasicSelect from "../ui/select";
const LeftCalendar = ({
  date,
  setDate,
  onPrevClick,
  onNextClick,
  onDateClick,
  convertMtoStr,
  events,
  closeModal,
  modalIsOpen,
  yy,
  mm,
  dd,
  dayEvents,
}: LeftCalendarProps) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const lastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const generateDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={i + lastMonth}
          className="w-[14.2857142857%] flex justify-center cursor-pointer mobile:h-32 h-20 pt-5"
        >
          <div className="h-full flex flex-col text-gray-400">
            {lastMonth - firstDay + 1 + i}
          </div>
        </div>
      );
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dayEvents = events[yy]?.[mm]?.[d] || [];
      const zIndex = daysInMonth - d;
      days.push(
        <div
          key={firstDay + d}
          onClick={() => {
            onDateClick(d);
          }}
          className={`cursor-pointer ${zIndex} mobile:h-32 h-20 pt-5 w-[14.2857142857%]`}
          style={{ zIndex }}
        >
          <div className="h-full w-full flex flex-col items-center">
            {d}
            <div className="w-full h-full text-xs mobile:text-sm text-black font-pretendard mt-1 relative">
              {dayEvents.map((event, index) => (
                <div
                  key={index}
                  className={`w-full h-5 bg-white mt-1 px-4 ${event.endDate === event.startDate ? "rounded-lg truncate w-[calc(100%-1.2px)]" : event.endDate === d ? "rounded-r-lg w-[calc(100%-0.125rem)]" : event.startDate === d ? "rounded-l-lg text-nowrap" : ""}`}
                  style={{ position: 'relative', zIndex }}
                >
                  {event.startDate === d && event.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return days;
  };

  const renderWeeks = () => {
    const days = generateDays();
    const weeks: any = [];
    let week: JSX.Element[] = [];
    days.forEach((day, index) => {
      week.push(day);
      if (week.length === 7 || index === days.length - 1) {
        weeks.push(<div className="w-full flex" key={`week-${index}`}>{week}</div>);
        week = [];
      }
    });
    return weeks;
  };

  return (
    <div className="w-full relative mt-4 max-w-[1000px] m-auto">
      <div className="flex justify-between text-white font-pretendard items-end">
        <span className="text-5xl">{convertMtoStr(mm)}</span>
        <span className="text-3xl font-normal text-right">
          <div className="flex justify-between text-2xl -mb-1 text-gray-400">
            <button onClick={onPrevClick}>
              <GrPrevious />
            </button>
            <button onClick={onNextClick}>
              <GrNext />
            </button>
          </div>
          {yy}
        </span>
      </div>
      <div className="mt-2 text-white w-full relative z-10">
        <div className="border-y border-y-white leading-10">
          <div className="w-full flex text-center">
            <span className="flex-1">S</span>
            <span className="flex-1">M</span>
            <span className="flex-1">T</span>
            <span className="flex-1">W</span>
            <span className="flex-1">T</span>
            <span className="flex-1">F</span>
            <span className="flex-1">S</span>
          </div>
        </div>
        <div className="w-full">{renderWeeks()}</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="custom-overlay"
        className="custom-modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            height: 300,
            backgroundColor: "lightGray",
            zIndex: 20,
          },
        }}
      >
        <PopupCalendar yy={yy} dd={dd} mm={mm} dayEvents={dayEvents} />
      </Modal>
    </div>
  );
};

export default LeftCalendar;
