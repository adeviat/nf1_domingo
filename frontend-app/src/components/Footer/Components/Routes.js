import React, {Component} from 'react';
import { Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';

import Job from "./Job";
import GlovoBusiness from "./GlovoBusiness";
import AssociatedEstablishments from "./AssociatedEstablishments";
import Dealers from "./Dealers";
import Frequentquestions from "./Frequentquestions";
import Contacts from "./Contacts";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Instagram from "./Instagram";
import HomePage from "../../../Views/HomePage/HomePage";
import App from "../../../App";
import StoresView from "../../../Views/StoresView/StoresView";
import {StoresProvider} from "../../../Views/StoresView/Stores/Stores.container";
import {ProductList, ProductListRoute} from "../../ProductList/ProductList";
import {CartProvider} from "../../CartContainer/CartContainer";

const Routes = () =>{
   return(
        <BrowserRouter>
          <div>
          <Switch>
              {/*  <Route path='/Empleo' component={Job}/>
            <Route path='/GlovoBusiness' component={GlovoBusiness} />
            <Route path= '/Establicimientosasociados' component={AssociatedEstablishments} />
            <Route path= '/Repartidores' component={Dealers} />
            <Route path= '/Preguntasfrecuentes' component={Frequentquestions} />
            <Route path= '/Contacto' component={Contacts} />
            <Route path= '/Terminosycondiciones' component={TermsAndConditions} />
            <Route path= '/Politicadeprivacidad' component={PrivacyPolicy} />
            <Route path= '/Facebook' component={Facebook} />
            <Route path= '/Twitter' component={Twitter} />
            <Route path= '/Instagram' component={Instagram} />*/}
            <Route exact path= '/' component={HomePage} />
            <Route path= '/stores/:category' component={StoresView} />
            <Route path= '/App' component={App} />
            <CartProvider>
                <Route exact path="/store/:storeId" component={ProductList} />
            </CartProvider>
         </Switch>

        </div>

        </BrowserRouter>
);
}
export default Routes;
