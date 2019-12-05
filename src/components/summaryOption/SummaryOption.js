import React from "react";
import "./SummaryOption.css";

const SummaryOption = props => {
  const { option, specType } = props;
  return (
    <div className="summary__option" key={specType}>
      <div className="summary__option__label">{specType} </div>
      <div className="summary__option__value">{option.name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(option.cost)}
      </div>
    </div>
  );
};

export default SummaryOption;
