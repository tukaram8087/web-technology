
import {greet} from "./greeting.js";

const sampleTimes = ["08:30", "12.49", "19:45"]  

console.log(" Test Results");
sampleTimes.forEach((time) => {
  const message = greet(time);
  console.log(` ${message}`);
});