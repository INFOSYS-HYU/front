'use client'
import { useRecoilState } from "recoil";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { calendarDateState, calendarModalState, calendarEventState,calendarSelectDateState } from '@/atoms/atom'
import { convertMtoStr } from "@/utils/dateUtils";
import { CalendarDetail } from "@/components/calendar/CalendarDetail";
import { eventsdata } from '@/data/calendarEvents';
import { useEffect } from "react";
import axios from "axios";

export const Calendar = () => {
    const [date, setDate] = useRecoilState(calendarDateState);
    const [modalIsOpen, setModalIsOpen] = useRecoilState(calendarModalState);
    const [selectDate, setSelectDate] = useRecoilState(calendarSelectDateState);
    const [events, setEvents] = useRecoilState(calendarEventState);
    const yy = date.getFullYear();
    const mm = date.getMonth();
    useEffect(() => {
        setEvents(eventsdata);
    },[])

    const onPrevClick = () => setDate(new Date(yy, mm - 1, 1));
    const onNextClick = () => setDate(new Date(yy, mm + 1, 1));
    
    const onSelectDate = (date: Date) => {
        setSelectDate(() => events?.filter(v =>  v.startDate <= date && v.endDate >= date)||[]);
        setModalIsOpen(true);
    };
    
    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="w-full bg-white h-screen pt-10">
            <div className="m-auto flex flex-col max-w-[1264px] w-full text-black px-8 font-pretendard mt-10">
                <div className="flex justify-between w-full mobile:px-10 px-1">
                    <div className="mobile:text-6xl text-5xl font-semibold">{convertMtoStr(mm)}</div>
                    <div className="flex flex-col text-4xl">
                        <div className="flex ml-2">
                            <IoIosArrowBack onClick={onPrevClick} />
                            <IoIosArrowForward onClick={onNextClick} />
                        </div>
                        {yy}
                    </div>
                </div>
                <CalendarDetail
                    date={date}
                    onSelectDate={onSelectDate}
                    events={events}
                    closeModal={closeModal}
                    selectDate={selectDate}
                    modalIsOpen={modalIsOpen}
                />
            </div>
        </div>
    )
}