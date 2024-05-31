import React from "react";
import PropTypes from "prop-types";
import ConditionalWrap from "./conditional-wrap";

const Headline = ({
  classes,
  level,
  linkClasses,
  text,
  spanText,
  url,
  targetBlank,
  rel,
}) => {
  const HLevel = `h${level}`;

  const HeadlineText = () => {
    return (
      <>
        {spanText ? <span>{spanText} </span> : null}
        {text}
      </>
    );
  };

  return (
    <HLevel className={classes}>
      {url ? (
        <ConditionalWrap
          condition={targetBlank}
          wrap={(children) => {
            return (
              <a
                href={url}
                className={linkClasses}
                title={text}
                target="_blank"
                rel={`noreferrer ${rel}`}
              >
                {children}
              </a>
            );
          }}
          wrapElse={(children) => {
            return (
              <a href={url} className={linkClasses} title={text} rel={rel}>
                {children}
              </a>
            );
          }}
        >
          <HeadlineText />
        </ConditionalWrap>
      ) : (
        <HeadlineText />
      )}
    </HLevel>
  );
};

Headline.propTypes = {
  classes: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  linkClasses: PropTypes.string,
  text: PropTypes.string.isRequired,
  spanText: PropTypes.string,
  url: PropTypes.string,
  targetBlank: PropTypes.bool,
  rel: PropTypes.string,
};

Headline.defaultProps = {
  level: 2,
  targetBlank: false,
};

export default Headline;
