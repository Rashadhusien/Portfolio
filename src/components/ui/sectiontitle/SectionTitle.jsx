// @ts-nocheck
import "./style.css";

import letters from "./lettersData";

const SectionTitle = (/** @type {any} */ title) => {
  const createTitle = ({ title }) => {
    const titleLetters = title
      .toLowerCase()
      .split("")
      .map((char, index) => {
        return letters[char] ? (
          <span key={index}>{letters[char]}</span>
        ) : (
          <span key={index}>{char}</span> // In case there's no matching letter, display the char as is
        );
      });
    return (
      <>
        <h1 className="w-[600px] text-nowrap flex flex-nowrap absolute">
          {titleLetters}
        </h1>
        <h1 className="w-[600px] text-nowrap flex flex-nowrap absolute section-title">
          {title}
        </h1>
      </>
    );
  };
  return (
    <section
      className="relative flex justify-center items-center -z-50 left-0 h-[200px] text-center"
      style={{ margin: " 80px" }}
    >
      {createTitle(title)}
    </section>
  );
};

export default SectionTitle;
