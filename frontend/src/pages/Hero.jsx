import './css/Hero.css';
import { useEffect } from 'react';
import { useUser } from '../contexts/AuthContext';

export default function Hero() {
  const { signin } = useUser();

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem('username');
    if (userNameFromStorage) {
      signin(userNameFromStorage);
    }
  }, []);

  return (
    <>
      <main className='hero-page huge-container'>
        <div className='container'>
          <div className='hero-content'>
            <h1>Chat app</h1>
            <p>Hi, please welcome to this small app I made =P</p>
            <p>If some part of the app doesnt wanna load then give it a minute or maybe two</p>
            <p>The computers where the server application is running might be down</p>
            <p>
              give it a minute to the computer to boot up {'('}they go off after 30 minutes with no queries to save
              energy{')'}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
