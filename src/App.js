import React from 'react';
import './App.css';
import Timer from "./timer";
// import Timer from "./timer-class";

function App() {
    const [isCounting, setConter] = React.useState(false);
    const handleClick = (event) => {
        setConter(!isCounting)
    }
  return (
    <div className="main">
      <div className="wrapper">
        <div className="btn" onClick={handleClick}>
            <div className={isCounting ? 'pause' : 'play'}></div>
        </div>
          {isCounting && <Timer/>}
      </div>
    </div>
  );
}

export default App;
