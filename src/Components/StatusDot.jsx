
import React from 'react';
import PropTypes from 'prop-types';

const StatusDot = ({ color }) => {
  let colorClass;
  switch (color) {
    case 'green':
      colorClass = 'bg-green-500';
      break;
    case 'orange':
      colorClass = 'bg-orange-500';
      break;
    case 'red':
      colorClass = 'bg-red-500';
      break;
    default:
      colorClass = '';
  }

  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${colorClass}`}></span>;
};

StatusDot.propTypes = {
  color: PropTypes.string.isRequired,
};

export default StatusDot;
