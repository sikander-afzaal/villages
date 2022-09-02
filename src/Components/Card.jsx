import React from "react";

function Card({ name, pdf, images, setGallery, setImages }) {
  return (
    <div className="card">
      <img src={images[1]} alt="" />
      <div className="text-card">
        <h2>
          <span>Village</span> . {name}
        </h2>
        <div className="card-btn">
          <a href={pdf} download className="download">
            Download Report
          </a>
          <button
            onClick={() => {
              setGallery(true);
              setImages(images);
            }}
            className="gallery"
          >
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
