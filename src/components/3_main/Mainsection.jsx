import React from "react";
import { myProjects } from "./myProjects";
import { buttonsCategories } from "./buttonsCategories";
import { motion } from "framer-motion";

// ======== categories ========
// html&css
// JavaScript
// reactjs
// Bootstrap

function Mainsection() {
  const [isActive, setIsActive] = React.useState("all");
  const [arr, setArr] = React.useState(myProjects);

  const handleClick = (category) => {
    setIsActive(category);

    const mycategory = myProjects.filter((project) => {
      const ZZZ = project.category.find((myItem) => {
        return myItem === category;
      });
      return ZZZ === category;
    });
    setArr(mycategory);
  };

  return (
    <main
      className="flex gap-12  items-start flex-col sm:flex-row"
      id="project"
    >
      <section className="left-section  flex flex-row w-full sm:w-auto flex-wrap justify-center items-center sm:flex-col gap-3 ">
        <button
          onClick={() => {
            setIsActive("all");
            setArr(myProjects);
          }}
          className={
            isActive === "all"
              ? "active duration-500 active:scale-90 bg-blueElzero dark:bg-btnproject p-3 capitalize text-center w-44 text-base py-3.5 opacity-100 font-bold tracking-tight rounded-xl   border-2 border-btnproject dark:border-orange"
              : " duration-500 bg-blueElzero dark:bg-btnproject active:scale-90 p-3 capitalize text-center w-44 text-base py-3 opacity-50 hover:opacity-100  rounded-xl hover:border-btnproject  dark:hover:border-orange border-2"
          }
        >
          All Projects
        </button>

        {buttonsCategories.map((btn) => {
          return (
            <button
              key={btn.id}
              onClick={() => {
                handleClick(btn.btnCategory);
              }}
              className={
                isActive === btn.btnCategory
                  ? "active duration-500 active:scale-90 bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight py-3.5 p-3 capitalize text-center w-44 text-base rounded-xl  border-2 border-btnproject dark:border-orange "
                  : " duration-500 bg-blueElzero dark:bg-btnproject active:scale-90 p-3 capitalize text-center w-44 text-base py-3 opacity-50 hover:opacity-100 hover:border-btnproject dark:hover:border-orange border-2  rounded-xl "
              }
            >
              {btn.displayName}
            </button>
          );
        })}
      </section>
      <motion.section className=" group right-secion  flex flex-wrap gap-5 items-center justify-center flex-grow">
        {arr.map((item) => {
          return (
            <article
              key={item.id}
              className=" h-[350px] flex flex-col  card duration-300 rounded-lg overflow-hidden max-w-[266px]  border-2 border-bordercard dark:border-opacityorange hover:border-blueElzero dark:hover:border-orange hover:rotate-1 hover:scale-[1.01]  dark:bg-tograd bg-cardlight shadow-4xl"
            >
              <div className=" rounded-lg overflow-hidden max-h-[200px]">
                <img
                  src={item.imgUrl}
                  alt={`alt-${item.imgUrl}`}
                  className="w-full flex-grow max-h-full object-cover rounded-lg "
                />
              </div>
              <div className="box py-3 px-2 w-full">
                <h2 className=" text-titlelight dark:text-title lowercase  text-xl font-bold ">
                  {item.heading}
                </h2>
                <p className=" text-sub-title-light dark:text-subtitle text-sm my-3">
                  {item.paragraph}
                </p>

                <div className="flex justify-between p-1">
                  <div className="flex gap-x-3">
                    <div className="link">
                      <a
                        aria-label="githublink"
                        href={item.linkActiveUrl}
                        target="_blank"
                        className=" icon-link text-lg  duration-300 text-subtitle dark:text-sub-title-light hover:text-xl dark:hover:text-icon-hover hover:text-icon-hover-light "
                      />
                    </div>
                    <div className="git">
                      <a
                        aria-label="project on github"
                        target="_blank"
                        href={item.githubUrl}
                        className="icon-github-alt text-lg duration-300 text-subtitle dark:text-sub-title-light hover:text-xl dark:hover:text-icon-hover hover:text-icon-hover-light"
                      />
                    </div>
                  </div>
                  <a
                    aria-label="live Project"
                    target="_blank"
                    href={item.moreUrl}
                    className="arrow-link flex items-center gap-2 cursor-pointer text-secondery dark:text-seconderylight hover:text-blueElzero dark:hover:text-orange  duration-300 "
                  >
                    more
                    <span className="icon-arrow-right  group-hover:animate-pulse" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </motion.section>
    </main>
  );
}

export default Mainsection;
