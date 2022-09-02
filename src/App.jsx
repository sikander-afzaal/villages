import "./App.css";
import Card from "./Components/Card";
import { data } from "./data";
import { useState } from "react";
import Modal from "./Components/Modal";
function App() {
  const [gallery, setGallery] = useState(false);
  const [images, setImages] = useState([]);
  const [state, setState] = useState("");

  return (
    <div className="app">
      {gallery && <Modal setHeader={setGallery} images={images} />}
      <header>
        <div className="header">
          <h1>
            <span>ADOPT-A-VILLAGE</span> Rural Health Initiative in India
          </h1>
          <p>A Rural Health Connect Project</p>
          <div className="color-row">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="blue"></div>
          </div>
        </div>
      </header>
      <div className="top">
        <div className="img">
          <img src="./Assets/logo1.png" alt="" />
          <img src="./Assets/logo1.png" alt="" />
        </div>
        <div className="btn-div">
          <button
            onClick={() => {
              setState("telangana");
            }}
            className="dark-green"
          >
            Telangana
          </button>
          <button
            onClick={() => {
              setState("gujrat");
            }}
            className="dark-blue"
          >
            Gujrat
          </button>
          <button
            onClick={() => {
              setState("andhrapradesh");
            }}
            className="dark-yellow"
          >
            andhrapradesh
          </button>
          <button
            onClick={() => {
              setState("karnataka");
            }}
            className="dark-brown"
          >
            karnataka
          </button>
        </div>
      </div>
      <div className="cards">
        {state === "telangana" &&
          data.telangana.map((elem, idx) => {
            return (
              <Card
                key={"idx" + idx + elem.name}
                {...elem}
                setGallery={setGallery}
                setImages={setImages}
              />
            );
          })}
        {state === "gujrat" &&
          data.gujrat.map((elem, idx) => {
            return (
              <Card
                key={"idx" + idx + elem.name}
                {...elem}
                setGallery={setGallery}
                setImages={setImages}
              />
            );
          })}
        {state === "andhrapradesh" &&
          data.andhrapradesh.map((elem, idx) => {
            return (
              <Card
                key={"idx" + idx + elem.name}
                {...elem}
                setGallery={setGallery}
                setImages={setImages}
              />
            );
          })}
        {state === "karnataka" &&
          data.karnataka.map((elem, idx) => {
            return (
              <Card
                key={"idx" + idx + elem.name}
                {...elem}
                setGallery={setGallery}
                setImages={setImages}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
