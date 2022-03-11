import PropTypes from "prop-types";
import React from "react";
import moment from "moment/moment";

const Timestamp = ({
  date,
  name,
  formatString,
  timeZone = "America/Argentina/Buenos_Aires"
}) => {
  moment.locale("es");
  const displayDate = moment(date).tz(timeZone);
  return (
    <time itemProp={name} dateTime={displayDate.format()}>
      {displayDate.format(formatString)}
    </time>
  );
};

Timestamp.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(Date)]),
  name: PropTypes.string,
  formatString: PropTypes.string.isRequired,
  timeZone: PropTypes.string
};

export default Timestamp;
