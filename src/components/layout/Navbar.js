import React from 'react';
import { Link } from 'react-router-dom';

// components
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

// Redux
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  const NavLink = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        { NavLink }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar);