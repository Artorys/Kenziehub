import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react";

export interface IAuthContext
{
    user : boolean;
    setUser : Dispatch<SetStateAction<boolean>>
}

interface IAuth
{
    children : ReactElement
}
const authContext = createContext<IAuthContext>({} as IAuthContext)

function AuthProvider({children} : IAuth)
{
    const [user,setUser] = useState(false)
    return(
        <authContext.Provider value={{user,setUser}}>{children}</authContext.Provider>
    )
}
export {authContext,AuthProvider}