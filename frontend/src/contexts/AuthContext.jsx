import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useUser() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUser must be within an UserProvider');
  }
  return context;
}

export const AuthProvier = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signin = (Username) => {
    setUser({ name: Username });
    setIsAuthenticated(true);
    localStorage.setItem('username', Username);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('username');
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          isAuthenticated,
          signin,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
