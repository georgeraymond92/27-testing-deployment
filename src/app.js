import React from "react";

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Counter from "./components/counter/counter.js";
import "./design/design.scss";
import "./design/core/_base.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Counter />
        <br />
        <br />
        <br />
        <Footer />
      </>
    );
  }
}

export default App;
