import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="blue d-flex justify-content-center align-items-center p-3">
      <div className="">
        <h1 className="">Contact Us</h1>
        <p className="" style={{ fontSize: "14px" }}>
          Please contact us via form below regarding any questions or feedback
          <br />
          related to crypto investing the easy, profitable Moolah way.
        </p>
        <form className="d-flex justify-content-center align-items-center">
          <div className="form_Pop">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 col-xxl-12 form_Pop_child">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-2 ">
                        <div className="mb-3 text-start">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            FirstName (Required)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-2 ">
                        <div className="mb-3 text-start">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            I'm interested in (Required)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2 ">
                        <div className="mb-3 text-start">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Subject (Required)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                        <div className="mb-3 text-start">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            LastName (Required)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                            placeholder="Tell us more about your interest in Crypto Investing"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                        <div className="mb-3 text-start">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            LastName (Required)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2  d-flex justify-content-center align-items-center">
                  <div className="hover-button">Submit</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
