import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Top from './Components/Top/Top'
// import Routes from './ROUTES/Routes'
import Logos from './Components/Logo/Logo'
import Service from './Components/Services/Services'
import Slider from './Components/Slider/Slider'
import Info from './Components/Info/Info'
import Cards from './Components/Cards/Cards'
import Partners from './Components/Partners/Partners'
import Beauty from './Components/Beauty/Beauty'
import Footer from './Components/Footer/Footer'

function App() {
  return (
      <Router>
        <ParallaxProvider>
          <div className="wrapper">
            <Top />
            {/*<Routes/>*/}
            <Logos />
            <Slider />
            <Service />
            <Info />
            <Cards />
            <Partners />
            <Beauty />
            <Footer />
          </div>
        </ParallaxProvider>
      </Router>
  );
}

export default App;
