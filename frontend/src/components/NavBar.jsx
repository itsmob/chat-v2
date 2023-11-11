import './css/NavBar.css';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/AuthContext';

export default function NavBar() {
  const { isAuthenticated, logout } = useUser();
  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <div className='nav-content'>
            <h3>
              <Link to='/'>Chat app</Link>
            </h3>

            <div className='nav-links'>
              <Link to='chat'>Chat</Link>
              {isAuthenticated && (
                <Link to='/' onClick={logout}>
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
