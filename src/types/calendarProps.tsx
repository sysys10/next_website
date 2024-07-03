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
  export type Events = {
    [year: number]: YearlyEvents;
  };