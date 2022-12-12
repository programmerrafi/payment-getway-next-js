import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import ChangingProgressProvider from "./ChangingProgressProvider";

function CircleProgress() {
  //   const percentage = 66;
  return (
    <ChangingProgressProvider values={[0, 80]}>
      {(percentage) => (
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      )}
    </ChangingProgressProvider>
  );
}

export default CircleProgress;
