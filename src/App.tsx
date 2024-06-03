import { useState } from "react";
import RocketAnimation from "./components/RocketAnimation";
import {
  HeaderWidget,
  TokenomicsWidget,
  JustRelaxWidget
} from "./modules/header";
import "./styles/styles.scss";

function App() {
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);

  return (
    <div>
      <HeaderWidget />
      <TokenomicsWidget />
      <JustRelaxWidget setShowRocketAnimation={setShowRocketAnimation} />
      {/* <StickerPacksWidget /> */}
      {/* <TokenomicsWidget />
      <JustRelaxWidget />
      <FooterWidget /> */}

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
