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
        title="Изменяемый (вводите числа через запятую). Цветовая схема fullColorsCols"
      />
      <Canvas colorTheme='fullColorsCols' 
        colsSpacing={20} 
        width={600} 
        height={300}
        statistics={[1,2,3,10,5]}
        title="Изменяемый пустой (просто нет начальных данных) Цветовая схема fullColorsCols"
      />
      <Canvas colorTheme='gradient' 
        colsSpacing={20} 
        width={600} 
        height={300}
        statistics={[1,2,3,10,5]}
        changeble={true}
        title="Не изменяемый (просто скрыт инпут) Цветовая схема gradient"
      />
    </div>
  );
}

export default App;
