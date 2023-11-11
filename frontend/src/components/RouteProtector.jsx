import { useUser } from '../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function RouteProtector() {
  const { isAuthenticated } = useUser();

  return !isAuthenticated ? <Navigate to='login' replace /> : <Outlet />;
}
