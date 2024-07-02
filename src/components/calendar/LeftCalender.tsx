'use client'

import "./LeftCalendar.css";
import { LeftCalendarProps } from "@/types/LeftCalenderProps";
import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Modal from "react-modal";
import PopupCalendar from "./PopupCalender";

const LeftCalendar= ({
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
}:LeftCalendarProps) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const lastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const generateDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <td
          key={i + lastMonth}
          className="cursor-pointer mobile:h-32 h-20 pt-5"
        >
          <div className="h-full flex flex-col text-gray-400">
            {lastMonth - firstDay + 1 + i}
          </div>
        </td>
      );
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dayEvents = events[yy]?.[mm]?.[d] || [];
      days.push(
        <td
          key={firstDay + d}
          onClick={() => {
            onDateClick(d);
          }}
          className="cursor-pointer mobile:h-32 h-20 pt-5"
        >
          <div className="h-full flex flex-col">
            {d}
            <ul className="text-sm text-gray-400 line-clamp-3">
              {dayEvents.map((event, index) => (
                <li key={index} className="text-xs lg:text-sm line-clamp-2">
                  {event.title}
                </li>
              ))}
            </ul>
          </div>
        </td>
      );
    }
    return days;
  };

  const renderWeeks = () => {
    const days = generateDays();
    const weeks:any = [];
    let week: JSX.Element[] = [];
    days.forEach((day, index) => {
      week.push(day);
      if (week.length === 7 || index === days.length - 1) {
        weeks.push(<tr key={`week-${index}`}>{week}</tr>);
        week = [];
      }
    });
    return weeks;
  };

  return (
    <div className="w-full relative mt-4 max-w-[1000px] m-auto">
      <div className="flex justify-between text-white font-pretendard items-end">
        <span className="text-5xl">{convertMtoStr(date.getMonth())}</span>
        <span className="text-3xl font-normal text-right">
          <div className="flex justify-between text-2xl -mb-1 text-gray-400">
            <button onClick={onPrevClick}>
              <GrPrevious />
            </button>
            <button onClick={onNextClick}>
              <GrNext />
            </button>
          </div>
          {date.getFullYear()}
        </span>
      </div>
      <table className="mt-2 text-white w-full relative z-10">
        <thead className="border-y border-y-white leading-10">
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{renderWeeks()}</tbody>
      </table>
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