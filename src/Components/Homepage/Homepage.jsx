import React from "react";
import "./Homepage.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
function Homepage() {
  return (
    <div clasName="primary p-2">
      {/* ///////////////////////// section 1//////////////////////////// */}
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src="iStock-583581070_3.mp4" />
        </video>
        <div className="content">
          <div className="video_heading_section_blur">
            <h1 className="top_Heading">
            <strong clasName="">
              Build financial security with easy, risk-free crypto funds
              <br />
              Build your own portfolio using Moolah Capital individual 
              <br />
              funds. We have a range of fund types to choose from.
            </strong>
          </h1>
          </div>
          
        </div>
      </div>
      {/* ////////////////////////////////// section 2 /////////////////////////// */}
      <div className="d-flex justify-content-center align-items-center overflow-hidden cards_wrapper">
        <div className="cards">
          <motion.div
            initial={{
              opacity: 0,
              y: 150,
            }}
            whileInView={{
              opacity: 1,
              y: -50,
              transition: {
                duration: 1,
              },
            }}
            style={{color: "var(--blue)"}}
          >
            <p className="w-100 investing_heading">
              <strong>Simple and successful crypto investing</strong>
            </p>
            <span className="w-100">
              Crypto has often outperformed traditional markets like stocks,
              ETFs, currencies, precious metal and bonds.
            </span>
            <p className="w-100">
              Build your own portfolio using Moolah Capital individual funds. We
              have a range of fund types to choose from.
            </p>
          </motion.div>
          <div className="moolah_offers_cover_section gap-3">
            <motion.div
              className="cards_cover primary-light p-2"
              initial={{
                opacity: 0,
                y: 250,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
            >
              <div className="d-flex flex-wrap gap-2 justify-content-start align-items-center">
                <img
                  className="card_image1"
                  src="https://images.squarespace-cdn.com/content/v1/67505321486a6227c75a6b4c/a750d8f8-0271-4a6c-a39f-c9ce611fa217/icons8-investment-portfolio-50.png?format=100w"
                  alt=""
                />
                <strong className="">Funds</strong>
              </div>
              <p className="">
                Moolah offers a small set of theme-based funds for you to choose
                based on your risk appetite and goals.
              </p>
            </motion.div>
            <motion.div
              className="cards_cover primary-light p-2"
              initial={{
                opacity: 0,
                y: 250,
                x: 250,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                  duration: 1,
                },
              }}
            >
              <div className="d-flex flex-wrap gap-2 justify-content-start align-items-center">
                <img
                  className="card_image1"
                  src="https://images.squarespace-cdn.com/content/v1/67505321486a6227c75a6b4c/86609fe4-b1d5-45e0-b992-0dcea0e941ff/icons8-piggy-bank-50.png?format=100w"
                  alt=""
                />
                <strong className="">Low cost of investment</strong>
              </div>
              <p className="">
                Thanks to our automated investment process, we can offer low
                custody fees and investment fees for actively managed funds, at
                0.25% and 2%, respectively .
              </p>
            </motion.div>
            <motion.div
              className="cards_cover primary-light p-2"
              initial={{
                opacity: 0,
                y: 250,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
            >
              <div className="d-flex flex-wrap gap-2 justify-content-start align-items-center">
                <img
                  className="card_image1"
                  src="https://images.squarespace-cdn.com/content/v1/67505321486a6227c75a6b4c/de6975af-597a-4d61-8a54-aeb4a7898cd6/icons8-check-50.png?format=100w"
                  alt=""
                />
                <strong className="">Simple to use</strong>
              </div>
              <p className="">
                Our investing approach makes investing in crypto as simple as
                mainstream finance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="d-flex justify-content-center"
        initial={{
          opacity: 0,
          y: 250,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <div className="funds">
          Discover our funds
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>

      {/* /////////////////////// section 3 //////////////////////// */}
      <motion.div
        initial={{
          opacity: 0,
          y: 250,
        }}
        whileInView={{
          opacity: 1,
          y: 50,
          transition: {
            duration: 1,
          },
        }}
      >
        <h1 className="">Financial Engineering for Crypto investing.</h1>
      </motion.div>
      <motion.div
        className="d-flex justify-content-center align-items-center"
        initial={{
          opacity: 0,
          y: 250,
        }}
        whileInView={{
          opacity: 1,
          y: 50,
          transition: {
            duration: 1,
          },
        }}
      >
        <div style={{ width: "80%", marginTop: "50px" }}>
          <div className="container-fluid overflow-hidden">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-5">
                <motion.div
                  clasName="w-100"
                  style={{ marginTop: "90px" }}
                  initial={{
                    opacity: 0,
                    x: -250,
                    y: 250,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                >
                  <div className="text-start">
                    <h3 className="">Investing not gambling</h3>
                    <div className="">
                      While other investing platforms give you the possibility
                      to cherry pick your investments and blindly follow others,
                      we follow a different approach. Instead of gambling with
                      your money, we give you exposure to an entire market with
                      a minimum investment based on traditional financial
                      analysis and risk management.
                    </div>
                    <div className="funds mt-5 mx-0">
                      Discover our funds
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-5"
                style={{ marginTop: "100px" }}
              >
                <motion.div
                  clasName="w-100"
                  initial={{
                    opacity: 0,
                    x: 250,
                    y: 250,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                >
                  <div className="img  stm_animation animated stm_viewport fadeInLeft">
                    <img
                      src="https://crypterio.stylemixthemes.com/landing/wp-content/themes/landing_theme/assets/img/ico-listing/listing-db.png"
                      width="100%"
                      height="300px"
                    />
                  </div>
                  <div style={{ marginTop: "-350px" }}>
                    <div
                      data-animate="fadeInLeft"
                      data-animation-delay="0.6"
                      data-animation-duration={2}
                      data-viewport_position={90}
                      style={{
                        marginBottom: "50px",
                        opacity: 1,
                        WebkitAnimationDelay: "0.6s",
                        WebkitAnimationDuration: "2s",
                        MozAnimationDelay: "0.6s",
                        MozAnimationDuration: "2s",
                        animationDelay: "0.6s",
                      }}
                    >
                      <img src="https://crypterio.stylemixthemes.com/landing/wp-content/themes/landing_theme/assets/img/ico-listing/ico_listing_1.png" />
                    </div>
                    <div
                      className=""
                      data-animate="fadeInLeft"
                      data-animation-delay="0.4"
                      data-animation-duration={2}
                      data-viewport_position={90}
                      style={{
                        opacity: 1,
                        WebkitAnimationDelay: "0.4s",
                        WebkitAnimationDuration: "2s",
                        MozAnimationDelay: "0.4s",
                        MozAnimationDuration: "2s",
                        animationDelay: "0.4s",
                      }}
                    >
                      <img src="https://crypterio.stylemixthemes.com/landing/wp-content/themes/landing_theme/assets/img/ico-listing/ico_listing_2.png" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-5"
                style={{ marginTop: "100px" }}
              >
                <motion.div
                  clasName="w-100"
                  initial={{
                    opacity: 0,
                    x: -250,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                >
                  <div className="img  stm_animation animated stm_viewport fadeInLeft">
                    <img
                      src="https://crypterio.stylemixthemes.com/landing/wp-content/themes/landing_theme/assets/img/ico-listing/listing-db.png"
                      width="100%"
                      height="300px"
                    />
                  </div>
                  <div style={{ marginTop: "-350px" }}>
                    <div
                      data-animate="fadeInLeft"
                      data-animation-delay="0.6"
                      data-animation-duration={2}
                      data-viewport_position={90}
                      style={{
                        marginBottom: "50px",
                        opacity: 1,
                        WebkitAnimationDelay: "0.6s",
                        WebkitAnimationDuration: "2s",
                        MozAnimationDelay: "0.6s",
                        MozAnimationDuration: "2s",
                        animationDelay: "0.6s",
                      }}
                    >
                      <img src="https://crypterio.stylemixthemes.com/landing/wp-content/themes/landing_theme/assets/img/ico-listing/ico_listing_1.png" />
                    </div>
                    <div
                      className=""
                      data-animate="fadeInLeft"
                      data-animation-delay="0.4"
                      data-animation-duration={2}
                      data-viewport_position={90}
                      style={{
                        opacity: 1,
                        WebkitAnimationDelay: "0.4s",
                        WebkitAnimationDuration: "2s",
                        MozAnimationDelay: "0.4s",
                        MozAnimationDuration: "2s",
                        animationDelay: "0.4s",
                      }}
                    >
                      <img src="https://crypterio.stylemixthemes.com/landing/wp-content/themes/landing_theme/assets/img/ico-listing/ico_listing_2.png" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-5">
                <motion.div
                  clasName="w-100"
                  style={{ marginTop: "90px" }}
                  initial={{
                    opacity: 0,
                    x: 250,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                >
                  <div className="text-start">
                    <h3 className="">Pioneering the crypto funds revolution</h3>
                    <div className="">
                      We are pioneers of the application of index investing to
                      the crypto universe and to Decentralised Finance (DeFi).
                      We promote crypto index investing with our funds and
                      through our Moolah University which will help investors of
                      today and professionals of tomorrow.
                    </div>
                    <div className="funds mt-5 mx-0 text--decoration-none">
                      Learn about our University
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ////////////////////////////// section 6 ////////////////////////// */}

      <motion.div
        initial={{
          opacity: 0,
          y: 250,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <div className="container-fluid ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-5 p-2">
              <div className="last_3_cards_cover p-2">
                <div className="last_3_cards_cover_child p-2">
                  <h2 className="text-center">Simple</h2>
                  <p>
                    Our platform is designed to emulate the ease and familiarity
                    of traditional index fund investing, but with the potential
                    for higher returns that crypto markets offer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-5 p-2">
              <div className="last_3_cards_cover p-2">
                <div className="last_3_cards_cover_child p-2">
                  <h2 className="text-center">Diversified</h2>
                  <p>
                    When you invest in a fund, you add cryptocurrencies to a
                    diversified investment portfolio and this can help reduce
                    risk and increase potential returns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-5 p-2">
              <div className="last_3_cards_cover p-2">
                <div className="last_3_cards_cover_child p-2">
                  <h2 className="text-center">Safer</h2>
                  <p>
                    You won’t worry about risks and security as they come for
                    free with our funds. We protect your investments against
                    market risks, liquidity risks and hacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* /////////////////////// section 4 ////////////////// */}
      <motion.div
        initial={{
          opacity: 0,
          y: 250,
        }}
        whileInView={{
          opacity: 1,
          y: 100,
          transition: {
            duration: 1,
          },
        }}
      >
        <h1 className="">Investing with Technological Dominance.</h1>
      </motion.div>

      {/* //////////////////////////// section 5 ////////////////////// */}
      <div className="bards_width_background">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-2">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 250,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }}
              >
                <div clasName="card_shadow">
                  <div className="">
                    <h2 className="">Real-time data</h2>
                    <span className="">
                      Our platform and scalable IT infrastructure can store a
                      critical amount of real-time data which we use to optimise
                      our trading models and to protect our investments.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-2">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 250,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }}
              >
                <div clasName="card_shadow">
                  <div className="">
                    <h2 className="">Intelligence and safety</h2>
                    <span className="">
                      Our intelligent software can predict market, operational
                      and liquidity risks like the collapse of major exchanges,
                      hacking threats, to the most unforeseeable changes in the
                      markets.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-2">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 250,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }}
              >
                <div clasName="card_shadow">
                  <div className="">
                    <h2 className="">Seeking market opportunities</h2>
                    <span className="">
                      We adopt strategies usually not available to individual
                      investors, such as arbitrage, algorithmic trading,
                      mathematical and data-driven models to exploit patterns
                      and trends in financial markets.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
