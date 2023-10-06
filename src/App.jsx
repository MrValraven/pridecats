import { useState } from "react";
import CatsColored from "./CatsColored";
import CatsNonBinary from "./assets/catsNonBinary.svg";
import InvertedCats from "./assets/invertedCatsColored.svg";
import CatVariant3Bi from "./assets/gatos_variant3_bi.svg";
import CatVariant3Pan from "./assets/gatos_variant3_pan.svg";
import CatVariant5Bi from "./assets/gatos_variant5_bi.svg";
import CatVariant5Pan from "./assets/gatos_variant5_pan.svg";
import "./App.css";

const flagColors = {
  bisexual: {
    primaryCatBody: {
      top: "#d70370",
      middle: "#9a4f97",
      bottom: "#0138a9",
    },
    primaryCatHand: {
      top: "#d70370",
      middle: "#9a4f97",
      bottom: "#0138a9",
    },
    secondaryCatBody: {
      top: "#d70370",
      middle: "#9a4f97",
      bottom: "#0138a9",
    },
    secondaryCatHand: {
      top: "#d70370",
      middle: "#9a4f97",
      bottom: "#0138a9",
    }
  },
  pansexual: {
    primaryCatBody: {
      top: "#fe218d",
      middle: "#fed900",
      bottom: "#21b0fe",
    },
    primaryCatHand: {
      top: "#fe218d",
      middle: "#fed900",
      bottom: "#21b0fe",
    },
    secondaryCatBody: {
      top: "#fe218d",
      middle: "#fed900",
      bottom: "#21b0fe",
    },
    secondaryCatHand: {
      top: "#fe218d",
      middle: "#fed900",
      bottom: "#21b0fe",
    }
  }
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
    leftCatSkinColor: "#DA70D6",
    leftCatGlasses: "#2f2e35",
    leftCatDyedHair: "#6280c3",
    leftCatPantsAndPiercing: "#987997",
    rightCatSkinColor: "#e4a301",
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
            <CatsColored
              catColor={catColor}
              flagColor={flagColor}
            />
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
              <option value="variant4">Sunflower</option>
              <option value="variant5">Pastel dream</option>
            </select>
          </div>
        </div>
      </section>
      <h1>Variant2: Non Binary</h1>
      <section style={{ backgroundColor: backgroundColor }} className="nonBinary">
        <img src={CatsNonBinary} alt="" />
        <img src={InvertedCats} alt="" />
      </section>
      <h1>Variant3: Sunny Side Up</h1>
      <section style={{ backgroundColor: backgroundColor }} className="nonBinary">
        <img src={CatVariant3Bi} alt="" />
        <img src={CatVariant3Pan} alt="" />
      </section>
      <h1>Variant5: Pastel Dream</h1>
      <section style={{ backgroundColor: backgroundColor }} className="nonBinary">
        <img src={CatVariant5Bi} alt="" />
        <img src={CatVariant5Pan} alt="" />
      </section>
    </>
  );
}

export default App;
