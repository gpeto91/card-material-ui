import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import CardComponent from "./components/Card";

import "./styles.css";

function App() {
  return (
    <Fragment>
      <CardComponent
        imageUrl="https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&h=350"
        title="Título 1"
      />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
