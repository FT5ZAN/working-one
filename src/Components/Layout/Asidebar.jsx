

import { NavLink } from "react-router-dom";
import { HiOutlineUser, HiOutlineChartBar, HiOutlineCloud } from "react-icons/hi";

function Asidebar() {
  const navItems = [
    { to: "/", icon: HiOutlineUser, label: "Accounts" },
    { to: "/Reports", icon: HiOutlineChartBar, label: "Reports" },
    { to: "/Storage", icon: HiOutlineCloud, label: "Storage" },
  ];

  return (
    <div className="w-full h-full p-2 md:p-5 lg:p-6 flex flex-col item-center justify-center md:justify-start gap-6 md:gap-8">
      
      {/* Logo Section */}
     <div className="flex items-center hidden md:flex ">
        <img src="/logo.png" alt="logo" className="w-12 h-12 relative  " />

        {/* Merged Text */}
        <h1 className="text-xl font-semibold tracking-[-0.04em] text-zinc-800 dark:text-white  absolute left-15">
          Track<span className="text-blue-600">.</span>
        </h1>
      </div> 

      {/* Navigation Menu */}
      <nav className="flex justify-evenly items-center md:flex-col  md:justify-start gap-1 md:gap-1.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative group flex items-center gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl transition-all duration-200 text-xs md:text-sm lg:text-base font-medium ${
                isActive
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-950/30"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Active Indicator */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8  rounded-r-full" />
                )}
                
                {/* Icon */}
                <Icon className="text-base md:text-lg lg:text-xl flex-shrink-0" />
                
                {/* Label - Hidden on mobile */}
                <span className="hidden md:inline">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Asidebar;