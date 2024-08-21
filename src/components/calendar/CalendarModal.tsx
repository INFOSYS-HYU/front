import React, { useState } from "react";
import { Event } from "@/types/calendar";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { formatDate } from "@/utils/dateUtils";

interface CalendarModalProps {
    selectDate: Event[] | null;
    closeModal: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ selectDate, closeModal }) => {
    const [openDescriptions, setOpenDescriptions] = useState<boolean[]>([]);

    function toggleDescription(index: number) {
        setOpenDescriptions(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    }

    return (
        <div className="p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Events</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <FaTimes size={24} />
                </button>
            </div>
            {selectDate?.length ? (
                selectDate.map((v, i) => (
                    <div key={i} className="mb-4 border-b pb-4 last:border-b-0">
                        <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleDescription(i)}
                        >
                            <h3 className="text-lg font-semibold">{v.title}</h3>
                            <div className="flex items-center space-x-2">
                                <p className="text-sm text-gray-600">
                                    {formatDate(v.startDate)} - {formatDate(v.endDate)}
                                </p>
                                {openDescriptions[i] ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                        </div>
                        {openDescriptions[i] && (
                            <p className="mt-2 text-gray-700">{v.desc}</p>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No events for this date.</p>
            )}
        </div>
    );
};