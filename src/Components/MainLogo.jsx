import React from 'react';

const LogoComponent = ({ logo, altText, className }) => {
  return (
    <img src={logo} alt={altText} className={className} />
  );
};

export default LogoComponent;