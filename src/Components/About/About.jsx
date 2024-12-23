import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="">
      <div className="position-relative">
        <img
          src="The Benefits of Having a Side Hustle.jpeg"
          alt=""
          className="position-relative"
          width="100%"
          style={{ height: "100vh", zIndex: "-1" }}
        />
        <div className="Heading">
          <div className="heading_glass">
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
              <h1 className="text-start">
                <strong className="">
                  Moolah - where Crypto and traditional finance meet
                </strong>
              </h1>
            </motion.div>
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
              <p className="">
                At Moolah Capital, we believe that crypto investing should be
                simple and available to all, not just to experienced, skilled
                investors who can manage crypto wallets, cex and
                <br />
                dex exchange accounts and connections, multiple protocols
              </p>
            </motion.div>
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
              <p className="">
                Crypto investing should not be harder or more expensive than
                buying regular stocks, ETFs, metals, bonds or commodities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="Our_Values">
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
          <h4 className="text-start">
            <strong>Our Value</strong>
          </h4>
        </motion.div>

        <div className="card_Section overflow-hidden">
          {/* /////////////////////////////////// */}
          <div className="left_side">
            <motion.div
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
              <p className="">
                <label className="point_small">1</label>
                <strong>Simple and Successful </strong>
              </p>
            </motion.div>

            <div className="PointsDiv">1</div>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="right_side">
            <motion.div
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
              
              <p className="p-2 text-start">
                Simple investing is when we can buy and sell assets with no
                technological complications and when we can take decisions with
                little to zero emotional pressure.
                <br />
                Successful investing happens when we follow a good process and
                discipline, we invest helped by data evidence and experienced
                support and we keep financial costs under control.
                <br />
                This is what inspires Moolah funds and what will make your
                investing simple and successful.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="card_Section overflow-hidden">
          {/* /////////////////////////////////// */}
          <div className="left_side">
            <motion.div
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
              <p className="">
                <label className="point_small">2</label>
                <strong>Safety </strong>
              </p>
            </motion.div>

            <div className="PointsDiv">2</div>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="right_side">
            <motion.div
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
              
              <p className="p-2 text-start">
                Safe investing is when we can buy and sell assets with low to
                zero risks. Investments are not safe or riskier than our
                appetite when they are too volatile or when their profits can be
                hacked and stolen.
                <br />
                Unsafe transactions and accounts increase emotional stress and
                makes investing a dangerous and unpleasant experience
                <br />
                Keeping our accounts and your investments safe, is what inspired
                Moolah to build the safest funds in the crypto world.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="card_Section overflow-hidden">
          {/* /////////////////////////////////// */}
          <div className="left_side">
            <motion.div
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
              <p className="">
                <label className="point_small">3</label>
                <strong>Technological Dominance</strong>
              </p>
            </motion.div>

            <div className="PointsDiv">3</div>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="right_side">
            <motion.div
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
              
              <p className="p-2 text-start">
                Crypto investing nowadays is the pinnacle of innovation and
                technology for speed, efficiency and complexity. A dominant
                technology allows to store huge amount of data and to extract
                vital information in real-time.
                <br />
                New trends can be discovered and new danger can be identified
                and neutralized.
                <br />
                At Moolah the entire investment process is supported by the best
                in class technology to identify trading strategies, sending
                orders, designing and optimizing portfolios, tracking index and
                protecting money against risks.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="card_Section overflow-hidden">
          {/* /////////////////////////////////// */}
          <div className="left_side">
            <motion.div
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
              <p className="">
                <label className="point_small">4</label>
                <strong>Transparency</strong>
              </p>
            </motion.div>

            <div className="PointsDiv">4</div>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="right_side">
            <motion.div
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
              
              <p className="p-2 text-start">
                Some investors have avoided crypto for the belief that the
                sector is populated by bad players and too technologically
                complicated. In reality most cryptocurrencies and DeFi protocols
                use open source solution for their development.
                <br />
                Moolah invests only in assets that have passed our due
                diligence, which also requires to inspect their publicly
                available software. When you buy our funds, you can rest assured
                that shady protocols won’t be part of your portfolio.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="card_Section overflow-hidden">
          {/* /////////////////////////////////// */}
          <div className="left_side">
            <motion.div
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
              <p className="">
                <label className="point_small">5</label>
                <strong>Opportunities</strong>
              </p>
            </motion.div>

            <div className="PointsDiv">5</div>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="right_side">
            <motion.div
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
              
              <p className="p-2 text-start">
                Cryptocurrencies can experience rapid price appreciation,
                resulting in high returns on investment.
                <br />
                The frequent high crypto volatility makes the life of non
                professional investors quite hard.
                <br />
                Instead, our strategies seek investment opportunities through
                models and algorithms and are not affected by emotional
                component. We cut losses before they harm your money.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="card_Section overflow-hidden">
          {/* /////////////////////////////////// */}
          <div className="left_side">
            <motion.div
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
              <p className="">
                <label className="point_small">6</label>
                <strong>Experience </strong>
              </p>
            </motion.div>

            <div className="PointsDiv">6</div>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="right_side">
            <motion.div
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
              <p className="p-2 text-start">
                Experience - learning from past mistakes - can help investors
                cope with market volatility and uncertainty and avoid emotional
                biases that can affect their performance.
                <br />
                Moolah investing is supported by experienced portfolio managers
                and by software that was built from a huge amount of financial
                data. Our technology is future-proof and able to improve from
                continuous learning and adaptation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="index_investion">
        <div className="Investing_section">
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
            a
          >
            <h3 className="Bringing Index Investing to Crypto">
              Bringing Index Investing to Crypto
            </h3>
          </motion.div>
          <motion.div
            className="container-fluid"
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
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center">
                <p className="text-start">
                  Moolah Capital builds crypto index based on themes and
                  strategies and track those index through index funds.
                  <br />
                  This approach is well established in traditional finance by
                  Exchange Traded Funds (ETFs) and index funds.
                  <br />
                  Index investing has proven to be an effective, low cost,
                  diversified approach to investing for stocks and other
                  traditional assets.
                  <br />
                  Moolah connects index investing and Crypto with a number of
                  innovative crypto index funds.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="img_side">
                  <img
                    src="Premium Vector _ Stock market exchange technology.jpeg"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="index_investion_2">
        <div className="Investing_section">
          
          <motion.div
            className="container-fluid"
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
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
              <div className="img_side">
                  <img
                    src="Premium Vector _ Stock market exchange technology.jpeg"
                    alt=""
                    width="100%"
                  />
                </div>
                
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
            a
          >
            <h3 className="Bringing Index Investing to Crypto">
              Tutoring and Research
            </h3>
          </motion.div>
              <p className="text-start">
                  We open our technology and experience to help investors and
                  financial professionals. Moolah University offers leaning,
                  courses and webinars, mentoring and tutoring on Finance and
                  Trading.
                  <br />
                  Moolah Research publishes reports and insight on investment,
                  strategies, trends and themes for investors ans traders.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
