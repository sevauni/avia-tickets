import './App.scss';


//Components
import Navigation from './Components/Navigation/Navigation'
import SearchBar from './Components/SearchBar/SearchBar'
import Results from './Components/Results/Results';


//Assets
import imgBG from './assets/img/search-bg.png';
import videoBG from './assets/search-vbg.webm';







export default function App() {
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
        <SearchBar />
        <Results />
      </div>
      <div className="footer"></div>
    </>
  )
}