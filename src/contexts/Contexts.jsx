import {ToastProvider} from "./ToastProvider";
import {AuthProvider} from "./AuthProvider"
import {UserProvider} from "./UserProvider";
import {ModalProvider} from "./ModalProvider"
import { ReactElement } from "react";

function ContextsProvider({children})
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