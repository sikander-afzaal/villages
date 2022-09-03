import React from "react";

function Card({
  name,
  pdf,
  images,
  setGallery,
  setImages,
  profileImg,
  profileName,
}) {
  return (
    <div className="card">
      <img src={profileImg} alt="" />
      <div className="text-card">
        <h2>
          <span>Village</span> . {name}
        </h2>
        <h3>Sponsor</h3>
        <p>{profileName}</p>
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
