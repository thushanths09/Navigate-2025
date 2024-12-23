import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Event_des from './Components/Event_des/Event_des';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import About_us from './Components/About_us/About_us';
import About_ASL from './Components/About_ASL/About_ASL';
import Global_Village from './Components/Global_Village/Global_Village';
import Contacts from './Components/Contact_Card/Contacts';
import VideoSlider from './Components/VideoSlider/VideoSlider';
import Dummy from './Components/dummy/dummy';

const App = () => {
  return (
    <div>
      <Navbar />
      <Dummy/>
      <div className="container">
        <Event_des />
        <Global_Village />
        <About_us />
        <About_ASL />
      </div>
      <FAQ />
      <VideoSlider />
      <Contacts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
