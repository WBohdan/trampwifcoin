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

function App() {
  return (
    <div>
      <HeaderWidget />
      <MarketCapInfoWidget />
      <PartnersWidget />
      <AboutWidget />
      <TokenomicsWidget />
      <RoadmapWidget />
      <FooterWidget />
    </div>
  );
}

export default App;
