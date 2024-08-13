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
    <div className="w-notice mx-auto flex flex-col gap-16 my-20">
      <h1 className="text-3xl font-bold text-center">공지사항</h1>
      <div>
        <div className="w-notice p-8 border-2 border-gray-4 rounded-xl flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">공지사항 제목</h1>
            <h2 className="text-base text-gray-1 font-semibold">
              2024.07.22.월
            </h2>
          </div>
          <div>
            <p>일시:</p>
            <p>장소:</p>
            <p>땡땡땡:</p>
            <p>땡땡땡땡:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
