import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Top from './Components/Top/Top'
import Logos from './Components/Logo/Logo'
import Services from './Components/Services/Services'
import Slider from './Components/Slider/Slider'
import Info from './Components/Info/Info'
import Cards from './Components/Cards/Cards'
import Partners from './Components/Partners/Partners'
import Beauty from './Components/Beauty/Beauty'
import Footer from './Components/Footer/Footer'


import AboutSalon from './Components/Path/about/AboutSalon'
import Contacts from './Components/Path/contacts/Contacts'
import Main from './Components/Path/main/Main'
import Photos from './Components/Path/photos/Photos'
import Price from './Components/Path/price/Price'
import Service from './Components/Path/service/Service'

import Cosmetics from './Components/Path/about/cosmetics/Cosmetics'
import Items from './Components/Path/about/items/Items'
import Personal from './Components/Path/about/personal/Personal'

function App() {
  return (
      <Router>
            <Top />
            <Logos />
            <Slider />
            <Switch>
                <Route path='/' exact>
                  <Services />
                  <Info />
                  <Cards />
                  <Partners />
                  <Beauty />
                </Route>
                <Route path='/main'>
                  <Main />
                </Route>
                <Route path='/AboutSalon'>
                  <AboutSalon />
                </Route>
                <Route path='/photos'>
                  <Photos />
                </Route>
                <Route path='/price'>
                    <Price />
                </Route>
                <Route path='/contacts'>
                    <Contacts />
                </Route>
                <Route path='/Service'>
                    <Service />
                </Route>
                <Route path='/Cosmetics'>
                    <Cosmetics />
                </Route>
                <Route path='/Items'>
                    <Items />
                </Route>
                <Route path='/Personal'>
                    <Personal />
                </Route>
            </Switch>
            <Footer />
      </Router>
  );
}

export default App;
