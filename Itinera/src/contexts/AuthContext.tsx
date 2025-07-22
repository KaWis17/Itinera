import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  user: any;
  login: (user: any) => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreUser = async () => {
      // TODO: Load user from AsyncStorage or secure store
      setUser(null); // Replace with user if exists
      setLoading(false);
    };
    restoreUser();
  }, []);

  const login = (user: any) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
