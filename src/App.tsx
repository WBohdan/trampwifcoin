import { useState } from "react";
import RocketAnimation from "./components/RocketAnimation";

// modules
import {
  HeaderWidget,
  TokenomicsWidget,
  JustRelaxWidget,
  FooterWidget
} from "./modules/header/widgets";

// styles
import "./styles/styles.scss";

function App() {
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);

  return (
    <div>
      <HeaderWidget />
      <TokenomicsWidget />
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
