import PropTypes from "prop-types";

PortfolioItem.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  stack: PropTypes.array,
  link: PropTypes.string,
};

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div
      className={`border-2 border-stone-900 dark:border-white rounded-md overflow-hidden ${
        link != "none" && "hover:border-purple-400 dark:hover:border-purple-400"
      }`}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={imgUrl}
          alt="portfolio"
          className={`w-full h-36 md:h-48 object-cover ${
            link != "none" && "cursor-pointer"
          }`}
        />
      </a>
      <div className="w-full p-4">
        <h3 className="dark:text-white text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white dark:text-white rounded-md"
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
