import BgMain from "@/components/main/bgmain";
import { Calendar } from "@/components/calendar/Calendar";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  type NoticeType = {
    id: number;
    title: string;
    desc: string;
    date: Date;
  };

  const [notices, setNotices] = useState<NoticeType[] | null>(null);
  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await axios.get("http://localhost:3001/api/notice");
        setNotices(response.data);
      } catch (error) {
        console.error("공지사항을 불러오는 데 실패했습니다:", error);
      }
    }

    fetchNotices();
  }, []);


  return (
    <main className="relative z-1 Dirty_Beauty ">
      <BgMain />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-5xl text-white font-pretendard font-bold mb-12 text-center">
          공지사항
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notices &&
            notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-b-2 border-gray-800"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {notice.desc}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <FaCalendarAlt className="mr-2 text-gray-400" />
                    {new Date(notice.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <Link
                    to={`notice/:${notice.id}`}
                    className="text-gray-800 font-semibold flex items-center justify-between hover:text-black transition-colors duration-200"
                  >
                    자세히 보기
                    <FaChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
        {!notices && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
      </div>
      <div className="py-10 bg-gray-50">
        <Calendar />
      </div>
    </main>
  );
}
