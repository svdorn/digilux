import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";
import { Button } from "@material-ui/core";
import Fade from 'react-reveal/Fade';

const roadmapItems = [
  { percentage: "10%", text: "The first public DigiRing mint TBA." },
  { percentage: "20%", text: "After 10k rings are minted, a DigiRing holder will be randomly selected to win a free ring of their choice. Cost of this ring caps at $10k. Winner gets direct access to our Diamond Council of America certified jewelry expert to find the perfect ring for you." },
  { percentage: "40%", text: "A $30,000 Community Fund will launch to reward content creation, increase Digilux NFT utility, and spark community growth. 2.5 percent of OpenSea sales will go to this fund." },
  { percentage: "50%", text: "We’re launching two very cool parts of our site: The Showroom and The Storefront. The Showroom will display each ring, their history. The Storefront will allow you to get custom jewelry inspired by your favorite Digilux NFTs." },
  { percentage: "70%", text: "DigiRing holders will be whitelisted for our next drop - the DigiWatch. The DigiWatch collection mint will happen shortly after the whitelisting." },
  { percentage: "80%", text: "After 10k watches are minted, a DigiWatch holder will be randomly selected to win a free ring of their choice. Cost of this watch caps at $50k. Winner will get direct access to our jewelry guru to help pick out a watch." },
  { percentage: "90%", text: "After the success of DigiWatch collection, we’ll move on to our DigiNecklace collection. DigiWatch holders will be whitelisted." },
  { percentage: "100%", text: "After 10k necklaces are minted, a randomly selected DigiNecklace holder will win a designer necklace of their choosing, with a cap cost of $20,000. They’ll get direct access to our jewelry guru to help you pick a necklace." },
  { percentage: "...", text: "We won’t stop still Digilux is apart of all the metaverses out there. In the meantime, there will be plenty of special event mints, Q&A/AMA discussions, and collaborations to look forward too." }
];

