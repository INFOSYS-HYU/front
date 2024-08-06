import { Outlet, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Gallery from "@/pages/activitiy/gallery";
import NavigationBar from "@/components/navbar/navbar";
import About from "./pages/about/about";
import Organization from "./pages/about/organization.tsx";
import Footer from "./components/ui/footer.tsx";
import NoticeList from "./pages/notice/NoticeList.tsx";
import Notice from "./pages/notice/Notice.tsx";

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
        <Route index element={<Home />} />
        <Route path="/about">
          <Route path="" element={<About />} />
          <Route path="organization" element={<Organization />} />
        </Route>
        <Route path="/activity">
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="/notice" element={<NoticeList />}>
          <Route path="notice" element={<Notice />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
