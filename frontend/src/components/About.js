import React from "react";
import img4 from "./images/4.jpg";
function About() {
  return (
    <div>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img alt="" className="img-fluid" src={img4} />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <h1 className="pb-5 mb-5 text-center">
                About<span className="text-warning"> Us</span>
                <hr
                  style={{
                    width: "200px",
                    border: "3px solid #ffca0a",
                    color: "#ffca0a",
                  }}
                  className="mx-auto shadow-lg"
                />{" "}
              </h1>
              <div className="about-text">
                <h2 className="mb-3">
                  Your Journey to Well-Being Begins at{" "}
                  <span className="text-warning ">Virtual Therapy</span>
                </h2>
                <p>
                  Welcome to Vritual Therapy, where compassionate care meets
                  individualized support. Our dedicated psychologist, is
                  committed to providing a safe and nurturing space for healing.
                  With a personalized approach,our psychologist seamlessly
                  tailors sessions to meet the unique needs of each client,
                  fostering a path to mental well-being. Join our community of
                  individuals on their journey to self-discovery and emotional
                  resilience. Your well-being is our priority at Virtual
                  Therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
