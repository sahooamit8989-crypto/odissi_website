





import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ScrollToTop from "./componets/ScrollToTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ===== PAGES ===== */
import Home from "./pages/Home";
import About from "./pages/About";
import Guruji from "./pages/Guruji";
import Courses from "./pages/Courses";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

/* ===== COMPONENTS ===== */
import History from "./componets/History";
import VisionMission from "./componets/VisonMission";
import Faculty from "./componets/Faculty";
import Units from "./componets/Units";

import Gurujis from "./componets/Gurujis";
import Milestones from "./componets/Milestones";
import Composition from "./componets/Composition";
import PhotoGallery from "./componets/PhotoGallery";

import Regular from "./componets/Regular";
import Special from "./componets/Special";

import PhotoGraph from "./componets/PhotoGraph";
import Video from "./componets/Video";

import AddPhoto from "./componets/AddPhoto";
import AddVideo from "./componets/AddVideo";
import ShowData from "./componets/ShowData";
import AddEvent from "./componets/AddEvent";

const App = () => {
  const location = useLocation();

  // ✅ Hide footer on admin pages
  const isAdminPage = location.pathname.startsWith("/admin-dashboard");

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* ===== HOME ===== */}
        <Route path="/" element={<Home />} />

        {/* ===== ABOUT ===== */}
        <Route path="/about" element={<About />}>
          <Route index element={<History />} />
          <Route path="history" element={<History />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="units" element={<Units />} />
        </Route>

        {/* ===== GURUJI ===== */}
        <Route path="/guruji" element={<Guruji />}>
          <Route index element={<Gurujis />} />
          <Route path="gurujis" element={<Gurujis />} />
          <Route path="milestones" element={<Milestones />} />
          <Route path="composition" element={<Composition />} />
          <Route path="photoGallery" element={<PhotoGallery />} />
        </Route>

        {/* ===== COURSES ===== */}
        <Route path="/course" element={<Courses />}>
          <Route index element={<Regular />} />
          <Route path="regular" element={<Regular />} />
          <Route path="special" element={<Special />} />
        </Route>

        {/* ===== MEDIA ===== */}
        <Route path="/media" element={<Media />}>
          <Route index element={<PhotoGraph />} />
          <Route path="pgotograph" element={<PhotoGraph />} />
          <Route path="video" element={<Video />} />
        </Route>

        {/* ===== OTHER PAGES ===== */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* ===== ADMIN DASHBOARD ===== */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AddPhoto />} />
          <Route path="add-photo" element={<AddPhoto />} />
          <Route path="add-video" element={<AddVideo />} />
          <Route path="show-data" element={<ShowData />} />
          <Route path="add-event" element={<AddEvent />} />
        </Route>
      </Routes>

      {/* ✅ Footer hidden only on admin dashboard */}
      {!isAdminPage && <Footer />}
    </>
  );
};

export default App;
