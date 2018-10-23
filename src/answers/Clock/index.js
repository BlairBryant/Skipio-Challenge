import "./styles.scss";
import React from "react";
import withClockDegrees from "./withClockDegrees";

const Clock = ({ degrees: { hours, minutes, seconds } }) => (
  <div className="clock">
    {/* Change this component however you'd like */}
    Open <code>/src/answers/Clock/index.js</code> to start
    <ul>
      <li>
        Hours: {hours}
        deg
      </li>
      <li>
        Minutes: {minutes}
        deg
      </li>
      <li>
        Seconds: {seconds}
        deg
      </li>
    </ul>
    <div className='clockCircle'>
      <div className='hourHand' style={{transform: `rotate(${hours}deg)`}}></div>
      <div className='minuteHand' style={{transform: `rotate(${minutes}deg)`}}></div>
      <div className='secondHand' style={{transform: `rotate(${seconds}deg)`}}></div>
    </div>
  </div>
);

export default withClockDegrees(Clock);
