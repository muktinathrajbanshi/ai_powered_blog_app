import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div>
      <NavLink>
        <img src={assets.home_icon} alt="home_img" className="min-w-4 w-5" />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
