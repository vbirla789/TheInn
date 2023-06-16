import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={
        !navState
          ? "absolute top-7 left-10 z-50 "
          : "fixed top-0 left-0 right-0 h-[10vh] flex items-center  z-50 bg-[#a4b1b5] opacity-80"
      }
    >
      <nav className="flex items-center ">
        <ul className="flex flex-row gap-10">
          <li className="grid items-center ml-20">
            <a href="/">
              <h1 className="text-2xl text-[#3e352c] ">Home</h1>
            </a>
          </li>
          <li className="grid items-center">
            <a href="/rooms">
              <h1 className="text-2xl text-[#3e352c] ">Rooms</h1>
            </a>
          </li>
          <li className="grid items-center">
            <a href="/gallery">
              <h1 className="text-2xl text-[#3e352c] ">Gallery</h1>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
