import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes} from  "react-router-dom"
import About from "./pages/About";
import Services from "./pages/Services";
import Css from "./pages/Css";
import HTML from "./pages/Html";
import Logo from "./pages/Logo";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services />}/>
        <Route path="css" element={<Css />}/>
        <Route path="html" element={<HTML />}/>
        <Route path="logo" element={<Logo />}/>

      </Routes>

    <Footer />
    </>
  );
}

export default App;
