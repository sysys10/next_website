export type LeftCalendarProps = {
    date: Date;
    setDate: (date: Date) => void;
    onPrevClick: () => void;
    onNextClick: () => void;
    onDateClick: (day: number) => void;
    convertMtoStr: (month: number) => string;
    events: {
        [year: number]: {
            [month: number]: {
                [day: number]: {
                    title: string;
                    startDate: number;
                    endDate: number;
                }[];
            };
        };
    };
    closeModal: () => void;
    modalIsOpen: boolean;
    yy: number;
    mm: number;
    dd: number;
    dayEvents: {
        title: string;
        startDate: number;
        endDate: number;
    }[];
};