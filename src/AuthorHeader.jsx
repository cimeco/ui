import { useFusionContext } from "fusion:context";
import getProperties from "fusion:properties";
import _ from "lodash";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import minimizeAuthor from "../../util/minimizeAuthor";
import CImage from "./CImage";
import Resizer from "./Resizer";

const AuthorHeader = ({ author, placeholder = undefined }) => {
  const _author = minimizeAuthor(author);
  const { arcSite } = useFusionContext();
  const properties = getProperties(arcSite);
  const imageResizedUrl =
    // eslint-disable-next-line no-nested-ternary
    !_.isEmpty(_author.image)
      ? Resizer.resize(
          _author.image,
          {
            width: 300,
            height: 300
          },
          properties.services.thumbor.url
        )
      : placeholder;

  const socialLinks = _author.social_links
    .filter(link => {
      return link.url && link.url !== "";
    })
    .map(link => {
      const links = {
        email: () => {
          return link.url ? `mailto:${link.url}` : undefined;
        },
        twitter: () => {
          return link.url && link.url.includes("https://twitter.com/@")
            ? link.url
            : `https://twitter.com/@${link.url}`;
        },
        facebook: () => {
          return link.url && link.url.includes("https://www.facebook.com/")
            ? link.url
            : `https://www.facebook.com/${link.url}`;
        },
        youtube: () => {
          return link.url && link.url.includes("https://www.youtube.com/c/")
            ? link.url
            : `https://www.youtube.com/c/${link.url}`;
        },
        instagram: () => {
          return link.url && link.url.includes("https://www.instagram.com/")
            ? link.url
            : `https://www.instagram.com/${link.url}`;
        },
        default: () => {
          return link.url;
        }
      };

      return { ...link, url: (links[link.site] || links.default)() };
    });
  return (
    <Fragment>
      <div className="author flex">
        {imageResizedUrl ? (
          <div className="col col-3 col-md-2 author-image">
            <CImage
              src={imageResizedUrl}
              alt={_author.byline}
              width="300"
              ampLayout="responsive"
              height="300"
            />
          </div>
        ) : (
          ""
        )}
        <div className="col col-9 col-md-10 author-bio">
          <h1 className="m0 boldbold">{_author.byline}</h1>
          {socialLinks.length > 0 ? (
            <ul className="author_social list-reset m0 ml2 mn0">
              {socialLinks.map(link => {
                return (
                  <li key={link.site}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link.site}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
          {!_.isEmpty(_author.bio) ? (
            <p className="author-desc">{_author.bio}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

AuthorHeader.propTypes = {
  author: PropTypes.object,
  placeholder: PropTypes.string
};

export default AuthorHeader;
