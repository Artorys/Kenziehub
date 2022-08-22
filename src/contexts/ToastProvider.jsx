import { createContext } from "react";
import { useState } from "react";

const toastContext = createContext()

function ToastProvider({children})
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