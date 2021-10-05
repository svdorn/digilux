import React from "react";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import Social from "./Social";
import { css, withStyles } from "../withStyles";

function Footer({ styles }) {
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.social)}>
        <Social />
      </div>
      <div {...css(styles.by)}>
        <Icon {...css(styles.icon)}>code</Icon> with{" "}
        <Icon {...css(styles.icon)}>favorite</Icon> by Digilux
        <div>Contact us at info@digilux.io</div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    height: "130px",
    backgroundColor: color.primary,
    textAlign: "center"
  },

  social: {
    padding: "30px 0 10px"
  },

  by: {
    color: color.white
  },

  icon: {
    verticalAlign: "middle"
  }
}))(Footer);
