'use client'
import React from "react";
import Modal from "react-modal";
import { CalendarSquare } from "./CalendarSquare";
import { CalendarModal } from "./CalendarModal";
import { useDays } from "@/hooks/useDays";
import { Event } from "@/types/calendar";
import './calendar.css'

interface CalendarDetailProps {
    date: Date;
    events: Event[] | null;
    closeModal: () => void;
    modalIsOpen: boolean;
    selectDate: Event[] | null;
    onSelectDate: (date: Date) => void;
}

export const CalendarDetail: React.FC<CalendarDetailProps> = ({
    date,
    events,
    closeModal,
    modalIsOpen,
    selectDate,
    onSelectDate,
}) => {
    const { yy, mm } = { yy: date.getFullYear(), mm: date.getMonth() };
    const days = useDays(yy, mm);

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="w-full mt-4 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-7 gap-px bg-gray-200">
                    {weekDays.map((day, idx) => (
                        <div key={idx} className="bg-gray-100 text-center py-2 text-sm font-medium text-gray-600">
                            {day}
                        </div>
                    ))}
                    {days.map(d => (
                        <CalendarSquare 
                            key={`curMonth-${d}`} 
                            d={d} 
                            yy={yy} 
                            mm={mm} 
                            events={events} 
                            onSelectDate={onSelectDate} 
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 outline-none"
                ariaHideApp={false}
            >
                <CalendarModal selectDate={selectDate}/>
            </Modal>
        </div>
    );
};