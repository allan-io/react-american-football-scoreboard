//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import Score from "./components/Score";
import Button from "./components/Button"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [ homeScore, setHomeScore ] = useState(0)
  const [ awayScore, setAwayScore ] = useState(0)



  return (
    
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Score teamName="Lions" className="home" score={homeScore}/>
          <div className="timer">00:03</div>
          <Score teamName="Tigers" className="away" score={awayScore}/>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <Button className="homeButtons__fieldGoal" score={homeScore} label="Home Field Goal" points={3} setter={setHomeScore}/>
          <Button className="homeButtons__touchdown" score={homeScore} label="Home Field Touchdown" points={7} setter={setHomeScore} />
        </div>
        <div className="awayButtons">
          <Button className="awayButtons__fieldGoal" score={awayScore} label="Away Field Goal" points={3} setter={setAwayScore} />
          <Button className="awayButtons__touchdown" score={awayScore} label="Away Touchdown" points={7} setter={setAwayScore} />
        </div>
      </section>
    </div>
  );
}

export default App;
