import ColorPickerContainer from "../components/ColorPickerContainer";
import Header from "../components/Header";
import { PainterContext } from "../contexts/PainterContext";
import { useState } from "react";
import Canvas from "../components/Canvas";
import CanvasLib from "../libs/CanvasLib";

export default function Home() {
  //selected color from color picker
  //set black color as default
  const [selColor, setSelColor] = useState("#000000"); //default black

  //16x16 2D Array that holds color data
  const [pixels, setPixels] = useState(CanvasLib.createEmptyCanvas());

  //will be called by Cell component
  const paint = (xPos, yPos) => {
    //copy from old 2d Array
    const newPixels = CanvasLib.copyCanvas(pixels);
    //update newPixels[...][...]xpos,yPos,selcolor
    newPixels[yPos][xPos] = selColor;
    setPixels(newPixels);
    //setPixel(...)
    //your code here
  };

  const clear = () => {
    //your code here
    //Hint : use CanvasLib.createEmptyCanvas()
    // clearInterval(interval);
    setPixels(CanvasLib.createEmptyCanvas());
  };

  const Random = () => {
    setPixels(CanvasLib.createRandomCanvas());
  };

  // const Disco = () => {
  //   setInterval(() => {
  //     setPixels(CanvasLib.createRandomCanvas());
  //   }, 200);
  // };
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "GhostWhite" }}>
      <PainterContext.Provider value={{ selColor, setSelColor, pixels, paint }}>
        <Header />
        <ColorPickerContainer />
        <Canvas />

        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-dark" onClick={clear}>
            Clear
          </button>
          <button className="btn btn-dark" onClick={Random}>
            Random Color
          </button>
          {/* <button className="btn btn-dark" onClick={Disco}>
            Disco
          </button> */}
        </div>
      </PainterContext.Provider>
    </div>
  );
}
