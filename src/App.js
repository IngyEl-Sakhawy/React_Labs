import React, { useState } from 'react';
import './App.css';
import Slider from './Components/Slider.jsx';
import Users from './Components/Users.jsx';
import Posts from './Components/Posts.jsx';

function App() {
  const [showSlider, setShowSlider] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  const handleClickSlider = () => {
    setShowSlider(!showSlider); 
  };

  const handleClickUsers = () => {
    setShowUsers(!showUsers);
  };

  const handleClickPosts = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div className="App container">
      
      <button className="btn btn-dark" onClick={handleClickSlider}>Slider</button>
      {showSlider && <Slider />} 
      <button className="btn btn-dark" onClick={handleClickUsers}>Users</button>
      {showUsers && <Users/>}
      <button className="btn btn-dark" onClick={handleClickPosts}>Posts</button>
      {showPosts && <Posts/>}
    </div>
  );
}

export default App;
