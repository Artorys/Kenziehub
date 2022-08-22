import {ToastProvider} from "./ToastProvider";
import {AuthProvider} from "./AuthProvider"
import {UserProvider} from "./UserProvider";
import {ModalProvider} from "./ModalProvider"
import { ReactElement } from "react";
interface IContext
{
    children : ReactElement
}
function ContextsProvider({children} : IContext)
{
    return(
        <>
        <AuthProvider>
            <UserProvider>
                <ToastProvider>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </ToastProvider>
            </UserProvider>
        </AuthProvider>
        </>
    )
}
export default ContextsProvider