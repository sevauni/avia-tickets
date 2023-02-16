import { useState } from 'react';
//import reactLogo from './assets/react.svg';
import './App.scss';

import Navigation from './Components/Navigation'


import imgBG from './assets/img/search-bg.png';
import videoBG from './assets/search-vbg.webm';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <video className="bg-video"
        playsInline
        autoPlay
        muted
        poster={imgBG}
        preload="metadata"
      >
        <source src={videoBG} type="video/webm" />
      </video>
      <div className="container">
        <Navigation />
        <div className="search-bar"></div>
        <div className="results"></div>
      </div>
      <div className="footer"></div>
    </>

  )
}

export default App
