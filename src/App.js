import NavBar from "./components/navBar/navBar";
import Banner from "./components/Banner/banner";
import Card from "./components/Card/card";
import Filter from "./components/filters/filter";
import SimpleAccordian from "./components/accordian/faq";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Card/>
      <Filter/>
      <SimpleAccordian/>
    </div>
  );
}
