import Hero from "./components/2_hero_secotion/Hero";
import Header from "./components/1_header/Header";
import Mainsection from "./components/3_main/Mainsection";
import Contact from "./components/4_contact/Contact";
import Footer from "./components/5_footer/Footer";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 550) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }

      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);
        localStorage.setItem("scrolltop", `${(scrollTop / height) * 100}`);
        // console.log(localStorage.getItem("scrolltop"));
        // console.log(Number(localStorage.getItem("scrolltop")));
        setScroll(Number(localStorage.getItem("scrolltop")));
      });
    });
  }, []);

  const [showScrollBtn, setshowScrollBtn] = useState(false);

  const [scroll, setScroll] = useState(0);

  return (
    <div
      id="up"
      className="main-container w-auto   md:w-[85%] overflow-hidden bg-seconderylight dark:bg-secondery border-2 border-borderlight dark:border-border container  mx-auto px-4 sm:px-16  "
    >
      <div
        className="fixed top-0 left-0 w-full h-1  bg-blueElzero dark:bg-orange rounded-sm z-40 duration-300"
        style={{ width: scroll + "%" }}
      />
      <Header />
      <Hero />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      <Mainsection />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      <Contact />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      <Footer />

      <a
        href="#up"
        className={`bg-scrolltop  border-scrolltopborder hover:bg-scrollhover dark:bg-amber-400 dark:hover:bg-orange duration-300 fixed bottom-10 right-[2%] rounded-full sm:w-10 sm:h-10 w-8 h-8 text-2xl sm:opacity-100 opacity-100  hover:opacity-100`}
        style={{ opacity: showScrollBtn ? 1 : 0 }}
      >
        <button className=" icon-keyboard_arrow_up w-full h-full " />
      </a>
    </div>
  );
}

export default App;
