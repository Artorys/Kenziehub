import { Alert, AlertTitle, FormHelperText, IconButton,InputAdornment, Snackbar, ThemeProvider,} from "@mui/material"
import {LoginStyled,TextFieldStyled,ThemeButtonEnter,ThemeButtonRegister,ThemeInput,ButtonStyled,ButtonRegisterStyled} from "./style"
import EmailIcon from '@mui/icons-material/Email';
import { Visibility,VisibilityOff } from "@mui/icons-material";
import { Key, MutableRefObject, useEffect, useRef, useState } from "react";
import {useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Link, useNavigate,useLocation} from "react-router-dom";
import LoginModel from "../../models/Login"
import Api from "../../services/api";
import { useContext } from "react";
import { IToastContext, toastContext } from "../../contexts/ToastProvider";

function Login()
{

    const [password,setPassword] = useState<boolean>(false)
    const [email,setEmail] = useState<boolean>(false)
    const inputPassword = useRef() as MutableRefObject<HTMLInputElement>
    const inputEmail = useRef() as MutableRefObject<HTMLInputElement>
    const {toastError,setToastError,toastOk,setToastOk} = useContext<IToastContext>(toastContext)
    const navigate = useNavigate()
    const location : any = useLocation()
    const schema = yup.object().shape
    (
        {
            email : yup.string().required("Digite seu email").email("Digite um email válido"),
            senha : yup.string().required("Digite sua senha")
        }
    )
    const {register,handleSubmit,formState : {errors},setValue} = useForm(
        {
            resolver : yupResolver(schema)
        })
        useEffect(()=>
        {
            if(location.state)
            {
                const locationState = location.state
                
                const {email : emailUser, senha: senhaUser} = locationState
                if(emailUser && senhaUser)
                {
                    setValue("email", emailUser)
                    setValue("senha",senhaUser)
                }
            }
        },[])
    return(
        <LoginStyled>
            <header>
                <h1>Kenzie Hub</h1>
            </header>
            <div className="login__container">
                <div className="box_title">
                    Login
                </div>
                <form autoComplete="off" onSubmit={handleSubmit((data)=>
                {
                    const {email,senha} = data
                    const loginUser = new LoginModel(email,senha)
                    Api.post("/sessions",loginUser)
                    .catch((err)=>
                    {
                        if(err)
                        {
                            if(err.response.status >= 400)
                            {   
                                setToastError((toaster)=>!toaster)
                            }
                        }
                    }).then((res)=>
                    {
                        if(res)
                        {
                            if(res.status == 200)
                            {
                                const {data} = res
                                setToastOk((toaster)=> !toaster)
                                const {user,token} = data
                                const {id} = user
                                    localStorage.clear()
                                    localStorage.setItem("@TOKEN",token)
                                    localStorage.setItem("@USERID", id)
                                    navigate("/dashboard",
                                    {
                                        state : 
                                        {
                                            user
                                        }
                                    })
                            }
                        }
                    })
                })}>
                    <div className="login__box">
                        <ThemeProvider theme={ThemeInput}>
                            <div className="box_email">
                                <TextFieldStyled inputRef={inputEmail} className="div_input" inputProps={{...register("email")}}  InputProps={{className : "input",startAdornment : <InputAdornment onClick={()=> 
                                    {
                                        setEmail((oldEmail)=> !oldEmail)
                                        inputEmail.current.focus()
                                    }} position="start"><EmailIcon color="primary"></EmailIcon></InputAdornment> }} label = "Email"></TextFieldStyled>
                                {errors.email?.message && <FormHelperText error>{`${errors.email.message}`}`</FormHelperText> }
                            </div>
                            <div className="box_senha">
                                <TextFieldStyled className="div_input" inputProps={password ? {ref : inputPassword,type : "text"} : {ref : inputPassword,type : "password"}} InputProps={{...register("senha"),className : "input",endAdornment : <IconButton color="primary" onClick={()=> 
                                {
                                    setPassword((oldPassword)=> !oldPassword)
                                    inputPassword.current.focus()
                                }} edge = "end">{password ? <VisibilityOff></VisibilityOff>:<Visibility></Visibility>}</IconButton> }} label = "Senha"></TextFieldStyled>
                                {errors.senha?.message && <FormHelperText error>{`${errors.senha.message}`}</FormHelperText>}
                            </div>
                        </ThemeProvider>
                        <ThemeProvider theme = {ThemeButtonEnter}>
                            <ButtonStyled type="submit" color = "primary" variant="contained">Entrar</ButtonStyled>
                        </ThemeProvider>
                    </div>
                    <div className="register__box">
                        <ThemeProvider theme={ThemeButtonRegister}>
                            <FormHelperText className="p">Ainda não possui uma conta?</FormHelperText>
                            <Link to="/register">
                                <ButtonRegisterStyled  className="button" variant="contained" >Cadastre-se</ButtonRegisterStyled>
                            </Link>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        </LoginStyled>
    )
}
export default Login