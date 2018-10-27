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

  media: {
    width: "auto",
    height: 300,
    [theme.breakpoints.up("sm")]: {
      width: 1500
    }
  },

  content: {
    display: "flex",
    flexDirection: "column"
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
    const { classes, imageUrl, title } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia image={imageUrl} title="Flower" className={classes.media} />

        <CardContent className={classes.content}>
          <div className={classes.cardText}>
            <Typography variant="caption" gutterBottom>
              SUSTENTABILIDADE
            </Typography>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              saepe architecto maxime dolores accusantium harum itaque delectus
              iste error velit dolor, corporis officia sed? Debitis modi
              explicabo excepturi repudiandae sequi!
            </Typography>
          </div>
          <CardActions style={{ padding: 0 }}>
            <Typography variant="body1">
              <a href="#">Leia mais</a>
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
