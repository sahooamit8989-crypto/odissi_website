import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  // Desktop dropdown states
  const [about, setAbout] = useState(false);
  const [guruji, setGuruji] = useState(false);
  const [course, setCourse] = useState(false);
  const [media, setMedia] = useState(false);

  // Mobile states
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mAbout, setMAbout] = useState(false);
  const [mGuruji, setMGuruji] = useState(false);
  const [mCourse, setMCourse] = useState(false);
  const [mMedia, setMMedia] = useState(false);

  const refs = {
    about: useRef(null),
    guruji: useRef(null),
    course: useRef(null),
    media: useRef(null),
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      Object.values(refs).forEach((ref, i) => {
        if (ref.current && !ref.current.contains(e.target)) {
          [setAbout, setGuruji, setCourse, setMedia][i](false);
        }
      });
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeAll = () => {
    setAbout(false);
    setGuruji(false);
    setCourse(false);
    setMedia(false);
  };

  const mobileNav = (path) => {
    navigate(path);
    setMobileMenu(false);
    setMAbout(false);
    setMGuruji(false);
    setMCourse(false);
    setMMedia(false);
  };

  const dropdown = (items, closeFn) => (
    <div className="absolute top-10 left-0 bg-[#FBF6EE] rounded-xl shadow-xl border border-[#D4AF37] min-w-[220px] py-2 text-sm">
      {items.map(([label, path]) => (
        <p
          key={path}
          onClick={() => {
            navigate(path);
            closeFn();
          }}
          className="px-4 py-2 hover:bg-[#D4AF37]/20 hover:text-[#6B0F1A] cursor-pointer transition font-medium"
        >
          {label}
        </p>
      ))}
    </div>
  );

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-20 bg-gradient-to-r from-[#6B0F1A] via-[#8E1B2C] to-[#6B0F1A] shadow-lg">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-10">

          {/* BRAND */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex flex-col leading-none"
          >
            <h1 className="text-3xl font-extrabold tracking-[0.3em] text-[#D4AF37]">
              MANTRAH
            </h1>
            <span className="text-xs tracking-widest text-white/80 mt-1">
              School of Performing Arts
            </span>
          </div>

          {/* MENU */}
          <div className="flex gap-10 text-sm font-medium items-center text-[#D4AF37]">

            {/* ABOUT */}
            <div ref={refs.about} className="relative">
              <button
                onClick={() => {
                  closeAll();
                  setAbout((p) => !p);
                }}
                className="flex items-center gap-1 hover:text-white transition"
              >
                About
                <ChevronDown size={14} className={`${about && "rotate-180"} transition`} />
              </button>
              {about &&
                dropdown(
                  [
                    ["History", "/about/history"],
                    ["Vision & Mission", "/about/vision-mission"],
                    ["Faculty", "/about/faculty"],
                    ["Units", "/about/units"],
                  ],
                  () => setAbout(false)
                )}
            </div>

            {/* GURUJI */}
            <div ref={refs.guruji} className="relative">
              <button
                onClick={() => {
                  closeAll();
                  setGuruji((p) => !p);
                }}
                className="flex items-center gap-1 hover:text-white transition"
              >
                Guruji
                <ChevronDown size={14} className={`${guruji && "rotate-180"} transition`} />
              </button>
              {guruji &&
                dropdown(
                  [
                    ["Guruji", "/guruji/gurujis"],
                    ["Milestones", "/guruji/milestones"],
                    ["Composition", "/guruji/composition"],
                    ["Photo Gallery", "/guruji/photoGallery"],
                  ],
                  () => setGuruji(false)
                )}
            </div>

            {/* COURSES */}
            <div ref={refs.course} className="relative">
              <button
                onClick={() => {
                  closeAll();
                  setCourse((p) => !p);
                }}
                className="flex items-center gap-1 hover:text-white transition"
              >
                Courses
                <ChevronDown size={14} className={`${course && "rotate-180"} transition`} />
              </button>
              {course &&
                dropdown(
                  [
                    ["Regular Courses", "/course/regular"],
                    ["Special Courses", "/course/special"],
                  ],
                  () => setCourse(false)
                )}
            </div>

            {/* MEDIA */}
            <div ref={refs.media} className="relative">
              <button
                onClick={() => {
                  closeAll();
                  setMedia((p) => !p);
                }}
                className="flex items-center gap-1 hover:text-white transition"
              >
                Media
                <ChevronDown size={14} className={`${media && "rotate-180"} transition`} />
              </button>
              {media &&
                dropdown(
                  [
                    ["Photography", "/media/pgotograph"],
                    ["Video", "/media/video"],
                  ],
                  () => setMedia(false)
                )}
            </div>

            <NavLink to="/events" className="hover:text-white transition">
              Events
            </NavLink>

            <NavLink to="/contact" className="hover:text-white transition">
              Contact
            </NavLink>
            <button
            onClick={() => navigate("/adminlogin")}
            className="ml-4 px-5 py-2 cursor-pointer rounded-full border border-[#D4AF37] text-[#D4AF37]
                      hover:bg-[#D4AF37] hover:text-[#6B0F1A]
                      transition font-semibold text-sm"
          >
            Admin Login
          </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#6B0F1A] to-[#8E1B2C] flex items-center justify-between px-4 z-50 text-[#D4AF37]">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer leading-none"
        >
          <h1 className="text-xl font-extrabold tracking-[0.25em] text-[#D4AF37]">
            MANTRAH
          </h1>
          <span className="text-[10px] tracking-widest text-white/80">
            Performing Arts
          </span>
        </div>

        <button onClick={() => setMobileMenu(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="absolute right-0 top-0 h-full w-72 bg-[#6B0F1A] text-[#D4AF37] p-5">
            <div className="flex justify-end mb-6">
              <X onClick={() => setMobileMenu(false)} />
            </div>

            {[
              ["About", mAbout, setMAbout, [
                ["History", "/about/history"],
                ["Vision & Mission", "/about/vision-mission"],
                ["Faculty", "/about/faculty"],
                ["Units", "/about/units"],
              ]],
              ["Guruji", mGuruji, setMGuruji, [
                ["Guruji", "/guruji/gurujis"],
                ["Milestones", "/guruji/milestones"],
                ["Composition", "/guruji/composition"],
                ["Photo Gallery", "/guruji/photoGallery"],
              ]],
              ["Courses", mCourse, setMCourse, [
                ["Regular Courses", "/course/regular"],
                ["Special Courses", "/course/special"],
              ]],
              ["Media", mMedia, setMMedia, [
                ["Photography", "/media/pgotograph"],
                ["Video", "/media/video"],
              ]],
            ].map(([title, open, setOpen, links]) => (
              <div key={title} className="mb-4">
                <button
                  onClick={() => setOpen((p) => !p)}
                  className="flex justify-between w-full font-medium"
                >
                  {title}
                  <ChevronDown className={`${open && "rotate-180"} transition`} />
                </button>
                {open && (
                  <div className="ml-4 mt-2 text-sm space-y-2">
                    {links.map(([l, p]) => (
                      <p
                        key={p}
                        onClick={() => mobileNav(p)}
                        className="hover:text-white cursor-pointer"
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <p className="font-semibold mt-4 hover:text-white cursor-pointer" onClick={() => mobileNav("/events")}>
              Events
            </p>
            <p className="font-semibold mt-2 hover:text-white cursor-pointer" onClick={() => mobileNav("/contact")}>
              Contact
            </p>
               <button
              onClick={() => mobileNav("/adminlogin")}
              className="mt-6 w-full border cursor-pointer border-[#D4AF37] py-2 rounded-lg
                        font-semibold hover:bg-[#D4AF37] hover:text-[#6B0F1A]
                        transition"
            >
              Admin Login
            </button>

            
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;








