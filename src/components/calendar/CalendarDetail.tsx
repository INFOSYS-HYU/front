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

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="w-full mt-4 max-w-[1120px] m-auto">
            <div className="mt-2 text-black w-full relative text-xs mobile:text-base z-10 border-black">
                <div className="border-y border-y-black leading-10 mb-3">
                    <div className="w-full flex text-center">
                        {weekDays.map((day, idx) => (
                            <span key={idx} className="flex-1">{day}</span>
                        ))}
                    </div>
                </div>
                <div className="w-full h-fit flex flex-wrap">
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
                overlayClassName="custom-overlay"
                className="custom-modal w-2/3 h-2/3 mobile:w-[540px] mobile:h-[700px] bg-white rounded-3xl"
                ariaHideApp={false}
            >
                <CalendarModal selectDate={selectDate} />
            </Modal>
        </div>
    );
};