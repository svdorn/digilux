import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Fade from 'react-reveal/Fade';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      imageStatus: "loading"
    };
  }

  handleImageLoaded = () => {
      this.setState({ imageStatus: "loaded" });
  };

  render() {
    const { imageStatus } = this.state;
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section {...css(styles.intro)}>
          <Fade duration={1500} bottom cascade>
            <div {...css(styles.intro_text)}>
              <h1>DIGILUX</h1>
              <i><h3 {...css(styles.intro_text_h3)}>Where Luxury meets Future.</h3></i>
              <p {...css(styles.intro_text_p)}>
                Digilux is the first digital jewelry brand of the metaverse. 
                We provide time-honed {"&"} expertise-driven accessories as NFTs available to mint. 
              </p>
              <div {...css(styles.ring_background)}>
                <Button {...css(styles.discord_button)} >Join us on Discord <img
                  src="/images/social/discord.svg"
                  alt="discord"
                  {...css(styles.discord)}
                /></Button>
                <Button {...css(styles.disabled_button)} disabled>Mint</Button>
              </div>
            </div>
          </Fade>
        </section>
        <section id="mission" {...css(styles.mission)}>
          <div>
            <div {...css(styles.mission_left)}>
              <h1>Our Mission</h1>
              <p>Digilux is the world's first digital luxury fashion brand, specializing in jewelry, watches, and accessories.
                Rarity and exclusivity are prioritized for each collection, allowing collectors to gain wealth while they shop.
                <br /><br />
                The DigiRing series is our first - and the first - digital ring collection within the metaverse, with 10,000 generated variants.
                <br /><br />
                Each DigiRing was designed to emulate the uniqueness of rare gemstones, metals, and materials in real life. That rarity is then amplified by it's 
                limited existence in the metaverse.
              </p>
            </div>
            <div {...css(styles.mission_right)}>
              <img 
                {...css(styles.mission_img)} 
                src="/images/black_logo.png"
                onLoad={this.handleImageLoaded.bind(this)}
              />
            </div>
          </div>
        </section>
        <section id="digiring" {...css(styles.digiring)}>
          <Fade top>
            <h1 {...css(styles.digiring_header)}>The DigiRing</h1>
            <p {...css(styles.digiring_sub_header)}>The DigiRing series is our first - and the first - digital ring collection within the metaverse.</p>
            <div {...css(styles.digiring_container)}>
              <div {...css(styles.digiring_left)}>
                <Fade duration={2500} top cascade>
                  <h3>5 Band Types.</h3>
                  <h3>Over 20 Materials.</h3>
                  <h3>Dozens of Gems.</h3>
                  <h3><b>10,000 Unique Rings.</b></h3>
                </Fade>
              </div>
              <div {...css(styles.digiring_right)}>
                <img {...css(styles.digiring_image)} src="/images/five_rings.png" />
              </div>
            </div>
          </Fade>
        </section>
        <section id="roadmap" {...css(styles.roadmap)}>
          <div />
        </section>
        <section id="mint" {...css(styles.mint)}>
            <Fade top>
              <h1 {...css(styles.mint_header)}>Minting</h1>
              <p {...css(styles.mint_sub_header)}>Every major collection from Digilux will include 10,000 items, and mint prices will be 0.065 ETH.
              <br/><br/>All DigiRings will be revealed once minting is complete.
              </p>
              <div {...css(styles.mint_schedule)}>
                <h2>Schedule</h2>
                <h3>11/17/2021: 12:00am-11:59pm</h3>
                <p {...css(styles.mint_p)}>DigiRings White List Mint</p>
                <h3>11/18/2021: 12:00am - 11:59pm</h3>
                <p {...css(styles.mint_p)}>DigiRings Public Mint</p>
              </div>
            </Fade>
        </section>
        <section id="community" {...css(styles.community)}>
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
    height: "calc(50vh)",
    minHeight: "560px",
    paddingTop: "80px",
    verticalAlign: "middle",
    "@media (max-width: 1000px)": {
      height: "600px",
    },
    "@media (max-width: 500px)": {
      height: "450px",
    }
  },
  intro_text: {
    fontWeight: "800px",
    fontSize: "32px",
    margin: "-30px auto",
    maxWidth: "95%",
    "@media (max-width: 1000px)": {
      fontSize: "30px"
    },
    "@media (max-width: 500px)": {
      fontSize: "26px"
    }
  },
  intro_text_h3: {
    fontSize: "26px",
    marginTop: "-30px",
    "@media (max-width: 1000px)": {
      fontSize: "24px"
    },
    "@media (max-width: 500px)": {
      fontSize: "22px"
    }
  },
  intro_text_p: {
    fontWeight: "300px",
    fontSize: "24px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
    padding: "0 0 30px 0",
    "@media (max-width: 1000px)": {
      fontSize: "22px"
    },
    "@media (max-width: 500px)": {
      fontSize: "18px"
    }
  },
  ring_background: {
    height: "calc(20vh)",
    minHeight: "300px",
    background: "url(/images/Intro_Gold_Ring.png)",
    backgroundSize: "fixed",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 1000px)": {
      height: "300px"
    },
    "@media (max-width: 500px)": {
      fontSize: "18px"
    }
  },
  discord_button: {
    display: "inline-block",
    padding: "8px",
    margin: "15px",
    backgroundColor: color.gold,
    color: color.white,
    height: "45px",
    width: "220px"
  },
  disabled_button: {
    display: "inline-block",
    padding: "8px",
    margin: "15px",
    backgroundColor: color.gold,
    opacity: "0.5",
    color: color.white,
    height: "45px",
    width: "220px"
  },
  discord: {
    marginLeft: "5px",
    height: "15px",
    opacity: "0.95"
  },
  /* mission styling */
  mission: {
    padding: "60px 0",
    color: color.black,
    overflow: "auto",
    textAlign: "center",
    "@media (max-width: 500px)": {
      padding: "40px 0"
    }
  },
  mission_left: {
    display: "inline-block",
    width: "800px",
    fontWeight: "300px",
    fontSize: "20px",
    textAlign: "left",
    margin: "auto",
    "@media (max-width: 1000px)": {
      fontSize: "18px",
      width: "500px",
      padding: "15px"
    },
    "@media (max-width: 800px)": {
      width: "450px"
    },
    "@media (max-width: 500px)": {
      width: "90%",
      fontSize: "16px"
    }
  },
  mission_right: {
    display: "inline-block",
    padding: "0 50px",
    margin: "auto"
  },
  mission_img: {
    height: "250px",
    "@media (max-width: 1000px)": {
      height: "200px"
    },
    "@media (max-width: 500px)": {
      height: "170px"
    }
  },
  /* tech section styling */
  digiring: {
    padding: "60px 0",
    backgroundColor: color.gray,
    color: color.black,
    overflow: "auto",
    textAlign: "center",
    fontWeight: "800px"
  },
  digiring_header: {
    fontSize: "36px",
    "@media (max-width: 1000px)": {
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      fontSize: "28px"
    }
  },
  digiring_sub_header: {
    margin: "-20px auto",
    "@media (max-width: 500px)": {
      width: "90%"
    }
  },
  digiring_container: {
    paddingTop: "30px"
  },
  digiring_left: {
    display: "inline-block",
    margin: "auto",
    fontSize: "26px",
    textAlign: "left",
    "@media (max-width: 1000px)": {
      width: "300px",
      fontSize: "22px"
    },
    "@media (max-width: 500px)": {
      width: "90%",
      fontSize: "20px",
      textAlign: "center"
    }
  },
  digiring_right: {
    display: "inline-block",
    padding: "0 0 0 20px",
    margin: "auto",
    "@media (max-width: 500px)": {
      padding: "0",
    }
  },
  digiring_image: {
    width: "700px",
    "@media (max-width: 1200px)": {
      width: "600px",
    },
    "@media (max-width: 1000px)": {
      width: "400px",
    },
    "@media (max-width: 500px)": {
      width: "90%",
    }
  },
  /* roadmap section styling */
  roadmap: {
    padding: "60px 0",
    backgroundColor: color.primary,
    color: color.secondary,
    overflow: "auto",
    textAlign: "center"
  },
  /* mint section styling */
  mint: {
    padding: "60px 0",
    backgroundColor: color.gray,
    color: color.primary,
    overflow: "auto",
    textAlign: "center"
  },
  mint_header: {
    fontSize: "36px",
    "@media (max-width: 1000px)": {
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      fontSize: "28px"
    }
  },
  mint_sub_header: {
    margin: "-15px auto",
    width: "420px",
    "@media (max-width: 500px)": {
      width: "90%"
    }
  },
  mint_schedule: {
    margin: "40px auto",
  },
  mint_p: {
    opacity: "0.4",
    marginTop: "5px"
  },
  /* community section styling */
  community: {
    padding: "20px 0 60px 0",
    overflow: "auto"
  }
}))(Home);