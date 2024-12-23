import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
function Footer() {
  return (
    <motion.div style={{ background: "3763C1" }}>
      <div className="container-fluid">
        <div
          className="ms-3"
          style={{ margin: "20px", borderTop: "1px solid white" }}
        ></div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 footer_small_screen">
            <h3 className="ms-3">Moolah Capital</h3>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 footer_small_screen">
            <h4 className="">CONTACT</h4>
            <p className="fs-6 ">
              880 Orchard Road
              <br />
              Singapore, 4028
              <br />
              (65) 8288-048
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 footer_small_screen">
            <h4 className="">EXPLORE</h4>
            <p className="fs-6 ">
              About us
              <br />
              Funds
              <br />
              Investing
              <br />
              University
              <br />
              Contact
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 footer_small_screen">
            <h4 className="">Follow us on </h4>
            <p className="fs-6 ">
              <nav className="social_media_icons gap-3">
                <a
                  href="http://instagram.com/moolahcapital"
                  target="_blank"
                  className="sqs-svg-icon--wrapper instagram-unauth"
                >
                  <div>
                    <i className="bi bi-instagram"></i>
                  </div>
                </a>
                <a
                  href="http://x.com/moolah_capital"
                  target="_blank"
                  className="sqs-svg-icon--wrapper x-formerly-twitter-unauth"
                >
                  <div>
                    <i className="bi bi-twitter"></i>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/moolahcapital/"
                  target="_blank"
                  className="sqs-svg-icon--wrapper linkedin-unauth"
                >
                  <div>
                    <i className="bi bi-linkedin"></i>
                  </div>
                </a>
                <a
                  href="http://@tiktok.com/@moolah.capital"
                  target="_blank"
                  className="sqs-svg-icon--wrapper tiktok-unauth"
                >
                  <div>
                    <i className="bi bi-tiktok"></i>
                  </div>
                </a>
                <a
                  href="https://bsky.app/profile/moolahcapital.bsky.social"
                  target="_blank"
                  className="sqs-svg-icon--wrapper url"
                >
                  <div>
                    <i className="bi bi-threads"></i>
                  </div>
                </a>
              </nav>
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-4 ">
            <div
              className=""
              style={{ margin: "20px", borderTop: "1px solid white" }}
            ></div>
            <span className=" ms-3" style={{ fontSize: "12px" }}>
              @ Copyright Crypto.com 2024. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
