import CTA from "./Components/Pages/CTA";
import Footer from "./Components/Pages/Footer";
import Header from "./Components/Pages/Header";
import Hero from "./Components/Pages/Hero";
import ImageInfo from "./Components/Pages/ImageInfo";
import Images1 from "./Components/Pages/ImagesBlock/Images1";
import Images2 from "./Components/Pages/ImagesBlock/Images2";
import Images3 from "./Components/Pages/ImagesBlock/Images3";
import Info from "./Components/Pages/Info";
import Slider from "./Components/Pages/Slider";
import Team from "./Components/Pages/Team";

import './scss/_Main.scss'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Slider/>
      <Info/>
      <ImageInfo/>
      <Images1/>
      <Images2/>
      <Images3/>

      <Team/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
