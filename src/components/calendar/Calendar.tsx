"use client";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import {
  calendarDateState,
  calendarModalState,
  calendarEventState,
  calendarSelectDateState,
} from "@/atoms/atom";
import { convertMtoStr } from "@/utils/dateUtils";
import { CalendarDetail } from "@/components/calendar/CalendarDetail";

interface Event {
  id: number;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
}

export const Calendar: React.FC = () => {
  const [date, setDate] = useRecoilState(calendarDateState);
  const [modalIsOpen, setModalIsOpen] = useRecoilState(calendarModalState);
  const [selectDate, setSelectDate] = useRecoilState(calendarSelectDateState);
  const [events, setEvents] = useRecoilState<Event[]>(calendarEventState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const yy = date.getFullYear();
  const mm = date.getMonth();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3001/api/calendar');
      console.log('API Response:', response.data); // 로그 추가

      if (!Array.isArray(response.data)) {
        throw new Error('API response is not an array');
      }

      const fetchedEvents = response.data.map((event: any) => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
          console.error('Invalid date for event:', event);
          return null;
        }

        return {
          id: event.id,
          title: event.title,
          content: event.content,
          startDate,
          endDate
        };
      }).filter((event): event is Event => event !== null);

      console.log('Processed Events:', fetchedEvents); // 로그 추가
      setEvents(fetchedEvents);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to load events. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  const onPrevClick = useCallback(() => setDate(new Date(yy, mm - 1, 1)), [yy, mm, setDate]);
  const onNextClick = useCallback(() => setDate(new Date(yy, mm + 1, 1)), [yy, mm, setDate]);

  const onSelectDate = useCallback((date: Date) => {
    const selectedEvents = events.filter((v) => {
      return v.startDate <= date && v.endDate >= date;
    });
    console.log('Selected Date:', date);
    console.log('Selected Events:', selectedEvents);
    setSelectDate(selectedEvents);
    setModalIsOpen(true);
  }, [events, setSelectDate, setModalIsOpen]);

  const closeModal = useCallback(() => setModalIsOpen(false), [setModalIsOpen]);

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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