import './App.css';
import "./Footer.css";
import Footer from "./Footer";
import Navbar from "./components/Navbar";
import Infofooter  from "./components/Infofooter";
import Grid from "./components/Grid";
import "./components/Bodyfooter.css";
import Bodyfooter from "./components/Bodyfooter";
import './App.css';
import Flightsection from "./components/Flightsection";

function App() {
  return (
    <>
    <Bodyfooter/>
    <Footer/>
    
    <Navbar/>
  <Infofooter/>
   <Grid/>
     
    <Flightsection/>
    </>
  );
};

export default App;
