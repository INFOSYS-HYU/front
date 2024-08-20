import Banner from "@/components/ui/banner";
import { Outlet } from "react-router-dom";

const FinanceLayout = () => {
  return (
    <div>
      <Banner text="결산안" />
      <Outlet />
    </div>
  );
};

export default FinanceLayout;
