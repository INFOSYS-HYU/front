"use client";
import React, { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  calendarDateState,
  calendarModalState,
  calendarEventState,
  calendarSelectDateState,
} from "@/atoms/atom";
import { convertMtoStr } from "@/utils/dateUtils";
import { CalendarDetail } from "@/components/calendar/CalendarDetail";
import { eventsdata } from "@/data/calendarEvents";

export const Calendar: React.FC = () => {
  const [date, setDate] = useRecoilState(calendarDateState);
  const [modalIsOpen, setModalIsOpen] = useRecoilState(calendarModalState);
  const [selectDate, setSelectDate] = useRecoilState(calendarSelectDateState);
  const [events, setEvents] = useRecoilState(calendarEventState);
  
  const yy = date.getFullYear();
  const mm = date.getMonth();

  useEffect(() => {
    setEvents(eventsdata);
  }, [setEvents]);

  const onPrevClick = useCallback(() => setDate(new Date(yy, mm - 1, 1)), [yy, mm, setDate]);
  const onNextClick = useCallback(() => setDate(new Date(yy, mm + 1, 1)), [yy, mm, setDate]);

  const onSelectDate = useCallback((date: Date) => {
    setSelectDate(events?.filter((v) => v.startDate <= date && v.endDate >= date) || []);
    setModalIsOpen(true);
  }, [events, setSelectDate, setModalIsOpen]);

  const closeModal = useCallback(() => setModalIsOpen(false), [setModalIsOpen]);

  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto flex flex-col max-w-5xl w-full text-gray-800 px-4 sm:px-6 lg:px-8 font-pretendard">
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-4xl sm:text-5xl font-bold">{convertMtoStr(mm)}</h2>
          <div className="flex items-center space-x-4">
            <button onClick={onPrevClick} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Previous month">
              <IoIosArrowBack size={24} />
            </button>
            <span className="text-2xl font-medium">{yy}</span>
            <button onClick={onNextClick} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Next month">
              <IoIosArrowForward size={24} />
            </button>
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
  );
};