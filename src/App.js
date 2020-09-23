import React from "react";

function App() {
  return (
    <div className="page">
      <div className="header border">
        <div className="container horizontal">
          <div className="m1 p1 border">1</div>
          <div className="m1 p1 border">2</div>
          <div className="m1 p1 border">3</div>
        </div>
      </div>
      <div className="body center p2">
        <div className="container top horizontal">
          <div className="container vertical">
            <div className="m1 p2 border">App</div>
            <div className="m1 p2 border">App</div>
            <div className="m1 p2 border">App</div>
          </div>
          <div className="m1 p2 border">App</div>
          <div className="m1 p2 border">App</div>
        </div>
        <div className="container bottom horizontal">
          <div className="container vertical">
            <div className="m1 p2 border">App</div>
            <div className="m1 p2 border">App</div>
            <div className="m1 p2 border">App</div>
          </div>
          <div className="m1 p2 border">App</div>
          <div className="m1 p2 border">App</div>
        </div>
      </div>
    </div>
  );
}

export default App;
