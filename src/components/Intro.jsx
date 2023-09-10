import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center text-center pt-20 pb-6"
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
      <div className="flex flex-col rounded-md w-4/12 lg:w-2/12 m-8">
        <img
          src="assets/personal_photo.png"
          alt="Donovan"
          className="border-solid border-grey-400 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
          Donovan Laws
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Software Engineer | Web Developer{" "}
        </p>
        <p className="text-md max-w-xl mb-6 font-bold">
          Hello, and welcome! I am a Full-Stack Web Developer who is comfortable
          working in both front-end and back-end applications, using a handful
          of the skills you may see below in some of my top projects. I enjoy
          creating, organizing, troubleshooting, problem-solving, and improving
          code as it is worked on. I thrive on experimenting with challenges,
          especially when it involves learning something new! I am currently
          seeking a new role, please get in touch with me if I can fulfill
          something for you!
        </p>
      </div>
    </motion.div>
  );
}

export default Intro;
