import { useState } from "react";
import { createContext } from "react";

const ModalContext = createContext()

function ModalProvider({children})
{
    const[modal,setModal] = useState(false)
    const[loading,setLoading] = useState(true)

    return(
        <ModalContext.Provider value={{loading,setLoading,modal,setModal}}>{children}</ModalContext.Provider>
    )
}
export {ModalContext,ModalProvider}