// src/App.js
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

// Counter 组件
function Counter() {
  const [count, setCount] = useState(0); // 状态 Hook

  return (
    <div style={{ marginTop: "20px" }}>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
    </div>
  );
}

// App 组件（根组件）
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* 在 App 中渲染 Counter */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
