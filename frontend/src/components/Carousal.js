import React from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
function Carousal() {
  return (
    <div className="main">
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
      >
        <div className="carousel-indicators">
          <button
            aria-label="Slide 1"
            className="active "
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>{" "}
          <button
            aria-label="Slide 2"
            data-bs-slide-to="1"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>{" "}
          <button
            aria-label="Slide 3"
            data-bs-slide-to="2"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="..." className="d-block w-100" />
            <div className="carousel-caption">
              <h5> Empowering Minds, Virtually</h5>
              <p className="text-warning">
                Unlock boundless potential and foster intellectual growth
                through our immersive virtual experiences, designed to empower
                minds and cultivate a future of limitless possibilities.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} alt="..." className="d-block w-100" />
            <div className="carousel-caption">
              <h5>Navigating Wellness Together</h5>
              <p className="text-warning">
                Explore a compassionate journey to mental well-being with our
                experienced psychologists, dedicated to guiding you through
                life's challenges with empathy and expertise.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} alt="..." className="d-block w-100" />
            <div className="carousel-caption">
              <h5>Mindful Healing Hub</h5>
              <p className="text-warning">
                Discover a sanctuary for self-discovery and healing as our team
                of skilled psychologists provide personalized therapeutic
                solutions, fostering resilience and emotional well-being.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>{" "}
          <span className="visually-hidden">Previous</span>
        </button>{" "}
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>{" "}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
