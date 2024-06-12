// modules
import {
  HeaderWidget,
  MarketCapInfoWidget,
  TokenomicsWidget,
  RoadmapWidget,
  PartnersWidget,
  AboutWidget,
  FooterWidget
} from "./widgets";

// styles
import "./styles/styles.scss";
import { JustRelaxWidget } from "./widgets/JustRelaxWidget";
import RocketAnimation from "./components/RocketAnimation";
import { useState } from "react";

function App() {
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);

  return (
    <div>
      <HeaderWidget />
      <MarketCapInfoWidget />
      <PartnersWidget />
      <AboutWidget />
      <TokenomicsWidget />
      <RoadmapWidget />
      <JustRelaxWidget setShowRocketAnimation={setShowRocketAnimation} />
      <FooterWidget />

      {showRocketAnimation && (
        <RocketAnimation
          showRocketAnimation={showRocketAnimation}
          setShowRocketAnimation={setShowRocketAnimation}
        />
      )}
    </div>
  );
}

export default App;
