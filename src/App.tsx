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
        <Route path="/noticelist" element={<NoticeList />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}

export default App;
