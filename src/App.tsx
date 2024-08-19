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
        </Route>
        <Route path="/notice">
          <Route path=":paginationId" element={<NoticeList />} />
          <Route path="noticeDetail/:noticeId" element={<Notice />} />
          <Route path="faq" element={<Faq />} />
          <Route path="finance">
            <Route path="" element={<FinanceList />} />
            <Route path=":financeId" element={<Finance />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <About />
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
