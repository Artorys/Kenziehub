import { BackdropProps } from "@mui/material";
import { createContext, Dispatch, ReactElement, SetStateAction } from "react";
import { useState } from "react";

interface IToastContext
{
    toastError : boolean;
    toastOk : boolean;
    dialog : boolean;
    toastRegister : boolean;
    toastRegisterError : boolean;
    toastTecError : boolean;
    toastTec : boolean;
    toastTecDelete : boolean;
    setToastError : Dispatch<SetStateAction<boolean>>;
    setToastOk : Dispatch<SetStateAction<boolean>>;
    setDialog : Dispatch<SetStateAction<boolean>>;
    setToastRegister : Dispatch<SetStateAction<boolean>>;
    setToastRegisterError : Dispatch<SetStateAction<boolean>>;
    setToastTecError : Dispatch<SetStateAction<boolean>>;
    setToastTec : Dispatch<SetStateAction<boolean>>;
    setToastTecDelete : Dispatch<SetStateAction<boolean>>;
}
interface IToast
{
    children : ReactElement
}
const toastContext = createContext<IToastContext>({} as IToastContext)

function ToastProvider({children} : IToast)
{
    const [toastError,setToastError] = useState(false)
    const [toastOk,setToastOk] = useState(false)
    const [dialog,setDialog] = useState(false)
    const [toastRegister,setToastRegister] = useState(false)
    const [toastRegisterError,setToastRegisterError] = useState(false)
    const [toastTecError,setToastTecError] = useState(false)
    const [toastTec,setToastTec] = useState(false)
    const [toastTecDelete,setToastTecDelete] = useState(false)
    
    return(
    <toastContext.Provider value={{toastTecDelete,setToastTecDelete,toastTec,setToastTec,toastTecError,setToastTecError,dialog,setDialog,toastRegisterError,setToastRegisterError,toastRegister,setToastRegister,toastError,setToastError,toastOk,setToastOk}}>
        {children}
    </toastContext.Provider>
    )
}
export {ToastProvider,toastContext}