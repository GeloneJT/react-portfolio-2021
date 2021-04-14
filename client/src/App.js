// import './App.css';
import { Component } from "react";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
