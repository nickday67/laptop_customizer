import React from "react";

const FeatureOption = props => {
  const { featureKey, index, item, optionName, updateFeature } = props;
  const selectedClass = item.name === optionName ? "feature__selected" : "";
  const featureClass = "feature__option " + selectedClass;

  return (
    <li key={featureKey + "_" + index} className="feature__item">
      <div
        className={featureClass}
        onClick={e => updateFeature(featureKey, item)}
      >
        {item.name}(
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(item.cost)}
        )
      </div>
    </li>
  );
};

export default FeatureOption;
