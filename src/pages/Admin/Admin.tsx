import Banner from "@/components/ui/banner";
import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="w-noticelist mx-auto flex flex-col gap-16">
      <h1 className="text-3xl font-bold text-center">관리 목록</h1>
      <div className="w-full mx-auto flex flex-col gap-5 mb-20">
        <Link
          to="/admin/notice/1"
          className="block w-full p-5 text-xl font-semibold border-2 border-gray-4 duration-200 ease-in-out hover:border-black rounded-xl cursor-pointer"
        >
          공지사항 관리
        </Link>
        <Link
          to="/admin/finance"
          className="block w-full p-5 text-xl font-semibold border-2 border-gray-4 duration-200 ease-in-out hover:border-black rounded-xl cursor-pointer"
        >
          결산안 관리
        </Link>
        <Link
          to="/admin/calendar"
          className="block w-full p-5 text-xl font-semibold border-2 border-gray-4 duration-200 ease-in-out hover:border-black rounded-xl cursor-pointer"
        >
          캘린더 관리
        </Link>
        <Link
          to="/admin/gallery"
          className="block w-full p-5 text-xl font-semibold border-2 border-gray-4 duration-200 ease-in-out hover:border-black rounded-xl cursor-pointer"
        >
          갤러리 관리
        </Link>
      </div>
    </div>
  );
};

export default Admin;
