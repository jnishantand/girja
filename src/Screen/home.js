import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ImageSlider from "../Components/Slider";
import STRINGS from '../constants/strings';
import '../App.css'


function HomePage(){

    return (
        <div>
          <Header />
          <ImageSlider />
          <main className ="mainContent">
            <h1>{STRINGS.WELCOME_MESSAGE}</h1>
            <p>{STRINGS.APP_NAME}</p>
          </main>
          <Footer />
        </div>
      );
    

}

export default HomePage;