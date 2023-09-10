import skillsData from "../data/skills";
import Title from "./Title";
import { motion } from "framer-motion";
import { motionCont1, motionChild2 } from "../styles/motionObjects";

function Skills() {
  return (
    <motion.div
      className="flex flex-col my-10 mx-auto justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Title>My Skills, Libraries, and Tools</Title>
      <motion.div
        className="flex flex-wrap w-7/12 justify-center gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={motionCont1}
      >
        {skillsData.map(({ name, type }) => (
          <motion.div variants={motionChild2} key={name}>
            <span
              className={`inline-block px-2 py-1 font-semibold border-2 dark:text-white rounded-md
            ${type == "envi" && " border-red-500"}
            ${type == "lang" && "border-orange-500"}
            ${type == "fram" && "border-yellow-500"}
            ${type == "lib" && "border-green-500"}
            ${type == "dbsys" && "border-blue-500"}
            ${type == "tool" && "border-violet-500"}
            ${type == "os" && "border-indigo-500"}`}
            >
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
