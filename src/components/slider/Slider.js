import { useState } from "react";
import ReactSlider from "react-slider";

const Slider = (props) => {
  //Initial
  const { currentValue, setCurrentValue } = props;
  return (
    <ReactSlider
      className="customSlider"
      trackClassName="customSlider-track"
      thumbClassName="customSlider-thumb"
      defaultValue={0}
      max={10}
      value={currentValue}
      onChange={(value) => setCurrentValue(value)}
    />
  );
};

export default Slider;
