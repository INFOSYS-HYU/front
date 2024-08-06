import React from "react";
import NoticeItem from "@/components/notice/NoticeItem";

const NoticeList = () => {
  return (
    <div className="w-noticelist mx-auto flex flex-col gap-16 my-20">
      <h1 className="text-3xl font-bold text-center">공지사항</h1>
      <div className="w-full flex flex-col gap-5 ">
        <NoticeItem title="공지사항 제목" uploaddate="2024.08.06" />
        <NoticeItem title="공지사항 제목" uploaddate="2024.08.06" />
        <NoticeItem title="공지사항 제목" uploaddate="2024.08.06" />
      </div>
    </div>
  );
};

export default NoticeList;
