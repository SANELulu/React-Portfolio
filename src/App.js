import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import ParticlesBg from "particles-bg";
// import { Fade } from "react-reveal";
function App() {
  return (
    <div>
      <Nav />

      <Welcome />
      <Details />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
