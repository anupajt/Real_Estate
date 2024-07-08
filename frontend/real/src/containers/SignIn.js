import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/Auth';

const SignIn = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) return <Navigate to='/' />;

    return (
        <div className="auth">
            <Helmet>
                <title>Real Estate - Sign In</title>
                <meta name="description" content="signin page" />
            </Helmet>
            <h1 className="auth_title">SignIn</h1>
            <p className="auth_lead">Sign into your account</p>
            <form className="auth_form" onSubmit={e => onSubmit(e)}>
                <div className="auth_form_group">
                    <input className="auth_form_input" type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div className="auth_form_group">
                    <input className="auth_form_input" type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength='6' required />
                </div>
                <button className="auth_form_button" type="submit">Sign In</button>
            </form>
            <p className="auth_authtext">
                Don't have an account?
                <Link className="auth_authtext_link" to='/signup'>Sign Up</Link>
            </p>
        </div>
    );
};

SignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(SignIn);








