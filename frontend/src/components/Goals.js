import React from "react";

function Goals() {
  return (
    <div>
      <section className="portfolio section-padding" id="our-goals">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h1 className="m-2">
                  Our <span className="text-warning"> Goals</span>{" "}
                  <hr
                    style={{
                      width: "200px",
                      border: "3px solid #ffca0a",
                      color: "#ffca0a",
                    }}
                    className="mx-auto shadow-lg"
                  />{" "}
                </h1>
                <p className="mt-5">
                  Your journey to mental well-being begins here, where our
                  psychologist's expertise and personalized care converge to
                  empower you on the path to lasting positive change.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img alt="" className="img-fluid" src="img/project-1.jpg" />
                  </div>
                  <h3 className="card-title text-warning">
                    Empowering Lives Through Personalized Care
                  </h3>
                  <p className="lead">
                    Our psychologist at Virtual Therapy is dedicated to
                    empowering lives by offering personalized and compassionate
                    care. Our goal is to create a therapeutic alliance that
                    facilitates personal growth, resilience, and a renewed sense
                    of well-being for each patient, as they embark on their
                    unique journey towards mental health.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img alt="" className="img-fluid" src="img/project-2.jpg" />
                  </div>
                  <h3 className="card-title">
                    Holistic Healing at Virtual Therapy
                  </h3>
                  <p className="lead">
                    At Virtual Therapy, our foremost goal is to provide holistic
                    healing under the expert guidance of our dedicated
                    psychologist. Focused on individualized care, we strive to
                    empower each patient towards mental well-being, fostering
                    resilience, self-discovery, and lasting positive
                    transformation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img alt="" className="img-fluid" src="img/project-3.jpg" />
                  </div>
                  <h3 className="card-title text-warning">
                    Committed to Your Mental Wellness
                  </h3>
                  <p className="lead">
                    At Virtual Therapy, we are committed to your mental
                    wellness. Our psychologist is dedicated to providing a
                    supportive and inclusive space for healing. With a focus on
                    fostering emotional resilience and self-discovery, our goal
                    is to guide you towards lasting positive changes and an
                    enhanced quality of life.
                  </p>
                  {/* <button  className="btn bg-warning text-dark">Learn More</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Goals;
