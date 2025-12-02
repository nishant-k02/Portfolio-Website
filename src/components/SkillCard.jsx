import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={`relative p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group ${classes}`}
    >
      <div className="flex items-center gap-3">
        <figure className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-2 group-hover:from-blue-100 group-hover:to-indigo-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-indigo-900/30 transition-all duration-300">
          <img src={imgSrc} width={32} height={32} alt={label} className="w-full h-full object-contain" />
        </figure>

        <div className="flex-1">
          <h3 className="text-zinc-900 dark:text-zinc-50 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{label}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
