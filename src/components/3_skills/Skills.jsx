import { skillsData } from "./skillsData";
import "./skillsStyle.css";
import SectionTitle from "../ui/sectiontitle/SectionTitle";

const skills = () => {
  return (
    <>
      <SectionTitle title={"skills"} />
      <div className="wrapper">
        {skillsData.slice(0, skillsData.length / 2).map((skill, i) => {
          const { id, name, url } = skill;
          return (
            <div
              key={id}
              className={`itemLeft item${i + 1} `}
              style={{
                animationDelay: `calc(30s / ${
                  skillsData.slice(0, skillsData.length / 2).length / 2
                } * (${skillsData.slice(0, skillsData.length / 2).length} -  ${
                  i + 1
                }) * -1)`,
                left: `max(calc(200px * ${
                  skillsData.slice(0, skillsData.length / 2).length
                } )`,
              }}
            >
              <img src={url} alt={name} />
            </div>
          );
        })}
      </div>

      <div className="wrapper">
        {skillsData.slice(skillsData.length / 2).map((skill, i) => {
          const { id, name, url } = skill;
          return (
            <div
              key={id}
              className={`itemRight item${i + 1 + skillsData.length / 2} `}
              style={{
                animationDelay: `calc(30s / ${skillsData.length / 2} * (${
                  skillsData.length / 2
                } -  ${i + 1}) * -1)`,
                right: ` max(calc(300px * ${
                  skillsData.length / 2
                }), calc(100% + 200px))`,
              }}
            >
              <img src={url} alt={name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default skills;

// import { skillsData } from "./skillsData";
// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
//   wrap,
// } from "framer-motion";

// function ParallaxText({ children, baseVelocity = 100 }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   return (
//     <div className="parallax overflow-hidden">
//       <motion.div className="scroller" style={{ x }}>
//         <span className="flex gap-8">{children}</span>
//       </motion.div>
//     </div>
//   );
// }

// export default function Skills() {
//   const halfLength = Math.ceil(skillsData.length / 2);

//   return (
//     <div className="flex flex-col gap-10">
//       {/* First row of skills */}
//       <ParallaxText baseVelocity={-5}>
//         {skillsData.slice(0, halfLength).map((skill, i) => (
//           <div key={i} className="inline-block text-center">
//             <img
//               src={`/skills/svg/${skill}.svg`}
//               alt={skill}
//               className="w-[100px] mx-4"
//             />
//             <p className="text-center">{skill}</p>
//           </div>
//         ))}
//       </ParallaxText>

//       {/* Second row of skills */}
//       <ParallaxText baseVelocity={5}>
//         {skillsData.slice(halfLength).map((skill, i) => (
//           <div key={i} className="inline-block text-center">
//             <img
//               src={`/skills/svg/${skill}.svg`}
//               alt={skill}
//               className="w-[100px] mx-4"
//             />
//             <p className="text-center">{skill}</p>
//           </div>
//         ))}
//       </ParallaxText>
//     </div>
//   );
// }
