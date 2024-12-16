import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ImageSlider from "../Components/Slider";
import STRINGS from '../constants/strings';


function HomePage(){


    return (
        <div>
          <Header />
          <ImageSlider />
          <main style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{STRINGS.WELCOME_MESSAGE}</h1>
            <p>{STRINGS.APP_NAME}</p>
          </main>
          <Footer />
        </div>
      );
    

}

export default HomePage;