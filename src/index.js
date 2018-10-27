import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "@material-ui/core";
import CardComponent from "./components/Card";

import "./styles.css";

function App() {
  return (
    <Grid container style={{ maxWidth: 1410, margin: "auto" }}>
      <Grid item md={6} sm={12}>
        <CardComponent
          imageUrl="https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&h=350"
          title="Title 1"
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <CardComponent
          imageUrl="https://t1.ev.ltmcdn.com/es/posts/6/6/9/img_cosas_interesantes_sobre_los_girasoles_966_600.jpg"
          title="Title 2"
        />
      </Grid>
    </Grid>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
