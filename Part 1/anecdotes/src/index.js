import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const DisplayAnecdotes = ({ anecdote, text, vote }) => {
  return (
    <div>
      <h2>{text}</h2>
      {anecdote}
      <p>has {vote} votes</p>
    </div>
  );
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [point, setPoint] = useState(
    Array.apply(null, new Array(props.anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    ) //creates a zero filled array of arbitary length
  );
  const highestVote = Math.max(...point);
  const highestVoteAnecnote = point.indexOf(highestVote);

  const handleNextAnecdotesClick = () => {
    const randomNumber = Math.floor(Math.random() * props.anecdotes.length);
    return setSelected(randomNumber);
  };

  const handleVoteClick = () => {
    const copyPoint = [...point];
    copyPoint[selected] += 1;
    return setPoint(copyPoint);
  };
  console.log(point);
  return (
    <div>
      <DisplayAnecdotes
        anecdote={props.anecdotes[selected]}
        text="Anecdote of the day"
        vote={point[selected]}
      />

      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleNextAnecdotesClick} text="next anecdotes" />

      <DisplayAnecdotes
        anecdote={props.anecdotes[highestVoteAnecnote]}
        text="Annecdote with most votes"
        vote={highestVote}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
