import { useState } from "react";
import CatsColored from "./CatsColored";
import "./App.css";

const flagColors = {
  bisexual: {
    top: "#d70370",
    middle: "#9a4f97",
    bottom: "#0138a9",
  },
  pansexual: {
    top: "#fe218d",
    middle: "#fed900",
    bottom: "#21b0fe",
  },
};

const catColors = {
  variant1: {
    leftCatSkinColor: "#9f70bc",
    leftCatGlasses: "#9f70bc",
    leftCatDyedHair: "#488d86",
    leftCatPantsAndPiercing: "#7975a6",
    rightCatSkinColor: "#e244d6",
    rightCatAccents: "#201e3f",
    rightCatShoelacesTongueEyeAccent: "#55388c",
    rightCatBoots: "#091b28",
    catEarsAndBagHeart: "#c058e0",
    catsEyesClothingAndBag: "#e4ace8",
    bodiesOutline: "#001419",
    flagsOutline: "#000000",
  },
  variant2: {
    leftCatSkinColor: "#9f70bc",
    leftCatGlasses: "#9f70bc",
    leftCatDyedHair: "#488d86",
    leftCatPantsAndPiercing: "#7975a6",
    rightCatSkinColor: "#e244d6",
    rightCatAccents: "#201e3f",
    rightCatShoelacesTongueEyeAccent: "#55388c",
    rightCatBoots: "#091b28",
    catEarsAndBagHeart: "#c058e0",
    catsEyesClothingAndBag: "#e4ace8",
    bodiesOutline: "#001419",
    flagsOutline: "#000000",
  },
};

function App() {
  const [flagColor, setFlagColor] = useState(flagColors.bisexual);
  const [primaryColor, setPrimaryColor] = useState("#DD5555");
  const [secondaryColor, setSecondaryColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <section>
      <h1>Pride cats color schemes</h1>
      <div className="container">
        <div className="drawing">
          <CatsColored flagColor={flagColor} />
        </div>
        <div className="inputs">
          <div className="input">
            <label htmlFor="">Primary</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
            <p>{primaryColor}</p>
          </div>
          <div className="input">
            <label htmlFor="">Secondary</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
            <p>{secondaryColor}</p>
          </div>
          <div className="input">
            <label htmlFor="">Background</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
            <p>{backgroundColor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
