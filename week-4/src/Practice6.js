import React, { useState, useEffect } from "react";

const BarChart = ({points}) => {
  const barStyles = {
    height: "100px",
    width: "50px",
    border: "1px #ccc solid",
    position: "relative"
  };

  const fillStyles = {
    height: `${points}0px`,
    width: "50px",
    backgroundColor: "green",
    position: "absolute",
    bottom: "0",
    transition: "height .6s"
  };

  return (
    <div className="bar" style={barStyles}>
      <div className="fill" style={fillStyles} />
    </div>
  );
}

const Heading = props => {
  return(
    <h1>
      Points: {props.points}/{props.goal}
    </h1>
  );
}

const Controls = props => {
  if (props.points >= props.goal) {
    return <button onClick={props.resetPoints}>Start Over</button>;
  }

  return null;
};

const Practice6 = () => {
  const [points, setPoints] = useState(0);
  const [goal, setGoal] = useState(10);

  const addPoint = () => {
    setPoints(points + 1);
  };

  const resetPoints = () => {
    console.log( points );
    setPoints(0);
    console.log( points );
    setGoal(goal + 1); // Not really needed.
  };

  useEffect(() => {
    if (points >= goal) {
      return;
    }

    const timer = setTimeout(() => {
      console.log(`300ms Second Refresh!`);
      addPoint();
    }, 300);
    return () => clearInterval(timer);
  }, [points]);

  return (
    <div>
        {points < goal ? (
          <>
            <BarChart points={points} />
            <Heading points={points} goal={goal} />
          </>
        ) : (
          <h1 style={{ color: "green" }}>GOAL!!!</h1>
        )}

        <Controls
          points={points}
          goal={goal}
          addPoint={addPoint}
          resetPoints={resetPoints}
        />
      </div>
  );
};

export default Practice6;
