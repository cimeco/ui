import { useFusionContext } from "fusion:context";
import _ from "lodash";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import getImage from "../../../util/getImage";
import CImage from "../CImage";

const SectionSeparator = ({
  name,
  link,
  classes,
  logoImage,
  logoUrl,
  showLogo = false
}) => {
  const { arcSite, contextPath, deployment } = useFusionContext();
  return (
    <Fragment>
      <div className={classes.separator}>
        <hr className="color-inherit hr" />
      </div>
      {link || name ? (
        <h2 className={classes.title}>
          {!_.isEmpty(link) ? <a href={link}>{name}</a> : name}
          {showLogo && logoImage && !_.isEmpty(logoImage) && (
            <a href={logoUrl} target="_blank" rel="noreferrer">
              <CImage
                src={getImage(
                  arcSite,
                  contextPath,
                  deployment,
                  logoImage,
                  true
                )}
                width="150"
                ampLayout="responsive"
                height="150"
                figureClassName="section-logo"
              />
            </a>
          )}
        </h2>
      ) : null}
    </Fragment>
  );
};

SectionSeparator.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  classes: PropTypes.shape({
    separator: PropTypes.string,
    title: PropTypes.string
  }),
  logoImage: PropTypes.string,
  logoUrl: PropTypes.string,
  showLogo: PropTypes.bool
};

SectionSeparator.defaultProps = {
  classes: {
    separator: "mr1 ml1",
    title: "h2 boldbold m1 mb2"
  },
  showLogo: false
};

export default SectionSeparator;
