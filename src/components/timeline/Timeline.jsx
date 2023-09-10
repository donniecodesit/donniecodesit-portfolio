import timelineData from "../../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "../Title";
import { motion } from "framer-motion";

function Timeline() {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center my-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="w-full md:w-7/12">
        <Title>My Experiences</Title>
        <div className="flex flex-col">
          {timelineData.map((item) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Timeline;
