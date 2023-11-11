import './css/Login.css';
import { useUser } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nagivate = useNavigate();
  const { signin } = useUser();
  const [userName, setUserName] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(userName.length >= 3)) return setErrors(['Your username has to have 3 or more characters']);

    signin(userName);
    nagivate('/chat');
  };

  const handleChange = (e) => setUserName(e.target.value);

  //Watch Authentication from userFromStorage
  useEffect(() => {
    const userNameFromStorage = localStorage.getItem('username');
    if (userNameFromStorage) {
      signin(userNameFromStorage);
      nagivate('/chat');
    }
  }, []);

  //Watch Authentication
  //useEffect(() => {
  //  if (isAuthenticated) nagivate('/chat');
  //}, []);

  return (
    <>
      <main className='login-page huge-container'>
        <div className='container'>
          <div className='login-content'>
            <form className='login-form' onSubmit={handleSubmit}>
              <h1 className='login-page__title'>Login</h1>
              <div className='login-form__inputs'>
                <div className='login-form__input'>
                  <label htmlFor='username'>Username</label>
                  <input type='text' id='username' name='username' placeholder='Nickname' onChange={handleChange} />
                </div>
              </div>
              <div className='login-form-buttons'>
                <button>Chat now!</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
