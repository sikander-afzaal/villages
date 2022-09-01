import "./App.css";
import Card from "./Components/Card";

import { useState } from "react";
import Modal from "./Components/Modal";
function App() {
  const [gallery, setGallery] = useState(false);
  const [images, setImages] = useState([]);
  const data = [
    {
      name: "Parlapally",
      pdf: "./Assets/parlapally/pdf.pdf",
      images: [
        "./Assets/parlapally/img (1).jpg",
        "./Assets/parlapally/img (2).jpg",
        "./Assets/parlapally/img (3).jpg",
        "./Assets/parlapally/img (4).jpg",
        "./Assets/parlapally/img (5).jpeg",
        "./Assets/parlapally/img (6).jpg",
        "./Assets/parlapally/img (7).jpg",
        "./Assets/parlapally/img (8).jpg",
        "./Assets/parlapally/img (9).jpg",
        "./Assets/parlapally/img (10).jpg",
        "./Assets/parlapally/img (11).jpg",
        "./Assets/parlapally/img (12).jpg",
        "./Assets/parlapally/img (13).jpg",
        "./Assets/parlapally/img (14).jpg",
        "./Assets/parlapally/img (15).jpg",
        "./Assets/parlapally/img (16).jpg",
        "./Assets/parlapally/img (17).jpg",
        "./Assets/parlapally/img (18).jpg",
        "./Assets/parlapally/img (19).jpg",
        "./Assets/parlapally/img (20).jpg",
        "./Assets/parlapally/img (21).jpg",
        "./Assets/parlapally/img (22).jpg",
      ],
    },
    {
      name: "Buddaram",
      pdf: "./Assets/buddaram/pdf.pdf",
      images: [
        "./Assets/buddaram/img (1).jpg",
        "./Assets/buddaram/img (1).png",
        "./Assets/buddaram/img (3).jpg",
        "./Assets/buddaram/img (4).jpg",
        "./Assets/buddaram/img (5).jpg",
        "./Assets/buddaram/img (6).jpg",
        "./Assets/buddaram/img (7).jpg",
        "./Assets/buddaram/img (8).jpg",
        "./Assets/buddaram/img (9).jpg",
      ],
    },
  ];
  return (
    <div className="app">
      {gallery && <Modal setHeader={setGallery} images={images} />}
      <header>
        <div className="header">
          <h1>ADOPT-A-VILLAGE Rural Health Initiative in India</h1>
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
          <button className="dark-green">Telangana</button>
          <button className="dark-blue">Gujrat</button>
          <button className="dark-yellow">andhrapradesh</button>
          <button className="dark-brown">karnataka</button>
        </div>
      </div>
      <div className="cards">
        {data.map((elem, idx) => {
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
