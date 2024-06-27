import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Listings from "./containers/Listings";
import ListingDetail from "./containers/ListingDetail";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

import Layout from "./hocs/Layout";

import {Provider} from 'react-redux';
import Store from "./Store";

import './sass/main.scss';


function App() {
  return (
    
    <Provider store={Store}>
        <Router>
    
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/listings' element={<Listings />} />
              <Route element={<PrivateRoute />}>
                 <Route path="/listings/:id" element={<ListingDetail />} />
              </Route>
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
    </Provider>
  );
}

export default App;