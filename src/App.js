import React, { useState } from 'react';
import './App.css';
import Slider from './Components/Slider.jsx';

function App() {
  const [showSlider, setShowSlider] = useState(false);

  const handleClick = () => {
    setShowSlider(!showSlider); 
  };

  return (
    <div className="App container">
      
      <button className="btn btn-dark" onClick={handleClick}>Slider</button>
      {showSlider && <Slider />} 
    </div>
  );
}

export default App;
