import React, { useState } from "react";
import { Event } from "@/types/calendar";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { formatDate } from "@/utils/dateUtils";

export const CalendarModal = ({ selectDate }: { selectDate: Event[] | null }) => {
    const [openDescriptions, setOpenDescriptions] = useState<boolean[]>([]);

    function toggleDescription(index: number) {
        setOpenDescriptions(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    }

    return (
        <div className="w-full h-full flex flex-col p-4 space-y-4">
            {selectDate?.map((v, i) => {
                return (
                    <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div 
                            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => toggleDescription(i)}
                        >
                            <div className="flex items-center space-x-4">
                                <div className={`text-blue-500 transition-transform duration-200 ${openDescriptions[i] ? 'transform rotate-180' : ''}`}>
                                    {openDescriptions[i] ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{v.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                {formatDate(v.startDate)} ~ {formatDate(v.endDate)}
                            </p>
                        </div>
                        <div 
                            className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                                openDescriptions[i] ? 'max-h-80 py-4' : 'max-h-0 py-0'
                            }`}
                        >
                            <p className="text-gray-700">{v.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};