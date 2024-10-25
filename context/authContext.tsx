import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, username: string, profileUrl: string) => Promise<void>;
}

interface User {
  // Define the properties of the User object here
  id: string;
  email: string;
  username: string;
  profileUrl: string;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Add your effect logic here

    setTimeout(() => {
      setIsAuthenticated(false);
    } , 3000);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      // Add your login logic here
    } catch (error) {
      // Handle error
    }
  };

  const logout = async (): Promise<void> => {
    try {
      // Add your logout logic here
    } catch (error) {
      // Handle error
    }
  };

  const register = async (email: string, password: string, username: string, profileUrl: string): Promise<void> => {
    try {
      // Add your register logic here
    } catch (error) {
      // Handle error
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be used within AuthContextProvider");
  }
  return value;
};