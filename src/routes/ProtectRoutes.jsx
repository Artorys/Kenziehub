import { useContext,useEffect } from "react"
import { Outlet } from "react-router-dom"
import {authContext} from "../contexts/AuthProvider"
import Api from "../services/api"
import {userContext} from "../contexts/UserProvider"

function ProtectRoutes()
{
    const {user,setUser} = useContext(authContext)
    const {dataUser,setDataUser} = useContext(userContext)

    useEffect(()=>
    {
        const token = localStorage.getItem("@TOKEN")
        if(token)
        {
            Api.defaults.headers = 
            {
                "Authorization" : `Bearer ${token}`
            }
        }
        async function  Authentication()
        {
            try
            {
                const {data} = await Api.get(`/profile`)
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
        user && <Outlet></Outlet>
    )
}
export default ProtectRoutes