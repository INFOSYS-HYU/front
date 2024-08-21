import { Link } from "react-router-dom";
import { BookmarkBorder, PictureInPictureTwoTone } from "@mui/icons-material";
import { FaCalendar } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const navItems = [
  {
    title: "공지사항 관리",
    path: "/admin/notice/0",
    icon: <BookmarkBorder />
  },
  {
    title: "결산안 관리",
    path: "/admin/finance",
    icon: <FaPencil />
  },
  {
    title: "캘린더 관리",
    path: "/admin/calendar",
    icon: <FaCalendar />
  },
  {
    title: "갤러리 관리",
    path: "/admin/gallery",
    icon: <PictureInPictureTwoTone />
  }
];

const Admin = () => {
  return (
    <div className="w-noticelist mx-auto flex flex-col gap-16">
      <h1 className="text-3xl font-bold text-center">관리 목록</h1>
      <div className="w-full mx-auto flex flex-col gap-5 mb-20">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-2 w-full p-5 text-xl font-semibold border-2 border-gray-4 duration-200 ease-in-out hover:border-black rounded-xl cursor-pointer"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Admin;
