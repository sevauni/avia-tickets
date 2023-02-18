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
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
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