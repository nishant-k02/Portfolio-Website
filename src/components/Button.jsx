import PropTypes from "prop-types";

const Inner = ({ label, icon }) => (
  <>
    {label}
    {icon ? (
      <span className="material-symbols-rounded" aria-hidden="true">
        {icon}
      </span>
    ) : null}
  </>
);

Inner.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

const makeButton = (variant) => {
  const Button = ({ href, target = "_self", label, icon, classes = "", download }) => {
    const className = `btn ${variant} ${classes}`.trim();
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          download={download}
          className={className}
        >
          <Inner label={label} icon={icon} />
        </a>
      );
    }
    return (
      <button className={className}>
        <Inner label={label} icon={icon} />
      </button>
    );
  };

  Button.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  return Button;
};

const ButtonPrimary = makeButton("btn-primary");
const ButtonOutline = makeButton("btn-outline");

export { ButtonPrimary, ButtonOutline };
