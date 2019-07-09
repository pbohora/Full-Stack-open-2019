import React, { useState } from "react";
import ReactDOM from "react-dom";

import Statistics from "./components/statistics";
import Button from "./components/button";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positivePercentage = (good / all) * 100;

  const handleGoodClick = () => setGood(good + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutal" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />

      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
