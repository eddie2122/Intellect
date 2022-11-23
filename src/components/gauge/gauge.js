import React from "react";
import "./gauge.css";

//Gauge Specifications
const gaugeWidth = 220;
const gaugeHeight = 100;
const gaugeContentWidth = gaugeWidth;
const gaugeBarsNb = 10;
const gaugeBarWidth = gaugeContentWidth / gaugeBarsNb;
const gaugeBarMargin = 3;
const gaugeBarRadius = 100;

//Gauge Style
const styles = {
  container: {
    position: "relative",
    height: `100%`,
    transform: "rotate(270deg)",
    backgroundColor: "#325d6e",
  },
  barsContainer: {
    // width: "100%",
    height: `${gaugeHeight}px`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  barContainer: {
    width: `${gaugeBarWidth}px`,
    height: `${gaugeHeight - 10}px`,
    paddingLeft: `${gaugeBarMargin}px`,
    paddingRight: `${gaugeBarMargin}px`,
    display: "flex",
    alignItems: "center",
  },
  bar: {
    width: `${gaugeBarWidth - gaugeBarMargin * 2}px`,
    // backgroundColor: `#819da8`,
    zIndex: 1,
    paddingLeft: "10px",
    display: "flex",
  },
  barFirst: {
    // borderTopLeftRadius: `${50}%`,
    // borderBottomLeftRadius: `${50}%`,
  },
  barLast: {
    borderTopRightRadius: `${gaugeBarRadius}px`,
    borderBottomRightRadius: `${gaugeBarRadius}px`,
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    zIndex: 0,
  },
};

function Gauge({ percentage, setGaugeValue, gaugeValue }) {
  //Local state
  const percent10 = Math.round(percentage / gaugeBarsNb);
  const percentageArray = [...Array(percent10).keys()];

  //Function
  const handleBarClick = (barClicked) => {
    setGaugeValue(barClicked * 10);
  };
  return (
    <>
      <div style={styles.container} className="text-white">
        {/* <img src={GaugeBg} style={styles.bg} /> */}
        <div style={styles.barsContainer} className="rectangle">
          <span style={{ transform: "rotate(90deg)" }}>low</span>
          {percentageArray.map((ele, index) => (
            <div
              style={styles.barContainer}
              onClick={() => handleBarClick(index)}
              className="cursor-pointer"
            >
              {index === 0 ? (
                <div
                  key={index}
                  style={{ ...styles.bar, height: index * 20 + 18 }}
                  className={` rounded-md mt-1 ${
                    gaugeValue / 10 < index ? "bg-[#819da8] " : "bg-[#ffffff]"
                  }`}
                />
              ) : index === gaugeBarsNb - 1 ? (
                <div
                  key={index}
                  style={{ ...styles.bar, height: index * 20 + 20 }}
                  className={`rounded-lg ${
                    gaugeValue / 10 < index ? "bg-[#819da8] " : "bg-[#ffffff]"
                  }`}
                />
              ) : (
                <div
                  key={index}
                  style={{ ...styles.bar, height: index * 20 + 20 }}
                  className={`rounded-lg ${
                    gaugeValue / 10 < index ? "bg-[#819da8] " : "bg-[#ffffff]"
                  }`}
                />
              )}
              {/* <div
                key={index}
                style={{ ...styles.bar, height: index * 20 + 20 }}
                className={`rectangle rounded-lg ${
                  gaugeValue / 10 < index ? "bg-[#819da8] " : "bg-[#ffffff]"
                }`}
              /> */}
            </div>
          ))}
        <span style={{ transform: "rotate(90deg)" }}>High</span>
        </div>
      </div>
      {/* {percentage}% - {percent10} bars */}
    </>
  );
}

export default Gauge;
