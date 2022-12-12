import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import ChangingProgressProvider from "./ChangingProgressProvider";

function CircleProgress({ bWith, pNumber }) {
  //   const percentage = 66;
  return (
    <ChangingProgressProvider values={[0, pNumber]}>
      {(percentage) => (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={bWith}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "20px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `#fff`,
            textColor: "#fff",
            trailColor: "#163c6e",
            backgroundColor: "#fff",
          })}
        />
      )}
    </ChangingProgressProvider>
  );
}

export default CircleProgress;
