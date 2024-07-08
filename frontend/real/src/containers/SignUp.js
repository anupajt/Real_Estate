
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setAlert } from '../actions/Alert';
import { signup } from '../actions/Auth';
import PropTypes from 'prop-types';

const SignUp = ({ setAlert, signup, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password !== password2) {
            setAlert("Passwords do not match", 'error');
        } else {
            signup({ name, email, password, password2 });
        }
    };

    if (isAuthenticated) return <Navigate to='/signin' />;

    return (
        <div className="auth">
            <Helmet>
                <title>Real Estate - Sign Up</title>
                <meta name="description" content="signup page" />
            </Helmet>
            <h1 className="auth_title">SignUp</h1>
            <p className="auth_lead">Create your account</p>
            <form className="auth_form" onSubmit={e => onSubmit(e)}>
                <div className="auth_form_group">
                    <input className="auth_form_input" type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                </div>
                <div className="auth_form_group">
                    <input className="auth_form_input" type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div className="auth_form_group">
                    <input className="auth_form_input" type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength='6' required />
                </div>
                <div className="auth_form_group">
                    <input className="auth_form_input" type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={e => onChange(e)} minLength='6' required />
                </div>
                <button className="auth_form_button" type="submit">Sign Up</button>
            </form>
            <p className="auth_authtext">
                Already have an account?
                <Link className="auth_authtext_link" to='/signin'>Sign In</Link>
            </p>
        </div>
    );
};

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp);
