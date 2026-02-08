import Header from "./components/Header";
import bgHomeDesktop from "./assets/home/background-home-desktop.jpg";
import bgDestinationDesktop from "./assets/destination/background-destination-desktop.jpg";
import bgCrewDesktop from "./assets/crew/background-crew-desktop.jpg";
import bgTechnologyDesktop from "./assets/technology/background-technology-desktop.jpg";

import bgHomeTablet from "./assets/home/background-home-tablet.jpg";
import bgDestinationTablet from "./assets/destination/background-destination-tablet.jpg";
import bgCrewTablet from "./assets/crew/background-crew-tablet.jpg";
import bgTechnologyTablet from "./assets/technology/background-technology-tablet.jpg";

import bgHomeMobile from "./assets/home/background-home-mobile.jpg";
import bgDestinationMobile from "./assets/destination/background-destination-mobile.jpg";
import bgCrewMobile from "./assets/crew/background-crew-mobile.jpg";
import bgTechnologyMobile from "./assets/technology/background-technology-mobile.jpg";
import { useState } from "react";
import Home from "./components/Home";
import Destination from "./components/Destination"
import CrewPage from "./components/CrewPage";
import Technology from "./components/Technology";

const desktopBackgrounds = {
  home: bgHomeDesktop,
  destination: bgDestinationDesktop,
  crew: bgCrewDesktop,
  technology: bgTechnologyDesktop,
};
const tabletBackgrounds = {
  home: bgHomeTablet,
  destination: bgDestinationTablet,
  crew: bgCrewTablet,
  technology: bgTechnologyTablet,
};
const mobileBackgrounds = {
  home: bgHomeMobile,
  destination: bgDestinationMobile,
  crew: bgCrewMobile,
  technology: bgTechnologyMobile,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [screenSize, setScreenSize] = useState("desktop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavClick(name) {
    setCurrentPage(name);
  }
  function handleExploreButton() {
    setCurrentPage("destination")
  }

  function handleResize() {
    if (window.innerWidth < 640) {
      setScreenSize("mobile");
    } else if (window.innerWidth < 1280) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  }

  const getBackgroundImage = () => {
    window.addEventListener("resize", handleResize);
    const backgrounds = {
      mobile: mobileBackgrounds,
      tablet: tabletBackgrounds,
      desktop: desktopBackgrounds,
    };
    return backgrounds[screenSize][currentPage];
  };
  return (
    <div
      className={`app bg-cover bg-no-repeat relative overflow-hidden ${isMenuOpen ? "overscroll-none" : ""} transition-all duration-300`}
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
      }}
    >
      <Header selectedNavItem={currentPage} onNav={handleNavClick} isHamOpen={isMenuOpen} onOpenHamMenu={setIsMenuOpen}  />
      {currentPage === "home" && <Home onExplore={handleExploreButton}/>}
      {currentPage === "destination" && <Destination/>}
      {currentPage === "crew" && <CrewPage />}
      {currentPage === "technology" && <Technology />}
    </div>
  );
}

export default App;
