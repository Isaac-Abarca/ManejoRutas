import  {useState, useContext, createContext } from "react";


interface AuthProciderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({children}:AuthProciderProps) {
    const [isAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);