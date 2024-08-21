import { Outlet, Route, Routes } from "react-router-dom";
import Main from "@/pages/Main/Main.tsx";
import Gallery from "@/pages/Activitiy/Gallery.tsx";
import NavigationBar from "@/components/navbar/navbar";
import About from "./pages/About/About.tsx";
import Organization from "./pages/About/Organization.tsx";
import Footer from "./components/ui/footer.tsx";
import NoticeList from "./pages/Notice/NoticeList.tsx";
import Notice from "./pages/Notice/Notice.tsx";
import Faq from "./pages/Faq/Faq.tsx";
import Login from "./pages/Auth/login.tsx";
import Mypage from "./pages/Auth/Mypage.tsx";
import AdminRoute from "./services/AdminRoute.tsx";
import FinanceList from "./pages/Finance/FinanceList.tsx";
import Finance from "./pages/Finance/Finance.tsx";
import Admin from "./pages/Admin/Admin.tsx";
import AdminNoticeList from "./pages/Admin/Notice/NoticeList.tsx";
import AdminNotice from "./pages/Admin/Notice/Notice.tsx";
import AdminFinance from "./pages/Admin/Finance/Finance.tsx";
import AdminCalendar from "./pages/Admin/Calendar/Calendar.tsx";
import AdminGallery from "./pages/Admin/Gallery/Gallery.tsx";
import AdminLayout from "./pages/Admin/AdminLayout.tsx";
import FinanceLayout from "./pages/Finance/FinanceLayout.tsx";
import CalendarPage from "./pages/Activitiy/Calendar.tsx";

function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/about">
          <Route path="" element={<About />} />
          <Route path="organization" element={<Organization />} />
        </Route>
        <Route path="/activity">
          <Route path="gallery" element={<Gallery />} />
          <Route path="calendar" element={<CalendarPage />} />

        </Route>
        <Route path="/notice">
          <Route path=":paginationId" element={<NoticeList />} />
          <Route path="noticeDetail/:noticeId" element={<Notice />} />
          <Route path="faq" element={<Faq />} />
          <Route path="finance" element={<FinanceLayout />}>
            <Route index element={<FinanceList />} />
            <Route path=":financeId" element={<Finance />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* <Route
          path="/admin"
          element={
            <AdminRoute>
              <About />
            </AdminRoute>
          }
        /> */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="notice">
            <Route path=":paginationId" element={<AdminNoticeList />} />
            <Route path=":paginationId/:noticeId" element={<AdminNotice />} />
          </Route>
          <Route path="finance" element={<AdminFinance />} />
          <Route path="calendar" element={<AdminCalendar />} />
          <Route path="gallery" element={<AdminGallery />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
