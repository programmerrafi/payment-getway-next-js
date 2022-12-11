import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { Spring, config } from "react-spring";

function CircleProgress() {
  //   const percentage = 66;
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
      }}
    >
      <Spring
        from={{ percentage: 0 }}
        to={{ percentage: 100 }}
        config={config.molasses}
      >
        {({ percentage }) => {
          console.log("percentage: ", percentage);
          const roundedPercentage = Number(
            Math.round(percentage?.animation?.from)
          );
          console.log("roundedPercentage: ", percentage?.animation?.from);
          return (
            <CircularProgressbar
              percentage={roundedPercentage}
              text={`${roundedPercentage}%`}
              styles={{
                path: {
                  transform: "rotate(180deg)",
                  transformOrigin: "center center",
                  strokeLinecap: "butt",
                  stroke:
                    percentage?.animation?.from >= 70 ? "#bd2327" : "blue",
                },
                trail: {
                  strokeWidth: 0,
                },
                text: {
                  fontSize: 22,
                  fontWeight: 800,
                  animation: "fadein 2s",
                  fill: percentage?.animation?.from >= 70 ? "#bd2327" : "blue",
                },
              }}
            />
          );
        }}
      </Spring>
    </div>
  );
}

export default CircleProgress;
