import { Outlet } from "react-router-dom";

const NoticeLayout = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold my-12 text-center">공지사항 관리</h2>
      <Outlet />
    </div>
  );
};

export default NoticeLayout;
