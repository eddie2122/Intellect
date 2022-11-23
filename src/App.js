import logo from "./logo.svg";
import "./App.css";
import { CircleSlider } from "react-circle-slider";
import { useState } from "react";
import Slider from "./components/slider/Slider";
import Gauge from "./components/gauge/gauge";

function App() {
  //Local State
  const [currentValue, setCurrentValue] = useState(2);
  const [gaugeValue, setGaugeValue] = useState(50);

  //Function
  const handleSliderChange = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="app p-10 md:flex md:justify-around">
      <div className="py-10 px-10 bg-[#325d6e]">
        <div className="flex justify-center">
          <div className="border-2 border-dashed border-[#496g  7c] p-4 rounded-full">
            <div className="textContainer">
              <span className="z-50">{currentValue}</span>
            </div>
            <CircleSlider
              value={currentValue}
              // size={260}
              width={560}
              max={10}
              knobRadius={0}
              progressWidth={10}
              circleWidth={10}
              // showTooltip={true}
              onChange={handleSliderChange}
              circleColor="#476b7c"
              progressColor="#fff"
              tooltipColor="#fff"
            />
          </div>
        </div>
        <div className="px-4 mt-4">
          <Slider
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </div>
      </div>
      <div
        className="md:py-40 p-24 mt-10 px-20 bg-[#325d6e]"
        // style={{ transform: "rotate(270deg)" }}
      >
        <Gauge
          percentage={50}
          setGaugeValue={setGaugeValue}
          gaugeValue={gaugeValue}
        />
      </div>
    </div>
  );
}

export default App;
