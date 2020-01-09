import React from 'react';
import './App.css';
import Canvas from './components/canvas';

function App() {
  return (
    <div className="App">
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={20} 
        width={600} 
        height={600}
        statistics={[1,2,3,10,5]}
      />
      <Canvas colorTheme='gradient' 
        colsSpacing={20} 
        width={600} 
        height={600}
        statistics={[1,2,3,10,5]}
      />
    </div>
  );
}

export default App;
