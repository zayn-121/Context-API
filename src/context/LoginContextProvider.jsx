import { createContext, useState } from "react";

export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    return (
    <LoginContext.Provider value={{user, setUser}}>
        {children}
    </LoginContext.Provider>
    )
}

export default LoginContextProvider
