import { Button, ThemeProvider,IconButton} from "@mui/material"
import { useEffect,useContext, ReactElement } from "react"
import { Link, Navigate } from "react-router-dom"
import Api from "../../services/api"
import {ButtonStyled, DashboardStyled,ThemeButton,ThemeButtonIcon} from "./style"
import {authContext} from "../../contexts/AuthProvider"
import {userContext} from "../../contexts/UserProvider"
import AddIcon from '@mui/icons-material/Add';
import {ModalContext} from "../../contexts/ModalProvider"
import {toastContext} from "../../contexts/ToastProvider"
import Modal from "../../components/Modal"
import DeleteIcon from '@mui/icons-material/Delete';
import { Skeleton,Box } from '@mui/material';

function Dashboard() : ReactElement
{
    const {dataUser,tecs,setTecs} = useContext(userContext)
    const {toastTecDelete,setToastTecDelete} = useContext(toastContext)
    const tecsCheck = tecs.length == 0
    const {modal,setModal,setLoading,loading} = useContext(ModalContext)
    const {name,course_module} = dataUser

    function logout()
    {
        localStorage.clear()
    }
    useEffect(()=>
    {
        async function  getTecs()
        {
            try
            {
                const {data : {techs}} = await Api.get("/profile")
                setTecs(techs)
            }
            catch
            {

            }
            finally
            {
                setLoading(false)
            }   
        }
        getTecs()
    },[])
    return(
        <DashboardStyled>
            <Modal></Modal>
            <header>
                <nav>
                    <h1>
                        Kenzie Hub
                    </h1>
                    <ThemeProvider theme={ThemeButton}>
                        <Link onClick={logout} to={"/login"}>
                            <ButtonStyled variant="contained">Sair</ButtonStyled>
                        </Link>
                    </ThemeProvider>
                </nav>
            </header>
            <main>
                <div className="container">
                    <section className="user_section">
                        <div className="user_box">
                            <h2>
                                Ol??,{name}
                            </h2>
                            <p>
                                {course_module}
                            </p>
                        </div>
                    </section>
                    <section className="content_section">
                        <div className="content_box">
                            <div className="content_add">
                                <p className="add_name">Tecnologias</p>
                                <p onClick={()=> 
                                {
                                    setModal(true)            
                                }} className="add"><AddIcon></AddIcon></p>
                            </div>
                            <ThemeProvider theme={ThemeButtonIcon}>
                            {
                                        loading
                                        ? <>
                                            <Box sx={{width: "100%" }}>
                                                <Skeleton />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation={false} />
                                            </Box>
                                            <Box sx={{width: "100%" }}>
                                                <Skeleton />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation={false} />
                                            </Box>
                                            <Box sx={{width: "100%" }}>
                                                <Skeleton />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation={false} />
                                            </Box>
                                            </>
                                        :
                                        <ul className="content_tecs">
                                            {!tecsCheck ? tecs.map(({id,title,status})=>
                                            {
                                                return (
                                                <li key = {id} className="tecs">
                                                    <p className="tec_name">{title}</p>
                                                    <div className="tecs_remove">
                                                        <p className="tec_status">{status}</p>
                                                        <IconButton color="primary" onClick={async()=>
                                                            {
                                                                try
                                                                {
                                                                    await Api.delete(`/users/techs/${id}`)
                                                                    const {data : {techs}} = await Api.get("/profile")
                                                                    setTecs(techs)
                                                                    setToastTecDelete(true)
                                                                }
                                                                catch
                                                                {
                                                                }
                                                            }}><DeleteIcon></DeleteIcon></IconButton>
                                                    </div>
                                                </li>
                                                )
                                            }): <p className = "addTec">Adicione Tecnologias...</p>}           
                                        </ul>
                                }  
                            </ThemeProvider>
                        </div>
                    </section>
                </div>
            </main>
        </DashboardStyled>
    )
}
export default Dashboard