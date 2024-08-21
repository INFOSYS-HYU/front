import React from 'react';
import { motion } from 'framer-motion';
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
    const Day = cur.getDay();

    const isCurrentMonth = 1 <= d && d <= daysInMonth;
    const dayEvents = isCurrentMonth ? events?.filter(v =>
        cur >= new Date(v.startDate.setHours(0, 0, 0, 0)) && cur <= new Date(v.endDate.setHours(23, 59, 59, 999))
    ).sort((a, b) => {
        if (Day === 0) {
            const aRemainingDays = (new Date(a.endDate).getTime() - cur.getTime()) / (1000 * 3600 * 24);
            const bRemainingDays = (new Date(b.endDate).getTime() - cur.getTime()) / (1000 * 3600 * 24);
            return bRemainingDays - aRemainingDays;
        }
        return a.startDate.getTime() - b.startDate.getTime();
    }) || [] : [];

    const renderDate = isCurrentMonth ? d : d < 1 ? lastMonth + d : d - daysInMonth;
    const dateClass = isCurrentMonth ? "font-medium" : "text-gray-400";

    const getEventStyle = (event: Event) => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        const isStart = startDate.getDate() === d && startDate.getMonth() === mm && startDate.getFullYear() === yy;
        const isEnd = endDate.getDate() === d && endDate.getMonth() === mm && endDate.getFullYear() === yy;

        return {
            backgroundColor: barColor[event.id % barColor.length],
            borderRadius: isStart ? '4px 0 0 4px' : isEnd ? '0 4px 4px 0' : '0',
            marginLeft: isStart ? '0' : '-8px',
            marginRight: isEnd ? '0' : '-8px',
            width: 'calc(100% + 20px)',
        };
    };

    return (
        <div
            className={`bg-white p-2 h-28 cursor-pointer transition-colors hover:bg-gray-50 ${!isCurrentMonth && 'bg-gray-100'} border border-gray-200 overflow-hidden`}
            onClick={() => isCurrentMonth && onSelectDate(new Date(yy, mm, d))}
        >
            <div className={`text-sm ${dateClass} mb-2`}>{renderDate}</div>
            {isCurrentMonth && (
                <div className="flex flex-col">
                    {dayEvents.slice(0, 3).map((event, index) => {
                        const startDate = new Date(event.startDate);
                        const isStart = startDate.getDate() === d && startDate.getMonth() === mm && startDate.getFullYear() === yy;
                        return (
                            <motion.div
                                key={`events-${event.id}-${index}`}
                                className="text-xs h-5 flex items-center px-1 overflow-hidden"
                                style={getEventStyle(event)}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {(isStart || Day === 0) && (
                                    <span className="truncate">{event.title}</span>
                                )}
                            </motion.div>
                        );
                    })}
                    {dayEvents.length > 3 && (
                        <div className="text-xs text-gray-500 mt-1">+{dayEvents.length - 3} more</div>
                    )}
                </div>
            )}
        </div>
    );
});