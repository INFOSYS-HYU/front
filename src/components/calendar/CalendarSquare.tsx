import React from 'react';
import { MotionEvent } from '@/components/ui/motionEvent';
import { Event } from '@/types/calendar';
import { barColor } from '@/constants/colors';

interface CalendarSquareProps {
    d: number;
    yy: number;
    mm: number;
    events: Event[] | null;
    onSelectDate: (d: Date) => void;
}

export const CalendarSquare: React.FC<CalendarSquareProps> = React.memo(({ d, yy, mm, events, onSelectDate }) => {
    const cur = new Date(yy, mm, d);
    const daysInMonth = new Date(yy, mm + 1, 0).getDate();
    const lastMonth = new Date(yy, mm, 0).getDate();
    const currentDate = cur.getDate();
    const Day = cur.getDay();

    const isCurrentMonth = 1 <= d && d <= daysInMonth;
    const dayEvents = isCurrentMonth ? events?.filter(v =>
        cur >= new Date(v.startDate.setHours(0, 0, 0, 0)) && cur <= new Date(v.endDate.setHours(23, 59, 59, 999))
    ).sort((a, b) => {
        if (Day === 0) { 
            const aRemainingDays = a.endDate.getTime() - cur.getTime();
            const bRemainingDays = b.endDate.getTime() - cur.getTime();
            return bRemainingDays - aRemainingDays;
        }
        return a.startDate.getTime() - b.startDate.getTime();
    }) || [] : [];


    const renderDate = isCurrentMonth ? d : d < 1 ? lastMonth + d : d - daysInMonth;
    const dateClass = isCurrentMonth ? "" : "text-gray-500";

    return (
        <div
            className={`cursor-pointer flex flex-col items-center h-36 pt-2 w-[14.2857142857%]`}
            onClick={() => isCurrentMonth && onSelectDate(new Date(yy, mm, d))}
        >
            <div className={`border-b-gray-400 border-b w-[98%] text-center ${dateClass}`}>{renderDate}</div>
            {isCurrentMonth && (
                <div className="w-full h-full flex flex-col text-sm font-pretendard relative">
                    {dayEvents.map((event, index) => {
                        const startDate = event.startDate;
                        const endDate = event.endDate;
                        const eventFlag = currentDate + 1 === startDate.getDate() + 1 ? 1 : Day === 0 ? 2 : 3;
                        const eventLength = endDate.getDate() - d + 1;

                        return (
                            <MotionEvent
                                key={`events-${index}`}
                                className="h-5 mt-1 md:text-sm text-xs items-center flex px-1 md:px-3 text-nowrap overflow-visible rounded-md relative truncate"
                                style={{
                                    backgroundColor: eventFlag !== 3 && barColor[event.color],
                                    width: `${eventFlag === 1 ? (Math.min(7 - Day, eventLength)) * 100 : eventFlag === 2 ? (Math.min(7 - Day, eventLength)) * 100 : 100}%`,
                                    zIndex: `${-d}`,
                                }}
                            >
                                {(eventFlag !== 3) && event.title}
                            </MotionEvent>
                        );
                    })}
                </div>
            )}
        </div>
    );
});
