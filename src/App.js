import React from "react";
import {useState} from "react";

function App() {

  const [text, setText] = useState("");
  
  return (
    <div className="app">
      <div>입력 값: <span>{text}</span></div>
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
    </div>
  );
}

export default App;
