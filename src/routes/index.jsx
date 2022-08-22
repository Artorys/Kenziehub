import {Routes,Route,Navigate, Router} from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import ProtectRoutes from "./ProtectRoutes"

function Rotas()
{

    return(
    <Routes>
            <Route path="/" element = {<Navigate to= "/login"></Navigate>}>

            </Route>
            <Route path="/login" element = {<Login></Login>}>
                
            </Route>
            <Route path="/register" element = {<Register></Register>}>
                
            </Route>
            <Route element = {<ProtectRoutes></ProtectRoutes>}>
                <Route path= "/dashboard" element = {<Dashboard></Dashboard>}></Route>
            </Route>

    </Routes>
    )
}
export default Rotas