import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Modal({ images, setHeader }) {
  return (
    <>
      <div className="overlay" onClick={() => setHeader(false)}></div>
      <div className="modal">
        <img
          src="./Assets/close.png"
          onClick={() => setHeader(false)}
          className="close"
          alt=""
        />
        <Splide
          options={{
            width: "100%",
            perPage: 1,
            perMove: 1,
            height: "100%",
            drag: true,
            autoplay: false,
            type: "loop",
          }}
          aria-label="My Favorite Images"
        >
          {images.map((elem, idx) => {
            return (
              <SplideSlide key={"image" + idx + elem}>
                <div className="image-wrapper">
                  <img src={elem} alt="" />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Modal;
