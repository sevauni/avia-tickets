import './App.scss';


//Components
import Navigation from './Components/Navigation/Navigation'
import SearchBar from './Components/SearchBar/SearchBar'
import Results from './Components/Results/Results';


//Assets
import imgBG from './assets/img/search-bg.png';
import videoBG from './assets/search-vbg.webm';


//Libraries
import CookieConsent from "react-cookie-consent";






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

      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#8ea5a0",color:"#081158",fontWeight:"bold" }}
        buttonStyle={{ color: "#F2ECFF", fontSize: "1rem",background:"#081158" }}
        expires={150}
        //debug={true}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      <div className="container">
        <Navigation />
        <SearchBar />
        {
          true
            ? <Results />
            : null
        }
      </div>
      <div className="footer"></div>
    </>
  )
}