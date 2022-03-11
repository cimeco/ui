import React from "react";
import PropTypes from "prop-types";

const SectionContainer = ({
  children,
  defaultClasses,
  classes,
  containerClasses,
  featureId
}) => {
  return (
    <section className={`${defaultClasses} ${classes}`} id={featureId || ""}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.any,
  defaultClasses: PropTypes.string,
  classes: PropTypes.string,
  containerClasses: PropTypes.string,
  featureId: PropTypes.string
};

SectionContainer.defaultProps = {
  defaultClasses: "clearfix mb1",
  containerClasses: "container"
};

export default SectionContainer;
