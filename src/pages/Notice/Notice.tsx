import Banner from "@/components/ui/banner";
import { Button } from "@mui/material";
import React from "react";

// interface NoticeProps {
//   noticeID: string;
//   title: string;
//   content: string;
//   uploadDate: string;
//   imageID: string;
// }

const Notice = ({}) => {
  return (
    <>
      <Banner text="공지사항" />
      <div className="w-notice mx-auto flex flex-col gap-16 mb-20">
        <div>
          <div className="w-full p-8 border-2 border-gray-4 rounded-xl flex flex-col gap-5">
            <h1 className="text-xl font-semibold">공지사항 제목</h1>
            <h2 className="text-base text-gray-1 font-semibold mb-1">
              2024.07.22.월
            </h2>
            <div>
              <p>일시:</p>
              <p>장소:</p>
              <p>땡땡땡:</p>
              <p>땡땡땡땡:</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button size="large" variant="contained" color="primary">
            목록
          </Button>
        </div>
      </div>
    </>
  );
};

export default Notice;
