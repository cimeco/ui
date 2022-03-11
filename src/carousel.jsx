import PropTypes from "prop-types";
import React from "react";

const Carousel = ({
  className,
  elementId,
  width,
  height,
  layout,
  type,
  nextLabel,
  previousLabel,
  countFormat,
  withLightbox,
  loop,
  delay,
  onAction,
  children
}) => {
  return (
    <amp-carousel
      width={width}
      height={height}
      layout={layout}
      type={type}
      data-next-button-aria-label={nextLabel}
      data-prev-button-aria-label={previousLabel}
      data-button-count-format={countFormat}
      lightbox={withLightbox}
      loop={loop ? "loop" : ""}
      delay={delay}
      on={onAction}
      className={className}
      id={elementId}
    >
      {children}
    </amp-carousel>
  );
};

Carousel.propTypes = {
  elementId: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])])
    .isRequired,
  height: PropTypes.number.isRequired,
  layout: PropTypes.oneOf(["fixed-height", "responsive"]),
  type: PropTypes.oneOf(["carousel", "slides"]),
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
  countFormat: PropTypes.string,
  withLightbox: PropTypes.bool,
  loop: PropTypes.bool,
  delay: PropTypes.number,
  onAction: PropTypes.string,
  children: PropTypes.array
};

Carousel.defaultProps = {
  height: "auto",
  layout: "fixed-height",
  type: "carousel",
  withLightbox: true,
  loop: false
};

export default Carousel;
