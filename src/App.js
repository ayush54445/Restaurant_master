import "./index.css";
import Banner from "./components/Banner";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-screen h-screen overflow-y-auto">
      <Banner />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Footer />
    </div>
  );
}

export default App;
