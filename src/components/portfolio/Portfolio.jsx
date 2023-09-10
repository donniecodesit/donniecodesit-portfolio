import portfolioData from "../../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "../Title";
import { motion } from "framer-motion";
import { motionCont3, motionChild2 } from "../../styles/motionObjects";

function Portfolio() {
  return (
    <motion.div
      className="flex flex-col items-center"
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
      <Title>A Few Of My Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={motionCont3}
        >
          {portfolioData.map((project) => (
            <motion.div variants={motionChild2} key={project.title}>
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
