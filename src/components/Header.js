import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";
import Social from "./Social";

const menuItems = [
  { name: "Mission", link: "#mission" },
  { name: "DigiRing", link: "#digiring" },
  { name: "Roadmap", link: "#roadmap" },
  { name: "Mint", link: "#mint" },
  { name: "Community", link: "#community" }
];

class Header extends React.Component {
  render() {
    const { styles } = this.props;

    return (
      <nav {...css(styles.container)}>
        <img
          {...css(styles.logo)}
          src="/images/white_logo_green.png"
          alt="Digilux"
        />
        <div {...css(styles.menu_items)}>
          {menuItems.map(item => (
            <a key={item.name} href={item.link} {...css(styles.menu_item)}>
              {item.name}
            </a>
          ))}
          <div {...css(styles.social)}>
            <Social />
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    padding: "10px 20px 20px",
    "@media (max-width: 000px)": {
      fontSize: "18px",
      width: "500px",
      padding: "15px"
    }
  },

  logo: {
    display: "inline-block",
    float: "left",
    height: "50px"
  },

  social: {
    display: "inline-block",
    marginTop: "3px",
    float: "right"
  },

  menu_items: {
    display: "flex",
    float: "right",
    marginTop: "20px"
  },

  menu_item: {
    padding: "0 15px",
    textDecoration: "none",
    textAlign: "left",
    color: color.white,
    fontWeight: "600",
    opacity: "0.6",
    ":hover": {
      opacity: "1"
    },
    "@media (max-width: 633px)": {
      display: "none"
    }
  }
}))(Header);
