import React from "react";

function Contact() {
  return (
    <div>
      <div>
        <section className="contact section-padding" id="contact">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-4">
                  <h1 className="mt-2">
                    Contact <span className="text-warning">Us</span>
                    <hr
                      style={{
                        width: "210px",
                        border: "3px solid #ffca0a",
                        color: "#ffca0a",
                      }}
                      className="mx-auto shadow-lg"
                    />
                  </h1>
                  <p className="mt-5 pt-4">Follow us on social media:</p>
                  <p className="socials mt-2">
                    <a
                      href="https://www.instagram.com/VirtualTherapy"
                      target="_blank"
                    >
                      <i
                        className="bi bi-instagram text-warning mx-1"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.facebook.com/VirtualTherapy"
                      target="_blank"
                    >
                      <i
                        className="bi bi-facebook text-warning mx-1"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                    <a
                      href="https://twitter.com/VirtualTherapy"
                      target="_blank"
                    >
                      <i
                        className="bi bi-twitter text-warning mx-1"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/VirtualTherapy"
                      target="_blank"
                    >
                      <i
                        className="bi bi-linkedin text-warning mx-1"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                  </p>
                  <p>For inquiries, please feel free to reach out to us:</p>
                  <p>
                    <span
                      className="text-warning "
                      style={{ fontSize: "25px" }}
                    >
                      <strong>Email: </strong>
                    </span>
                    <a href="mailto:VirtualTherapy@gmail.com">
                      VirtualTherapy@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-12 p-0 pt-4 pb-4"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
