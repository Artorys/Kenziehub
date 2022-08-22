import { createContext, useState } from "react";

const authContext = createContext()

function AuthProvider({children})
{
    const [user,setUser] = useState(false)
    return(
        <authContext.Provider value={{user,setUser}}>{children}</authContext.Provider>
    )
}
export {authContext,AuthProvider}