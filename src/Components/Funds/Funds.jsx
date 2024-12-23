import React from "react";
import "./Funds.css";
import { motion } from "framer-motion";
const cardServicesList = [
  {
    title: "Crypto Investment",
    description:
      "Moolah Capital actively invests in cryptocurrencies and DeFi products so meet the targeted earnings.",
  },
  {
    title: "Digital Asset Portfolio Design",
    description:
      "Our portfolios are built so to track market or segment indexes. The funds are rebalanced periodically to keep the fund on the right path.",
  },
  {
    title: "Risk Management",
    description:
      "We protect your investments through stop-losses, hedging, concentration risk, market and trading risk, counterparty risk, liquidity risk and more.",
  },
  {
    title: "Machine learning/ deep learning",
    description:
      "We use machine learning models to assess the performance of our investment strategies. Deep learning models are used to identify patterns and signals from high-frequency market data.",
  },
  {
    title: "Tutoring and mentoring",
    description:
      "Moolah University offers free learning, paid online courses, webinars and bespoke mentoring to investors and professionals who want to know more about Crypto and hedge funds.",
  },
  {
    title: "Research",
    description:
      "We harvest high-frequency investing and trading data and we produce reports to rank investment opportunities and trading ideas.",
  },
];
function Funds() {
  return (
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
        <h1>Moolah Capital funds</h1>
      </motion.div>
      {/* ////////////////////top card////////////// */}
      <div className="d-flex justify-content-center align-items-start my-5">
        <div className="" style={{ width: "100%" }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col=xl-4 col-xxl-4 p-2">
                <div className="p-2 top_six_cards">
                  <h4 className="text-start">
                    Moolah Defensive <br /> Fund
                  </h4>
                  <h5 className="text-start">Risk Level: 2</h5>
                  <div className="text-start">
                    Composition: 20% in crypto assets and 80% bond-style crypto
                    assets.
                    <br />
                    Management Style: Algorithmic and Active.
                    <br />
                    Accumulation: Yes.
                    <br />
                    Income generation: Yes.
                    <br />
                    Protection: Hedging and Risk Management.
                    <br />
                    <div className="top_six_cards_footer">
                      <div className="">
                        Number of Assets: variable.
                        <br />
                        Charge: 0.25% custody, 2.0% investment.
                      </div>
                      <div className="top_six_cards_footer_button_cover my-2">
                        <div className="top_six_cards_footer_button_cover_child">
                          Invest now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col=xl-4 col-xxl-4 p-2">
                <div className="p-2 top_six_cards">
                  <h4 className="text-start">
                    Moolah Cautious <br /> Fund
                  </h4>
                  <h5 className="text-start">RRisk Level: 3</h5>
                  <div className="text-start">
                    Composition: 40% in crypto assets and 60% bond-style crypto
                    assets.
                    <br />
                    Management Style: Algorithmic and Active.
                    <br />
                    Accumulation: Yes.
                    <br />
                    Income generation: Yes.
                    <br />
                    Protection: Hedging and Risk Management.
                    <br />
                    <div className="top_six_cards_footer">
                      <div className="">
                        Number of Assets: variable.
                        <br />
                        Charge: 0.25% custody, 2.0% investment.
                      </div>
                      <div className="top_six_cards_footer_button_cover my-2">
                        <div className="top_six_cards_footer_button_cover_child">
                          Invest now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col=xl-4 col-xxl-4 p-2">
                <div className="p-2 top_six_cards">
                  <h4 className="text-start">
                    Moolah Balanced <br /> Fund
                  </h4>
                  <h5 className="text-start">Risk Level: 4</h5>
                  <div className="text-start">
                    Composition: 50% in crypto assets and 50% bond-style crypto
                    assets.
                    <br />
                    Management Style: Algorithmic and Active.
                    <br />
                    Accumulation: Yes.
                    <br />
                    Income generation: Yes.
                    <br />
                    Protection: Hedging and Risk Management.
                    <br />
                    <div className="top_six_cards_footer">
                      <div className="">
                        Number of Assets: variable.
                        <br />
                        Charge: 0.25% custody, 2.0% investment.
                      </div>
                      <div className="top_six_cards_footer_button_cover my-2">
                        <div className="top_six_cards_footer_button_cover_child">
                          Invest now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col=xl-4 col-xxl-4 p-2">
                <div className="p-2 top_six_cards">
                  <h4 className="text-start">
                    Moolah 60% Accumulation <br /> Fund
                  </h4>
                  <h5 className="text-start">Risk Level: 4/5</h5>
                  <div className="text-start">
                    Composition: 60% in crypto assets and 40% bond-style crypto
                    assets.
                    <br />
                    Management Style: Algorithmic and Active.
                    <br />
                    Accumulation: Yes.
                    <br />
                    Income generation: Yes.
                    <br />
                    Protection: Hedging and Risk Management.
                    <br />
                    <div className="top_six_cards_footer">
                      <div className="">
                        Number of Assets: variable.
                        <br />
                        Charge: 0.25% custody, 2.0% investment.
                      </div>
                      <div className="top_six_cards_footer_button_cover my-2">
                        <div className="top_six_cards_footer_button_cover_child">
                          Invest now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col=xl-4 col-xxl-4 p-2">
                <div className="p-2 top_six_cards">
                  <h4 className="text-start">
                    Moolah 80% Accumulation <br /> Fund
                  </h4>
                  <h5 className="text-start">Risk Level: 5</h5>
                  <div className="text-start">
                    Composition: 80% in crypto assets and 20% bond-style crypto
                    assets.
                    <br />
                    Management Style: Algorithmic and Active.
                    <br />
                    Accumulation: Yes.
                    <br />
                    Income generation: Yes.
                    <br />
                    Protection: Hedging and Risk Management.
                    <br />
                    <div className="top_six_cards_footer">
                      <div className="">
                        Number of Assets: variable.
                        <br />
                        Charge: 0.25% custody, 2.0% investment.
                      </div>
                      <div className="top_six_cards_footer_button_cover my-2">
                        <div className="top_six_cards_footer_button_cover_child">
                          Invest now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col=xl-4 col-xxl-4 p-2">
                <div className="p-2 top_six_cards">
                  <h4 className="text-start">
                    Moolah 100% Accumulation <br /> Fund
                  </h4>
                  <h5 className="text-start">Risk Level: 6</h5>
                  <div className="text-start">
                    Composition: 100% in crypto assets and 0% bond-style crypto
                    assets.
                    <br />
                    Management Style: Algorithmic and Active.
                    <br />
                    Accumulation: Yes.
                    <br />
                    Income generation: Yes.
                    <br />
                    Protection: Hedging and Risk Management.
                    <br />
                    <div className="top_six_cards_footer">
                      <div className="">
                        Number of Assets: variable.
                        <br />
                        Charge: 0.25% custody, 2.0% investment.
                      </div>
                      <div className="top_six_cards_footer_button_cover my-2">
                        <div className="top_six_cards_footer_button_cover_child">
                          Invest now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////// */}
      <div className=""></div>
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
        className="fund_section"
      >
        <div className="fund_section_child">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1 className="text-center">
                  Pick a fund based on your risk-reward appetite and by your
                  financial goal.
                </h1>
                <p className="text-center">
                  If you aim at building an income then Income funds are more
                  suitable for you.
                </p>
                <p className="text-center">
                  If you want your capital to grow the fullest and be available
                  in the future as a pension or money to cover an expense, the
                  Accumulation funds work better for you.
                </p>
                <p className="text-center">
                  Add more funds to your portfolio if you want to obtain an
                  income and a future wealth.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3">
                <div className="Cards_Head">
                  <p className="">
                    <b className="">Risk level</b>
                  </p>
                  <p className="">
                    Each fund is classified by the fund’s synthetic risk and
                    reward indicator (SRRI), which ranges from 1 (the least
                    risky) to 7 (the riskiest).
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3">
                <div className="Cards_Head">
                  <p className="">
                    <b className="">Composition</b>
                  </p>
                  <p className="">
                    We invest in cryptocurrencies and Decentralised Finance
                    instruments. The former are riskier, whilst the latter can
                    be
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3">
                <div className="Cards_Head">
                  <p className="">
                    <b className="">Management Style</b>
                  </p>
                  <p className="">
                    Most of our funds are based on a hybrid approach integrating
                    selection by data-driven models and by expert assessment.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3">
                <div className="Cards_Head">
                  <p className="">
                    <b className="">Accumulation fund type</b>
                  </p>
                  <p className="">
                    The fund reinvests the profits to maximise the long-term
                    capital. The profits are transferred to the investor at the
                    end of the lifetime of the investment.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3">
                <div className="Cards_Head">
                  <p className="">
                    <b className="">Income fund type</b>
                  </p>
                  <p className="">
                    The capital is not reinvested as profit becomes an income to
                    the investor during the lifetime of the investment.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3">
                <div className="Cards_Head">
                  <p className="">
                    <b className="">Protection</b>
                  </p>
                  <p className="">
                    All our funds are protected against market, liquidity and
                    operational risk. The protection involves analysis of
                    real-time data and ad-hoc hedging positions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        style={{ backgroundColor: "#265f80" }}
      >
        <h4 className="text-start mt-5 moolah_capital_strategies_cover pt-2">
          <strong>Moolah Capital strategies.</strong>
        </h4>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <img
                src="https://crypterio.stylemixthemes.com/landing/wp-content/themes/landing_theme/assets/img/ico-listing/listing-db.png"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-2 text-start">
              <p className="">
                Our Range of Crypto Investment funds covers many investment
                themes and goals. We invest through various strategies like:
              </p>
              <p>
                <ul>
                  <li>
                    <p>Crypto Income</p>
                  </li>
                  <li>
                    <p>Crypto Investment</p>
                  </li>
                  <li>
                    <p>Capital Stability</p>
                  </li>
                  <li>
                    <p>Portfolio Optimization</p>
                  </li>
                  <li>
                    <p>Signal processing</p>
                  </li>
                  <li>
                    <p>High-frequency trading</p>
                  </li>
                  <li>
                    <p>Momentum Trading</p>
                  </li>
                  <li>
                    <p>Mean Reversion Trading</p>
                  </li>
                  <li>
                    <p>
                      Decentralized Finance including staking, lending, and
                      yield farming
                    </p>
                  </li>
                  <li>
                    <p>DEPIN Protocols and Tokens.</p>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* //////////////////////////////////////////////////// */}

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
        style={{ backgroundColor: "white", color: "var(--blue)" }}
        className="pt-5 "
      >
        <h1>
          <strong>
            Moolah is built on a rich, real-time data investing platform.
          </strong>
        </h1>
        <h4>
          Investing in crypto assets and DeFi instruments.
          <br />
          Optimise funds tracking indexes.
          <br />
          Manage risk in real time against market events, liquidity and
          operation risks like hacks and exchange failures.
          <br />
          Design portfolios that combine different strategies and indexes.
          <br />
          Develop data-greedy trading models using machine and deep learning
          models.
          <br />
          Tutoring and mentoring investors and professionals.
          <br />
          Build tools for analysis and investment that are available from our
          Research unit.
        </h4>

        <div className="container pt-5">
          <div className="row">
            {cardServicesList.map((data) => (
              <>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-2">
                  <div className="cardServicesList">
                    <p className="">
                      <strong> {data.title}</strong>
                    </p>
                    <p>{data.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </motion.div>
      {/* ///////////////////////////////////////////////////////////// */}
      <div>
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
          className="pt-4 "
          style={{ backgroundColor: "grey", zIndex: "100" }}
        >
          <h3>
            <strong>Intelligent, real-time Risk management.</strong>
          </h3>
          <div className="container pt-5">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-2">
                <div className="cardServicesList">
                  <div className="cardServicesList_icons">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/67505321486a6227c75a6b4c/bf7060eb-9a00-4988-8af4-fa5abedc7bb2/icons8-normal-distribution-histogram-50.png?format=300w"
                      alt=""
                    />
                  </div>

                  <p className="">
                    <strong>Methodology</strong>
                  </p>
                  <p>
                    Our risk measurement is comprehensive and includes all risk
                    including gearing and counter-party risk, as well as market
                    and factor risk, as these risks can, in turbulent markets,
                    compound each other.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-2">
                <div className="cardServicesList">
                  <div className="cardServicesList_icons">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/67505321486a6227c75a6b4c/b7279337-39bc-4d54-87a0-9297a5f20fbd/icons8-analysis-50.png?format=300w"
                      alt=""
                    />
                  </div>

                  <p className="">
                    <strong>Portfolio managers review</strong>
                  </p>
                  <p>
                    Our portfolio managers continuously monitor target returns
                    and loss limits for individual themes and funds and define
                    exit strategies before our funds can incur in losses.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-2">
                <div className="cardServicesList">
                  <div className="cardServicesList_icons">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/67505321486a6227c75a6b4c/04ef4fe7-61ce-4950-93e0-939a4f196406/icons8-networking-manager-50.png?format=300w"
                      alt=""
                    />
                  </div>

                  <p className="">
                    <strong>Real-time data</strong>
                  </p>
                  <p>
                    Thanks to the ability to store and analyze large amounts of
                    data in real-time, Moolah Capital can predict risk from
                    performance history, position history, market events and
                    news.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="w-100">
          <img
            className="bottom_image"
            src="https://images.squarespace-cdn.com/content/v1/67505321486a6227c75a6b4c/5a75c8b2-beb5-4fd7-8863-44bacf32b0ed/istockphoto-178735930-612x612.jpg?format=2500w"
            alt=""
            width="100%"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Funds;
