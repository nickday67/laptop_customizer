import React from "react";

const Feature = props => {
  const { featureKey, options } = props;
  return (
    <div className="feature" key={featureKey}>
      <div className="feature__name">{featureKey}</div>
      <ul className="feature__list">{options}</ul>
    </div>
  );
};

export default Feature;
