import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "block",
    margin: 5,
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },

  caption: {
    textTransform: "uppercase"
  },

  title: {
    textTransform: "uppercase"
  },

  media: {
    width: "auto",
    height: 300,
    [theme.breakpoints.up("sm")]: {
      width: 1500
    },
    flexBasis: "50%"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%"
  },

  cardText: {
    flex: "1 0 auto",
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0
    }
  }
});

class CardComponent extends Component {
  render() {
    const { classes, imageUrl, title, caption, text, actionLink } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia image={imageUrl} title="Flower" className={classes.media} />
        <CardContent className={classes.content}>
          <div className={classes.cardText}>
            <Typography
              variant="caption"
              className={classes.caption}
              gutterBottom
            >
              {caption}
            </Typography>
            <Typography variant="h6" className={classes.title} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </div>
          <CardActions style={{ padding: 0 }}>
            <Typography variant="body1">
              <a href={actionLink}>Read more</a>
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);
