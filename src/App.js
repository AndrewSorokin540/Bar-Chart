import React from 'react';
import './App.css';
import Canvas from './components/canvas';

function App() {
  return (
    <div className="App">
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={20} 
        width={600} 
        height={300}
        statistics={[1,2,3,10,5]}
      />
      <Canvas colorTheme='gradient' 
        colsSpacing={5} 
        width={500} 
        height={500}
        statistics={[25,77,15,84,135,62,83,14,]}
      />
      <Canvas colorTheme='gradient' 
        colsSpacing={5} 
        width={500} 
        height={500}
        statistics={[10,30,20]}
      />
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={5} 
        width={500} 
        height={500}
        statistics={[1,2,3,4,5,6,7,8,9,10]}
      />
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={5} 
        width={500} 
        height={500}
        statistics={[25,77,15,84,135,62,83,14,]}
      />
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={5} 
        width={500} 
        height={500}
        statistics={[10,30,20]}
      />

      <Canvas colorTheme='gradient' 
        colsSpacing={5} 
        width={350} 
        height={200}
        statistics={[25,77,15,84,135,62,83,14,]}
      />
      <Canvas colorTheme='gradient' 
        colsSpacing={5} 
        width={350} 
        height={200}
        statistics={[10,30,20]}
      />
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={5} 
        width={350} 
        height={200}
        statistics={[25,77,15,84,135,62,83,14,]}
      />
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={5} 
        width={350} 
        height={200}
        statistics={[10,30,20]}
      />
    </div>
  );
}

export default App;
