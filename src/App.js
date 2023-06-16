import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import { first, sec, third, fourth, footerAPI, fifth } from "./data/data";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header first={first} ifExists={true} />
      <Content sec={sec} />
      <Header first={fifth} ifExists={false} />
      <Image third={third} />
      <Reviews fourth={fourth} />
      <Footer footerApi={footerAPI} />
    </div>
  );
}

export default App;
