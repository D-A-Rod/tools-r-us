

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showSignInForm, setShowSignInForm] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
  };

  return (
    <div className='sign-in-form-container'>
      {showSignInForm && (
        <form onSubmit={handleSubmit} name={name} className='form'>
          <div className='form-group'>
            <label htmlFor="username">
              <small>Username</small>
            </label>
            <input name="username" type="text" />
          </div>
          <div className='form-group'>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div className='form-group'>
            <button type="submit">{displayName}</button>
          </div>
          {error && <div className='error-message'>{error}</div>}
        </form>
      )}

      <button onClick={toggleSignInForm}>Login</button>
    </div>
  );
};

export default AuthForm;
