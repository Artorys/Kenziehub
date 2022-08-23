import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext<IModalContext>({} as IModalContext)

export interface IModalContext
{
    modal : boolean;
    setModal : Dispatch<SetStateAction<boolean>>
    loading : boolean;
    setLoading : Dispatch<SetStateAction<boolean>>

}
interface IModal
{
    children : ReactElement
}
function ModalProvider({children} : IModal)
{
    const[modal,setModal] = useState<boolean>(false)
    const[loading,setLoading] = useState<boolean>(true)

    return(
        <ModalContext.Provider value={{loading,setLoading,modal,setModal}}>{children}</ModalContext.Provider>
    )
}
export {ModalContext,ModalProvider}