import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import DropMenu from "./dropMenu";
import Sidemenu from "./sidemenu";
import "./navbar.css";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const navRef = useRef([]);
  const [menu, setMenu] = useState(false);

  const navItems = [
    { title: "About us", path: "/about" },
    { title: "Notice", path: "/notice" },
    { title: "Activity", path: "/activity" },
    { title: "Wiki", path: "/wiki" },
    { title: "Login", path: "/login" }
  ];

  return (
    <header className="z-50 fixed top-0 left-0 right-0 h-[60px] nav_background">
      <nav className="flex justify-between w-full max-w-[1280px] m-auto h-[60px] items-center">
        <Link to="/" className="mobile:w-[270px] w-[180px] ml-4">
          <img src="/assets/images/logo.png" width={270} height={60} alt="Logo" />
        </Link>
        <div className="h-full justify-between">
          <ul className="nav_items h-full">
            {navItems.map((item, index) => (
              <li
                key={item.title}
                className={`w-[160px] h-full flex items-center justify-center hover:drop-shadow-white-lg font-base font-pretendard ${
                  pathname.startsWith(item.path) && "active"
                  }`}
                ref={(el) => (navRef.current[index] = el)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <DropMenu navRef={navRef} />
          <div className="nav_overlay"></div>
          <div className="mobile_nav text-3xl mr-9 mt-3.5">
            <GiHamburgerMenu onClick={() => setMenu(!menu)} />
          </div>
          <Sidemenu menu={menu} setMenu={setMenu} pathname={pathname} />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;