import Logo from "../assets/SVG/fluur-white.svg";

import { Fade, Slide } from "react-reveal";
import { useState, useId } from "react";
import cn from "classnames";
import { Waypoint } from "react-waypoint";

const navList = [
  {
    name: "Launchpad",
    url: "/",
  },
  {
    name: "ZKAP",
    url: "/",
  },
  {
    name: "News",
    url: "/",
  },
  {
    name: "Socials",
    url: "/",
  },

  {
    name: "Litepaper",
    url: "/",
  },
];

function MobileMenu({ show = false }) {
  return (
    <>
      {show && (
        <div className="fixed  top-[10%] right-0 left-0 bottom-0 bg-black/60 w-full"></div>
      )}
      <Fade left when={show} duration={300} collapse={!show}>
        <nav className="bg-black fixed w-full z-10 top-[10%] left-0 lg:hidden pb-8">
          <ul className="w-full">
            {navList.map((a, i) => {
              return (
                <a key={i} href={a.url}>
                  <div className="w-full border-b-2  border-white/20 py-2 text-left capitalize ">
                    <span className="block w-full px-6 py-3 text-white/80 text-xl">
                      {" "}
                      {a.name}{" "}
                    </span>
                  </div>
                </a>
              );
            })}
          </ul>
        </nav>
      </Fade>
    </>
  );
}

function NavItem({ active, name, url }) {
  return (
    <a href={url}>
      <li className="text-white  self-end border-b-2 pb-4 border-transparent hover:border-[#5D1DE9] font-bold transition-colors duration-200  text-lg">
        {name}
      </li>
    </a>
  );
}

function ScrollDetector({ toggler, ...props }) {
  function leave({ currentPosition }) {
    // console.log("I am leaving");
    toggler(false);
  }

  function enter({ currentPosition }) {
    // console.log("I am entering");

    toggler(true);
  }

  return (
    <Waypoint onEnter={enter} onLeave={leave}>
      {props.children}
    </Waypoint>
  );
}

function Header(props) {
  const [showNav, setShow] = useState(false);
  const [showMain, setShowMain] = useState(true);

  function toggleNav(e) {
    setShow(!showNav);
  }

  function toggler(t) {
    setShowMain(t);

    if (!t) {
      setShow(false);
    }
  }

  return (
    <>
      <MobileMenu show={showNav} />

      <Slide key={useId()} top when={showMain} duration={400}>
        <header className="fixed top-0 left-0 right-0 z-20 bg-black py-4 px-4 flex flex-row justify-between  items-center">
          <div className="lg:w-[15%] lg:ml-4 lg:flex-shrink-0 self-center ">
            <div className="flex flex-row justify-start items-center space-x-2">
              <div className="lg:hidden relative">
                <i
                  onClick={toggleNav}
                  className={
                    "  text-4xl text-white  " +
                    cn({
                      " bi-list ": !showNav,
                      " bi-x ": showNav,
                    })
                  }
                ></i>
              </div>

              <div className="">
                <img alt="Logo" src={Logo} width="100" height="50" />
              </div>
            </div>
          </div>

          <ul className="  hidden lg:flex flex-row justify-start space-x-16 items-center self-end flex-1">
            {navList.map((a, i) => {
              return <NavItem key={i} {...a} />;
            })}
          </ul>

          <div className="max-w-[300px]  lg:block">
            <button className="block  w-full  hover:c-bg hover:text-white transition-colors duration-200  rounded-3xl bg-white text-black px-6 font-bold capitalize py-2 text-lg">
              connect <span className="hidden lg:inline"> Accounts</span>
            </button>
          </div>
        </header>
      </Slide>

      <ScrollDetector toggler={toggler}>
        <div className="relative top-[500px]"> </div>
      </ScrollDetector>
    </>
  );
}

export default Header;
