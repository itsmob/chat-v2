import { AuthProvier } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import RouteProtector from './components/RouteProtector';
import Login from './pages/Login';
import Hero from './pages/Hero';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <AuthProvier>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Login />} />

          <Route element={<RouteProtector />}>
            <Route path='/chat' element={<ChatPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvier>
  );
}

export default App;
