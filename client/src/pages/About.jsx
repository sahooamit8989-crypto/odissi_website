
import { NavLink, Outlet,  } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const About = () => {
  

  return (
    <div>
      {/* ===== NESTED CONTENT ===== */}
      <Outlet />
    </div>
  );
};

export default About;