const teamMembers = [
  { title: "Visionary", name: "Nima1007", role: "Direction and Product Management" },
  { title: "Artist", name: "Nosselli", role: "Visuals, Graphics, Renders" },
  { title: "Technician", name: "stevej", role: "Web Dev, Smart Contracts" },
  { title: "Jewelry Guru", name: "Subatomic_Orb", role: "Expert in the Finer Luxuries" },
  { title: "Writer", name: "Alitheshaman", role: "Copy, Branding" },
  { title: "Mod Master", name: "eRac", role: "All Things Discord"},
  { title: "Content King", name: "Bubba", role: "Marketing, Video" }
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section {...css(styles.intro)}>
          <Fade duration={1500} bottom cascade>
            <div {...css(styles.intro_text)}>
            <img 
                {...css(styles.intro_logo)} 
                src="/images/Digilux_White_logo.png"
                alt="Digilux"
              />
              <p {...css(styles.intro_text_p)}>
                Digilux is the first digital jewelry brand of the metaverse. 
                We provide time-honed {"&"} expertise-driven accessories as NFTs available to mint. 
              </p>
              <div {...css(styles.ring_background)}>
                <a key="discord_button" href="https://discord.gg/qS2nnRdQ" target="_blank" rel="noopener noreferrer">
                  <Button {...css(styles.discord_button)} >Join our Discord <img
                    src="/images/social/discord.svg"
                    alt="discord"
                    {...css(styles.social_icon)}
                  /></Button>
                </a>
                <Button {...css(styles.disabled_button)} disabled>Mint</Button>
              </div>
            </div>
          </Fade>
        </section>
        <section id="mission" {...css(styles.mission)}>
          <div>
            <div {...css(styles.mission_left)}>
              <h1 {...css(styles.header)}>Our Mission</h1>
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
                src="/images/logo_black.png"
                alt="Digilux"
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
                <img {...css(styles.digiring_image)} src="/images/rings.png" alt="DigiRings" />
              </div>
            </div>
          </Fade>
        </section>
        <section id="roadmap" {...css(styles.roadmap)}>
          <Fade top>
            <h1 {...css(styles.header)}>Roadmap</h1>
            <p {...css(styles.roadmap_sub_header)}>Digilux is devoted to our community's success. 
              To ensure that success, we'll provide opportunities for you to take part in our future collections, conversations, and exclusive events.</p>
            <div {...css(styles.roadmap_container)}>
              {roadmapItems.map(item => (
                <div {...css(styles.roadmap_section_container)}>
                  <div {...css(styles.roadmap_section)}>
                    <span key={item.percentage} {...css(styles.roadmap_dot)}>
                      <div {...css(styles.roadmap_dot_text)}>{item.percentage}</div>
                    </span>
                    <p {...css(styles.roadmap_text)}>{item.text}</p>
                  </div>
                  <div {...css(styles.roadmap_divider)} />
                </div>
              ))}
            </div>
          </Fade>
        </section>
        <section id="mint" {...css(styles.mint)}>
            <Fade top>
              <h1 {...css(styles.mint_header)}>Minting</h1>
              <p {...css(styles.mint_sub_header)}>Every major collection from Digilux will include 10,000 items. Mint prices will be 0.07 ETH.
              <br/><br/>All DigiRings will be revealed once minting is complete.
              </p>
              <div {...css(styles.mint_schedule)}>
                <h2>Schedule</h2>
                <h3>To Be Announced</h3>
                <p {...css(styles.mint_p)}>DigiRings White List Mint</p>
                <h3>To Be Announced</h3>
                <p {...css(styles.mint_p)}>DigiRings Public Mint</p>
              </div>
            </Fade>
        </section>
        <section id="community" {...css(styles.community)}>
          <Fade top>
            <h1 {...css(styles.header)}>Team</h1>
            <p {...css(styles.community_sub_header)}>Driven by the love of blockchain technology and the finer things in life.</p>
            <div {...css(styles.team_members_container)}>
              {teamMembers.map(member => (
                <div {...css(styles.team_member)}>
                  {member.title} - {member.name} ({member.role})
                </div>
              ))}
            </div>
            <div>
              <a key="discord_button_2" href="https://discord.gg/qS2nnRdQ" target="_blank" rel="noopener noreferrer">
                <Button {...css(styles.social_button)} >Join our Discord <img
                  src="/images/social/discord.svg"
                  alt="discord-logo"
                  {...css(styles.social_icon)}
                /></Button>
              </a>
              <a key="twitter_button" href="https://twitter.com/DigiluxNFT" target="_blank" rel="noopener noreferrer">
                <Button {...css(styles.social_button)} >Follow on Twitter <img
                  src="/images/social/twitter.svg"
                  alt="twitter-logo"
                  {...css(styles.social_icon)}
                /></Button>
              </a>
            </div>
          </Fade>
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
    textAlign: "center",
    "@media (max-width: 1000px)": {
      height: "600px",
    },
    "@media (max-width: 500px)": {
      height: "450px",
    }
  },
  intro_logo: {
    height: "150px",
    margin: "40px auto 0 auto",
    display: "block",
    "@media (max-width: 1000px)": {
      height: "120px"
    },
    "@media (max-width: 500px)": {
      height: "90px"
    }
  },
  intro_text: {
    margin: "-30px auto",
    maxWidth: "95%",
    "@media (max-width: 1000px)": {
      fontSize: "30px"
    },
    "@media (max-width: 500px)": {
      fontSize: "26px"
    }
  },
  intro_text_p: {
    fontWeight: "300px",
    fontSize: "24px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "30px auto 0 auto",
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
  social_icon: {
    marginLeft: "5px",
    height: "10px",
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
    width: "600px",
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
  roadmap_header: {
    fontSize: "36px",
    "@media (max-width: 1000px)": {
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      fontSize: "28px"
    }
  },
  roadmap_sub_header: {
    fontSize: "18px",
    margin: "-15px auto",
    width: "650px",
    "@media (max-width: 700px)": {
      width: "450px",
      fontSize: "16px"
    },
    "@media (max-width: 500px)": {
      width: "90%",
      fontSize: "14px"
    }
  },
  roadmap_container: {
    margin: "50px auto 0 auto",
    width: "95%"
  },
  roadmap_section_container: {
    width: "95%",
    margin: "auto",
    float: "left"
  },
  roadmap_section: {
    padding: "40px 20px",
    "@media (max-width: 500px)": {
      padding: "30px 20px"
    }
  },
  roadmap_dot: {
    height: "70px",
    width: "70px",
    display: "inline-block",
    backgroundColor: color.gold,
    borderRadius: "50%",
    verticalAlign: "top",
    "@media (max-width: 1000px)": {
      height: "60px",
      width: "60px"
    },
    "@media (max-width: 500px)": {
      height: "50px",
      width: "50px"
    }
  },
  roadmap_dot_text: {
    color: color.primary,
    fontSize: "24px",
    margin: "20px auto",
    "@media (max-width: 1000px)": {
      fontSize: "22px",
      margin: "16px auto"
    },
    "@media (max-width: 500px)": {
      fontSize: "20px",
      margin: "12px auto"
    }
  },
  roadmap_text: {
    fontSize: "20px",
    textAlign: "left",
    display: "inline-block",
    margin: "auto 0 auto 20px",
    width: "75%",
    "@media (max-width: 1000px)": {
      fontSize: "18px",
    },
    "@media (max-width: 500px)": {
      fontSize: "14px",
    }
  },
  roadmap_divider: {
      display: "block",
      height: "1px",
      border: "0",
      borderTop: "1px solid #ffffff",
      opacity: "0.5",
      margin: "1em auto",
      padding: "0",
      width: "60%"
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
    padding: "60px 0",
    overflow: "auto",
    backgroundColor: color.secondary,
    color: color.primary
  },
  header: {
    fontSize: "36px",
    "@media (max-width: 1000px)": {
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      fontSize: "28px"
    }
  },
  community_sub_header: {
    margin: "-15px auto",
    fontSize: "18px",
    "@media (max-width: 1000px)": {
      fontSize: "16px"
    },
    "@media (max-width: 500px)": {
      width: "90%",
      fontSize: "14px"
    }
  },
  team_members_container: {
    padding: "40px 0",
    margin: "auto",
    "@media (max-width: 500px)": {
      width: "90%",
    }
  },
  team_member: {
    opacity: "0.5",
    margin: "10px auto",
    fontSize: "20px",
    "@media (max-width: 1000px)": {
      fontSize: "18px"
    },
    "@media (max-width: 500px)": {
      fontSize: "14px"
    }
  },
  social_button: {
    display: "inline-block",
    padding: "8px",
    margin: "15px",
    backgroundColor: color.gold,
    color: color.white,
    height: "45px",
    width: "220px"
  }
}))(Home);