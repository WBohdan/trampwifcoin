import {
  HeaderWidget,
  StickerPacksWidget,
  TokenomicsWidget,
  JustRelaxWidget,
  FooterWidget
} from "./modules/header";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <HeaderWidget />
      <StickerPacksWidget />
      <TokenomicsWidget />
      <JustRelaxWidget />
      <FooterWidget />
    </div>
  );
}

export default App;
