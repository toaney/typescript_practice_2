import React from 'react';
import Counter from './components/Counter';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      React TypeScript Practice
      <Counter title="TypeScript" subtitle="Typescript with types"/>
      <List title="List" items={["one", "two", "three"]} />
    </div>
  );
}

export default App;
