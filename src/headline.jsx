import PropTypes from "prop-types";
import React, { Fragment } from "react";

const Headline = ({ classes, level, linkClasses, text, url, targetBlank, rel }) => {
  const HLevel = `h${level}`;  
  return (
    <HLevel className={classes}>
      {url ? (
        <a
          href={url}
          className={linkClasses}
          title={text}
          target={targetBlank ? "_blank" : undefined}
          rel={rel ? rel : undefined }
        >
          {text}
        </a>
      ) : (
        <Fragment>{text}</Fragment>
      )}
    </HLevel>
  );
};

Headline.propTypes = {
  classes: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  linkClasses: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  targetBlank: PropTypes.bool,
  rel: PropTypes.string
};

Headline.defaultProps = {
  level: 2,
  targetBlank: false
};

export default Headline;
