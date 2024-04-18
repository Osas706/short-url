import React from 'react';
import "./App.css";
import InputShortener from './component/InputShortener';
import Background from './component/Background';
import Result from './component/Result';

const App = () => {
  return (
    <div className='app'>
      <InputShortener />
      <Background />
      <Result />
    </div>
  )
}

export default App;
