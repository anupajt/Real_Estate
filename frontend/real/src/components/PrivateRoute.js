import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => {
  return isAuthenticated && !loading ? <Outlet /> : <Navigate to="/signin" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);





//  import React, {Component} from "react";
//  import {Route, Navigate} from 'react-router-dom';
//  import PropType from 'prop-types';
//  import { connect } from "react-redux";


//  const PrivateRoute = ({ component : component, auth : {isAuthenticated, loading}, ...rest }) => {
//     <Route 
//       {...rest}
//       render={props => !isAuthenticated && !loading ? (<Navigate to='/signin' />) : (<Component {...props} />)}    
//     />
//  }

//  PrivateRoute.propType = {
//     auth : PropType.object.isRequired
//  }
//  const mapStateToProps = state => ({
//     auth : state.auth
//  })

//  export default connect()(PrivateRoute);