'use client'

type PopupProps = {
  yy: number;
  mm: number;
  dd: number;
  dayEvents: {
    title: string;
    startDate: number;
    endDate: number;
  }[];
}

const PopupCalendar = ({ yy, mm, dd, dayEvents }: PopupProps) => {
  const dateM = `${String(mm + 1).padStart(2, "0")}`
  const dateD = `${String(dd).padStart(2, "0")}`
  return (
    <div className="w-full h-full rounded-lg flex flex-col px-8 py-4">
      <h2 className="text-2xl text-right">
        {yy}. {dateM}. {dateD}
      </h2>
      {dayEvents.map((v, i) => {
        return (
          <div
            key={i}
            className="w-full text-xl pt-2 font-semibold flex justify-between"
          >
            <p>{v.startDate} ~ {v.endDate}</p>
            <p>{v.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PopupCalendar;
