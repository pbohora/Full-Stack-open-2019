import React, { useState } from "react";
import ReactDOM from "react-dom";

import Statistics from "./components/statistics";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  const handleGoodClick = () => setGood(good + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={total}
        average={average}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
