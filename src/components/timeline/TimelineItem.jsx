import PropTypes from "prop-types";

TimelineItem.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.string,
  details: PropTypes.array,
};

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md-flex-row relative border-l border-stone-400 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-900 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-500" />
        <div className="flex flex-wrap gap-1 flex-col items-left justify-start text-xs md:text-sm">
          <div className="flex justify-start gap-2">
            <span className="text-xs inline-block px-2 py-1 w-12 h-6 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
              {year}
            </span>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
              {title}
            </h3>
            <div className="my-1 text-sm font-normal text-stone-400 dark:text-stone-500">
              {duration}
            </div>
          </div>
          <div className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
            <ul className="list-disc ml-6">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </ol>
  );
}

export default TimelineItem;
