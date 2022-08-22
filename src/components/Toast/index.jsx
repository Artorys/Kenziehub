import {Snackbar,Alert,Dialog,DialogActions,DialogTitle,Button} from "@mui/material"
import {Link} from "react-router-dom"
import {toastContext} from "../../contexts/ToastProvider";
import {useContext} from "react"

function Toast()
{
    const {toastTecDelete,setToastTecDelete,toastTec,setToastTec,toastError,setToastError,toastOk,setToastOk,dialog,setDialog,toastRegister,setToastRegister,setToastRegisterError,toastRegisterError,toastTecError,setToastTecError} = useContext(toastContext)
    return(
        <>
            <Snackbar anchorOrigin={{vertical : "bottom",horizontal : "center"}} open = {toastError ? true : false} autoHideDuration={6000} onClose = {()=>
                {
                    setToastError((toaster)=> !toaster)
                }}>
                <Alert sx={{ width: '100%' }} severity="warning">
                    Email ou senha incorretos!
                </Alert>
            </Snackbar> 
            <Snackbar anchorOrigin={{vertical : "bottom",horizontal : "center"}} open = {toastOk ? true : false} autoHideDuration = {3000} onClose = {()=>
                {
                    setToastOk((toaster)=> !toaster)
                }}>
                <Alert sx={{ width: '100%' }} severity="success">
                    Logado com sucesso!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{horizontal : "center",vertical : "bottom"}} onClose={()=>
                {
                    setToastRegisterError((toaster)=>!toaster)
                }} open = {toastRegisterError ? true : false} autoHideDuration={6000}>
                <Alert severity="warning" sx={{ width: '100%' }}>
                    Esse email já existe
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{horizontal : "center",vertical : "bottom"}} onClose={()=>
                {
                    setToastRegister((toaster)=>!toaster)
                }} open = {toastRegister ? true : false} autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Registro feito com sucesso!
                </Alert>
            </Snackbar>
            <Dialog onClose={()=>
                {
                    setDialog((dialoger)=> !dialoger)    
                }}open = {dialog ? true : false}>
                <DialogTitle>Deseja logar com este email?</DialogTitle>
                <DialogActions>
                    <Link to={"/login"}><Button onClick={()=>setDialog((dialoger)=> !dialoger)}>Logar</Button></Link> 
                    <Button onClick={()=> setDialog((dialoger)=> !dialoger)}>Cancelar</Button>
                </DialogActions>
            </Dialog>
            <Snackbar anchorOrigin={{horizontal : "center",vertical : "bottom"}} onClose={()=>
                {
                    setToastTecError((toaster)=>!toaster)
                }} open = {toastTecError ? true : false} autoHideDuration={3000}>
                <Alert severity="warning" sx={{ width: '100%' }}>
                    Essa Tecnologia já existe!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{horizontal : "center",vertical : "bottom   "}} onClose={()=>
                {
                    setToastTec((toaster)=>!toaster)
                }} open = {toastTec ? true : false} autoHideDuration={3000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Tecnologia criada com sucesso!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{horizontal : "center",vertical : "bottom   "}} onClose={()=>
                {
                    setToastTecDelete((toaster)=>!toaster)
                }} open = {toastTecDelete ? true : false} autoHideDuration={3000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Tecnologia removida com sucesso!
                </Alert>
            </Snackbar>
            </>
    )
}
export default Toast