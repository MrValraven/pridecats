import { useState } from "react";
import CatsColored from "./CatsColored";
import CatsNonBinary from "./assets/catsNonBinary.svg";
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


/* 

Whites
rgb(241, 242, 235)
#F4FFF8
#EFF2F1

Blues:
#4059ad

*/

const catColors = {
  variant1: {
    leftCatSkinColor: "#bb7e86",
    leftCatGlasses: "#d3abaa",
    leftCatDyedHair: "#6280c3",
    leftCatPantsAndPiercing: "#987997",
    rightCatSkinColor: "#f66a33",
    rightCatAccents: "#221116",
    rightCatShoelacesTongueEyeAccent: "#ee0782",
    rightCatBoots: "#040303",
    catEarsAndBagHeart: "#ec6b6d",
    catsEyesClothingAndBag: "#EFF2F1",
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
  variant3: {
    leftCatSkinColor: "#2f2e2e",
    leftCatGlasses: "#2f2e35",
    leftCatDyedHair: "#6280c3",
    leftCatPantsAndPiercing: "#987997",
    rightCatSkinColor: "#f66a33",
    rightCatAccents: "#221116",
    rightCatShoelacesTongueEyeAccent: "#ee0782",
    rightCatBoots: "#040303",
    catEarsAndBagHeart: "#ec6b6d",
    catsEyesClothingAndBag: "#fde3e3",
    bodiesOutline: "#001419",
    flagsOutline: "#000000",
  },
  variant4: {
    leftCatSkinColor: "#2f2e2e",
    leftCatGlasses: "#2f2e35",
    leftCatDyedHair: "#6280c3",
    leftCatPantsAndPiercing: "#987997",
    rightCatSkinColor: "#b97b5c",
    rightCatAccents: "#221116",
    rightCatShoelacesTongueEyeAccent: "#ee0782",
    rightCatBoots: "#040303",
    catEarsAndBagHeart: "#ec6b6d",
    catsEyesClothingAndBag: "#f1d3c8",
    bodiesOutline: "#001419",
    flagsOutline: "#000000",
  },
  variant5: {
    leftCatSkinColor: "#9d6152",
    leftCatGlasses: "#9d6152",
    leftCatDyedHair: "#f3d298",
    leftCatPantsAndPiercing: "#987997",
    rightCatSkinColor: "#f1c589",
    rightCatAccents: "#221116",
    rightCatShoelacesTongueEyeAccent: "#ee0782",
    rightCatBoots: "#040303",
    catEarsAndBagHeart: "#ec6b6d",
    catsEyesClothingAndBag: "#f1d3c8",
    bodiesOutline: "#001419",
    flagsOutline: "#000000",
  },
};

function App() {
  const [flagColor, setFlagColor] = useState(flagColors.bisexual);
  const [catColor, setCatColor] = useState(catColors.variant1);
  const [dyeColor, setDyeColor] = useState(catColors.variant1.leftCatDyedHair);
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [font, setFont] = useState("Modak");


  const changeFlagColor = (e) => {
    console.log(e.target.value);
    setFlagColor(flagColors[e.target.value]);
  };
  return (
    <>
      <section style={{ backgroundColor: backgroundColor }}>
        <div className="containerMid">
          <div className="drawing">
            <h2 className="slogan firstSlogan" style={{ fontFamily: font, color: catColor.catsEyesClothingAndBag }}>Wear your</h2>
            <CatsColored dyeColor={dyeColor} catColor={catColor} flagColor={flagColor} />
            <h2 className="slogan secondSlogan" style={{ fontFamily: font, color: catColor.catsEyesClothingAndBag }}>Colors</h2>
          </div>
          <div className="inputs">
            <label htmlFor="">Font:</label>
            <select value={font} name="" id="" onChange={(e) => setFont(e.target.value)}>
              <option value="Lilita One">Lilita</option>
              <option value="Modak">Modak</option>
              <option value="Rampart One">Rampart</option>
            </select>
            <label>Background color</label>
            <select value={backgroundColor} name="" id="" onChange={(e) => setBackgroundColor(e.target.value)}>
              <option value="#000000">Black</option>
              <option value="#FFFFFF">White</option>
            </select>
            <label>Hair color</label>
            <input value={dyeColor} type="color" onChange={(e) => setDyeColor(e.target.value)} />
            <label htmlFor="">Flag:</label>
            <select name="" id="" onChange={changeFlagColor}>
              <option value="bisexual">Bisexual</option>
              <option value="pansexual">Pansexual</option>
            </select>
            <label htmlFor="">Style:</label>
            <select
              name=""
              id=""
              onChange={(e) => setCatColor(catColors[e.target.value])}
            >
              <option value="variant1">Vintage Elegance</option>
              <option value="variant2">Fairy dust</option>
              <option value="variant3">Sunny Side Up</option>
              <option value="variant4">Variant 4</option>
              <option value="variant5">Pastel dream</option>
            </select>
          </div>
        </div>
      </section>
      <section className="nonBinary">
        <img src={CatsNonBinary} alt="" />
      </section>
    </>
  );
}

export default App;
