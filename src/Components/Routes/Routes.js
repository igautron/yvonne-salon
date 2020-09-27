import React from 'react'
import {Route, Router, Switch } from 'react-router-dom'

import Main from './../Path/main/Main'
import AboutSalon from './../Path/about/AboutSalon'
import Service from './../Path/service/Service'
import Shop from './../Path/shop/Shop'
import Contacts from './../Path/contacts/Contacts'


const Routes = () => {
    return (
    <Switch>
            <Route exact path='/main' component={Main} />
            <Route exact path='/about' component={AboutSalon} />
            <Route exact path='/services' component={Service} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/contacts' component={Contacts} />
    </Switch>
    )
}

export default Routes;