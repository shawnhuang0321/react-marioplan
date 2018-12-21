import React from 'react';

// react-router
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// actions
import { signOut } from '../../store/actions/authAction';

const SignInLink = (props) => {
  const { initials } = props.profile;
  return (
    <ul className="right">
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to='/' className="btn btn-floating pink lighten-1">{ initials }</NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: (e) => {
      e.preventDefault();
      return dispatch(signOut());
    },
  }
}

export default connect(null, mapDispatchToProps)(SignInLink);