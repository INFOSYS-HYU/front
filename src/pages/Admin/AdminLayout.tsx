import Banner from "@/components/ui/banner";
import { Outlet } from "react-router-dom";

const AdminOutlet = () => {
  return (
    <div>
      <Banner text="관리자 페이지" />
      <Outlet />
    </div>
  );
};

export default AdminOutlet;
