import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeStep: 0
    };
  }

  handleStepChange = activeStep => {
      this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state;
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section {...css(styles.intro)}>
          <div>
            <div {...css(styles.intro_left)}>
              <h1>DIGILUX</h1>
              <h3 {...css(styles.intro_left_h3)}>Where Luxury meets Future.</h3>
              <p {...css(styles.intro_left_p)}>
                Digilux is the first digital jewelry brand of the metaverse. 
                We provide time-honed {"&"} expertise-driven accessories as NFTs available to mint. 
                Each jewelry collection is inspired by rarity, digitized to be hyper real, and perfected by taste.
              </p>
              <Button {...css(styles.intro_button)} >Join us on Discord <img
            src="/images/social/discord.svg"
            alt="discord"
            {...css(styles.discord)}
          /></Button>
          <Button {...css(styles.intro_button)} >Mint NFT</Button>
            </div>
            <div {...css(styles.intro_right)}>
              <img{...css(styles.intro_image)} src="/images/Center_Ring_No_Background.png" alt="DigiRing" />
            </div>
          </div>
        </section>
        <section {...css(styles.entrepreneur)}>
          <div />
        </section>
        <section {...css(styles.tech)}>
          <div />
        </section>
        <section {...css(styles.investing)}>
          <div />
        </section>
        <section {...css(styles.contact)}>
          <div />
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    marginTop: "-80px"
  },
  /* intro section styling */
  intro: {
    backgroundColor: color.primary,
    color: color.secondary,
    height: "calc(60vh)",
    minHeight: "600px",
    paddingTop: "80px",
    verticalAlign: "middle",
    "@media (max-width: 1000px)": {
      height: "700px",
    },
    "@media (max-width: 500px)": {
      height: "750px",
    }
  },
  intro_left: {
    display: "inline-block",
    clear: "none",
    maxWidth: "40%",
    padding: "0 5%",
    float: "left",
    fontWeight: "700px",
    fontSize: "30px",
    "@media (max-width: 1000px)": {
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      fontSize: "25px"
    }
  },
  intro_left_h3: {
    marginTop: "-10px"
  },
  intro_left_p: {
    fontWeight: "300px",
    fontSize: "24px",
    "@media (max-width: 1000px)": {
      fontSize: "22px"
    },
    "@media (max-width: 500px)": {
      fontSize: "18px"
    }
  },
  intro_button: {
    display: "inline-block",
    padding: "8px",
    margin: "15px",
    backgroundColor: color.gold,
    color: color.white,
    opacity: "0.95"
  },
  discord: {
    marginLeft: "5px",
    height: "15px",
    opacity: "0.95"
  },
  intro_image: {
    height: "320px",
    marginTop: "80px"
  },
  intro_right: {
    display: "inline-block",
    clear: "none",
    fontWeight: "300px",
    fontSize: "22px",
    marginTop: "10px",
    maxWidth: "40%",
    float: "right",
    padding: "0 80px"
  },
  /* entrepreneur styling */
  entrepreneur: {
    padding: "40px 0",
    color: color.black
  },
  /* tech section styling */
  tech: {
    padding: "50px 0 60px",
    backgroundColor: color.primary,
    color: color.primary
  },
  /* investing section styling */
  investing: {
    padding: "60px 0"
  },
  /* contact section styling */
  contact: {
    padding: "20px 0 60px 0"
  }
}))(Home);