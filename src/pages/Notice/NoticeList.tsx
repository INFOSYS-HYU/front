import React from "react";
import NoticeItem from "@/components/notice/NoticeItem";
import Banner from "@/components/ui/banner";

const NoticeList = () => {
  return (
    <>
      <Banner text="공지사항" />
      <div className="w-noticelist mx-auto flex flex-col gap-16 mb-20">
        <div className="w-full flex flex-col gap-5 ">
          <NoticeItem title="공지사항 제목" uploaddate="2024.08.06" />
          <NoticeItem title="공지사항 제목" uploaddate="2024.08.06" />
          <NoticeItem title="공지사항 제목" uploaddate="2024.08.06" />
        </div>
      </div>
    </>
  );
};

export default NoticeList;
