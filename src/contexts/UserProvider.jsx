import { createContext,useState } from "react";

const userContext = createContext()

function UserProvider({children})
{
    const [dataUser,setDataUser] = useState({})
    const [tecs,setTecs] = useState([])

    return(
        <userContext.Provider value = {{tecs,setTecs,dataUser,setDataUser}}>{children}</userContext.Provider>
    )
}
export {userContext,UserProvider}