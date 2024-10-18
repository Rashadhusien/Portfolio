import { useEffect, useState } from "react";

function Header() {
  const [showmodel, setshowmodel] = useState(false);
  const [classname, setClassName] = useState(true);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      // document.body.classList.remove("dark");
      // document.body.classList.add("light");
      document.getElementById("parent").classList.remove("dark");
      document.getElementById("parent").classList.add("light");
    } else {
      // document.body.classList.remove("light");
      // document.body.classList.add("dark");
      document.getElementById("parent").classList.remove("light");
      document.getElementById("parent").classList.add("dark");
    }
  }, [theme]);

  return (
    <header
      onClick={() => {
        if (showmodel === true && classname === true) {
          setshowmodel(false);
        }
      }}
      className=" flex  relative items-center justify-between sm:justify-around px-9 mt-5 pb-3 "
    >
      <div className="hidden sm:block" />

      <button
        onClick={() => {
          if (classname) {
            setClassName(false);
            setshowmodel(true);
          } else {
            setClassName(true);
            setshowmodel(false);
          }
        }}
        className={`${
          classname || showmodel === false
            ? "icon-th-menu rlative"
            : "icon-close fixed"
        }  block z-50 icon-close-and-menu left-15  sm:hidden active:scale-90  icon-th-menu w-10 h-10 rounded-full border border-blue dark:border-opacityorange shadow-3xl  duration-300 text-xl bg-bgHeaderlight dark:bg-bgHeader text-subtitle dark:text-sub-title-light hover:text-titlelight hover:border-blueElzero dark:hover:text-title dark:hover:border-orange `}
      />

      <div
        onClick={() => {
          setshowmodel(false);
          setClassName(true);
        }}
        className={`${
          showmodel ? " opacity-100 clip  max-w-96" : " opacity-0 notclip w-1/2"
        } popupright bg-primarylight dark:bg-popupMenu backdrop-blur fixed overflow-hidden h-full w-1/2 top-0 left-0 z-40 duration-500 sm:hidden`}
      >
        <ul className="mt-20 pl-5">
          <li className=" border-b py-3 border-border dark:border-borderlight hover:pl-1 duration-300">
            <a
              href="#about"
              className=" hover:text-blueElzero text-titlelight dark:text-title dark:hover:text-orange transition-all duration-300 text-xl w-full block"
            >
              About
            </a>
          </li>
          <li className=" border-b py-3 border-border dark:border-borderlight hover:pl-1 duration-300">
            <a
              href="#"
              className=" hover:text-blueElzero  text-titlelight dark:text-title dark:hover:text-orange transition-all duration-300 text-xl w-full block"
            >
              soon
            </a>
          </li>
          <li className=" border-b py-3 border-border dark:border-borderlight hover:pl-1 duration-300">
            <a
              href="#project"
              className=" hover:text-blueElzero  text-titlelight dark:text-title dark:hover:text-orange transition-all duration-300 text-xl w-full block"
            >
              Projects
            </a>
          </li>
          <li className=" border-b py-3 border-border dark:border-borderlight hover:pl-1 duration-300">
            <a
              href="#"
              className=" hover:text-blueElzero  text-titlelight dark:text-title dark:hover:text-orange transition-all duration-300 text-xl w-full block "
            >
              soon
            </a>
          </li>
          <li className=" py-3 hover:pl-1 duration-300">
            <a
              href="#contact"
              className=" hover:text-blueElzero  text-titlelight dark:text-title dark:hover:text-orange transition-all duration-300 text-xl w-full block "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <nav className="py-3 px-6 rounded-full shadow-3xl hidden sm:block mr-2  bg-bgHeaderlight dark:bg-bgHeader">
        <ul className="flex gap-4  ">
          <li>
            <a
              href="#about"
              className="hover:text-blueElzero opacity-90 text-sm font-medium text-[0.88rem] hover:opacit100 hover:text-[0.9rem] transition-all duration-300 text-titlelight dark:text-title dark:hover:text-orange"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blueElzero opacity-90 text-sm font-medium text-[0.88rem] hover:opacity-100 hover:text-[0.9rem] transition-all duration-300 text-titlelight dark:text-title dark:hover:text-orange"
            >
              soon
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="hover:text-blueElzero opacity-90 text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] transition-all duration-300 text-titlelight dark:text-title dark:hover:text-orange"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blueElzero opacity-90 text-sm text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] transition-all duration-300 text-titlelight dark:text-title dark:hover:text-orange "
            >
              soon
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" hover:text-blueElzero opacity-90 text-sm text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] transition-all duration-300  text-titlelight dark:text-title dark:hover:text-orange"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="icon-mode active:scale-90 text-xl w-10 h-10 rounded-full border  shadow-3xl duration-300 bg-bgHeaderlight dark:bg-bgHeader dark:text-opacityorange dark:hover:text-orange dark:text-sub-title-light text-subtitle opacity-90 hover:opacity-100 border-blue hover:border-blueElzero hover:text-blueElzero dark:border-opacityorange dark:hover:border-orange"
        onClick={() => {
          // send value to local storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        {localStorage.getItem("currentMode") === "dark" ? (
          <span className="icon-sun  " />
        ) : (
          <span className="icon-moon-o" />
        )}
      </button>
    </header>
  );
}

export default Header;
