import "./App.scss";

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { SECTIONS } from "./common/constants";
import { Section } from "./components/Section"

function App() {
  console.log(SECTIONS)
  return (
    <div className="App">
      <Header />
      {SECTIONS.map((section, i) => <Section key={i} {...section} />)}
      <Footer />
    </div>
  );
}

export default App;
