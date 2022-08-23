import { ReactElement, useContext,useEffect } from "react"
import { Outlet } from "react-router-dom"
import {authContext,IAuthContext} from "../contexts/AuthProvider"
import Api from "../services/api"
import {userContext,IDataUser,IUserContext} from "../contexts/UserProvider"

function ProtectRoutes() : ReactElement
{
    const {user,setUser} = useContext<IAuthContext>(authContext)
    const {dataUser,setDataUser} = useContext<IUserContext>(userContext)

    useEffect(()=>
    {
        const token = localStorage.getItem("@TOKEN")
        if(token)
        {
            Api.defaults.headers.common = 
            {
                "Authorization" : `Bearer ${token}`
            }
        }
        async function  Authentication()
        {
            try
            {
                const {data} = await Api.get<IDataUser>(`/profile`)
                console.log(data)
                setDataUser(data)
                setUser(true)
                
            } catch
            {
                setUser(false)
                localStorage.clear()
            }
        }
        Authentication()
    },[])

    return(
        <>
            {user && <Outlet></Outlet>}
        </>
    )
}
export default ProtectRoutes