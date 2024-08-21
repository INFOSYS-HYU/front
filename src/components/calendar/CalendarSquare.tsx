import React, { useMemo } from 'react';
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
    const cur = useMemo(() => new Date(yy, mm, d), [yy, mm, d]);
    const daysInMonth = useMemo(() => new Date(yy, mm + 1, 0).getDate(), [yy, mm]);
    const Day = cur.getDay();

    const isCurrentMonth = 1 <= d && d <= daysInMonth;

    const dayEvents = useMemo(() => {
        if (!isCurrentMonth || !events) return [];
        
        return events.filter(v => {
            const startDate = new Date(v.startDate);
            const endDate = new Date(v.endDate);
            return cur >= new Date(startDate.setHours(0, 0, 0, 0)) && cur <= new Date(endDate.setHours(23, 59, 59, 999));
        }).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    }, [isCurrentMonth, events, cur]);

    const getEventStyle = (event: Event, index: number) => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        const isStart = startDate.getDate() === d && startDate.getMonth() === mm && startDate.getFullYear() === yy;
        const isEnd = endDate.getDate() === d && endDate.getMonth() === mm && endDate.getFullYear() === yy;

        return {
            backgroundColor: barColor[event.id % barColor.length],
            borderRadius: isStart ? '4px 0 0 4px' : isEnd ? '0 4px 4px 0' : '0',
            marginRight: isEnd ? '0' : '0',
            width: 'calc(100% + 16px)',
            height: '18px',
            top: `${index * 20 + 28}px`,  // 각 이벤트 바의 위치를 조정
        };
    };

    return (
        <div
            className={`bg-white p-2 h-28 cursor-pointer transition-colors hover:bg-gray-50 ${!isCurrentMonth && 'bg-gray-100'} border border-gray-200 overflow-hidden relative`}
            onClick={() => isCurrentMonth && onSelectDate(cur)}
        >
            <div className={`text-sm ${isCurrentMonth ? "font-medium" : "text-gray-400"} mb-2`}>{d}</div>
            {isCurrentMonth && (
                <>
                    {dayEvents.map((event, index) => {
                        const startDate = new Date(event.startDate);
                        const isStart = startDate.getDate() === d && startDate.getMonth() === mm && startDate.getFullYear() === yy;
                        return (
                            <motion.div
                                key={`events-${event.id}`}
                                className="text-xs flex items-center pl-3 overflow-hidden absolute left-0 right-0"
                                style={getEventStyle(event, index)}
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
                        <div className="text-xs text-gray-500 absolute bottom-1 right-1">+{dayEvents.length - 3} more</div>
                    )}
                </>
            )}
        </div>
    );
});