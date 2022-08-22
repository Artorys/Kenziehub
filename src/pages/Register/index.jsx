import { FormHelperText, IconButton,InputAdornment, InputLabel, MenuItem, Select, ThemeProvider,FormControl, AlertTitle, Alert, Snackbar, Dialog, DialogTitle, DialogActions, Button, Icon} from "@mui/material"
import {RegisterStyled,TextFieldStyled,Theme,ButtonStyled,ButtonBack} from "./style"
import EmailIcon from '@mui/icons-material/Email';
import {Visibility,VisibilityOff} from "@mui/icons-material";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Api from "../../services/api"
import RegisterModel from "../../models/Register"
import LoginIcon from '@mui/icons-material/Login';
import { useContext } from "react";
import {toastContext} from "../../contexts/ToastProvider"
import Toast from "../../components/Toast";

function Register()
{
    const [password,setPassword] = useState(false)
    const [confirm,setConfirm] = useState(false)
    const [modulo,setModulo] = useState("")
    const inputPassword = useRef()
    const inputConfirm = useRef()
    const inputEmail = useRef()
    const nomeInput = useRef()
    const contatoInput = useRef()
    const {toastRegisterError,setToastRegisterError,toastRegister,setToastRegister,dialog,setDialog} = useContext(toastContext)
    const navigate = useNavigate()
    const schema = yup.object().shape
    (
        {
            nome : yup.string().required("Digite seu nome"),
            email : yup.string().required("Digite seu email").email("Digite um email válido"),
            senha : yup.string().required("Digite uma senha").min(8,"Mínimo 8 caracteres ").test(
                {
                    message : "Necessário ter letras maiúsculas e minúsculas,números e ao menos um símbolo",
                    test : function(senha)
                    {
                        if(senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/g))
                        {
                            return true
                        }
                        else
                        {
                            return false
                        }
                    }
                }),
            confirmarSenha : yup.string().test(
                {
                    message : "A senha digitada não coincide",
                    test: function(confirmarSenha)
                    {
                        if(confirmarSenha == this.parent.senha)
                        {
                            return true
                        }
                        else
                        {   
                            return false
                        }
                    } 
                }),
            bio : yup.string().required("Digite sua bio"),
            contato : yup.string().required("Digite seu contato"),
            modulo : yup.string().required("Selecione seu módulo").test(
                {
                    message : "Selecione seu módulo",
                    test : (value)=> !(value == "")
                })
        }
    )
    const {register,handleSubmit,formState : {errors}} = useForm(
        {
            resolver : yupResolver(schema)
        })
        
    return(
        <RegisterStyled>
            <ThemeProvider theme={Theme}>
                <header>
                    <h1>Kenzie Hub</h1>
                    <Link to="/login">
                        <ButtonBack color="gray3" variant="contained">Voltar</ButtonBack>
                    </Link>
                </header>
            </ThemeProvider>
            <div className="login__container">
                <div className="box_title">
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis,vamos nessa</p>
                </div>
                <form autoComplete="off" onSubmit={handleSubmit((data)=>
                {
                    const {nome,email,confirmarSenha,bio,contato,modulo} = data
                    const userRegister = new RegisterModel(email,confirmarSenha,nome,bio,contato,modulo)
                    Api.post("/users",userRegister).catch((err)=>
                    {
                        if(err.response)
                        {
                            const {message} = err.response.data
                            if(message != "")
                            {
                                setToastRegisterError((error)=> !error)
                                setTimeout(() => {
                                setDialog((error)=> !error)
                                },1000);
                            }
                        }
                    }).then(function(res)
                    {
                        if(res)
                        {
                            if(res.status == 201)
                            {
                                setToastRegister((toaster)=> !toaster)                   
                                setTimeout(()=>
                                {
                                    navigate("/login",{state : 
                                        {
                                            email : email,
                                            senha : confirmarSenha,
                                        }})
                                },2000)
                            }
                        }
                    })
                    
                })}>
                    <div className="login__box">
                        <ThemeProvider theme={Theme}>

                            <div className="box_name">
                                <TextFieldStyled inputRef={nomeInput} className="div_input" inputProps={{...register("nome")}} label = "Nome" InputProps = {{className : "input",startAdornment : <InputAdornment onClick = {()=> nomeInput.current.focus()} position="start"><PersonIcon color="white"></PersonIcon></InputAdornment>}}>

                                </TextFieldStyled>
                                {errors.nome?.message && <FormHelperText error>{errors.nome.message}</FormHelperText> }
                            </div>
                            <div className="box_email">
                                <TextFieldStyled  inputRef={inputEmail} className="div_input" inputProps={{...register("email")}}  InputProps={{className : "input",startAdornment : <InputAdornment onClick={()=> 
                                    {
                                        inputEmail.current.focus()
                                    }} position="start"><EmailIcon color="white"></EmailIcon></InputAdornment> }} label = "Email"></TextFieldStyled>
                                {errors.email?.message && <FormHelperText error>{errors.email.message}</FormHelperText> }
                            </div>
                            <div className="box_senha">
                                <TextFieldStyled className="div_input" inputProps={password ? {ref : inputPassword,type : "text"} : {ref : inputPassword,type : "password"}} InputProps={{...register("senha"),className : "input",endAdornment : <IconButton onClick={()=> 
                                {
                                    setPassword((oldPassword)=> !oldPassword)
                                    inputPassword.current.focus()
                                }} 
                                color="white" edge = "end">{password ? <VisibilityOff color = "white"></VisibilityOff>:<Visibility color="white"></Visibility>}</IconButton> }} label = "Senha"></TextFieldStyled>
                                {errors.senha?.message && <FormHelperText error>{errors.senha.message}</FormHelperText>}
                            </div>
                            <div className="box_senha">
                                <TextFieldStyled className="div_input" inputProps={confirm ? {ref : inputConfirm,type : "text"} : {ref : inputConfirm,type : "password"}} InputProps={{...register("confirmarSenha"),className : "input",endAdornment : <IconButton onClick={()=> 
                                {
                                    setConfirm((oldPassword)=> !oldPassword)
                                    inputConfirm.current.focus()
                                }} 
                                color="white" edge = "end">{confirm ? <VisibilityOff color = "white"></VisibilityOff>:<Visibility color="white"></Visibility>}</IconButton> }} variant = "outlined" placeholder="Confirmar senha"></TextFieldStyled>
                                {errors.confirmarSenha?.message && <FormHelperText error>{errors.confirmarSenha.message}</FormHelperText>}
                            </div>
                            <div className="box_bio">
                                <TextFieldStyled inputProps={{...register("bio")}} className="div_input" placeholder="Digite algo sobre voce" label = "Bio">

                                </TextFieldStyled>
                                {errors.bio?.message && <FormHelperText error>{errors.bio.message}</FormHelperText>}
                            </div>
                            <div className="box_contato">
                            <TextFieldStyled inputRef = {contatoInput} placeholder="Método de contato" inputProps={{...register("contato")}} InputProps={{startAdornment : <InputAdornment onClick = {()=> contatoInput.current.focus()} position = "start"><ContactPhoneIcon color = "white"></ContactPhoneIcon></InputAdornment>}} className="div_input" label = "Contato">
                    
                            </TextFieldStyled>
                            {errors.contato?.message && <FormHelperText error>{errors.contato.message}</FormHelperText>}
                            </div>
                            <div className="box_modulo">
                            <TextFieldStyled SelectProps={{onClick : (eve)=>
                            {
                                const {textContent} = eve.target
                                setModulo(textContent)

                            },value : modulo,...register("modulo")}} className="div_input" id="select" label="Modulos" select>
                                    <MenuItem disabled value={"Escolhendo..."}>
                                    Escolhendo...
                                    </MenuItem>
                                    <MenuItem value={"1º Modulo"}>
                                    1º Modulo
                                    </MenuItem>
                                    <MenuItem value={"2º Modulo"}>
                                    2º Modulo
                                    </MenuItem>
                                    <MenuItem value={"3º Modulo"}>
                                    3º Modulo
                                    </MenuItem>
                                    <MenuItem value={"4º Modulo"}>
                                    4º Modulo
                                    </MenuItem>
                                    <MenuItem value={"5º Modulo"}>
                                    5º Modulo
                                    </MenuItem>
                                    <MenuItem value={"6º Modulo"}>
                                    6º Modulo
                                    </MenuItem>
                            </TextFieldStyled>
                            {errors.modulo?.message && <FormHelperText error>{errors.modulo.message}</FormHelperText>}
                            </div>
                            <ButtonStyled type="submit" color = "primary" variant="contained">Cadastrar</ButtonStyled>
                            <Link to="/login">
                                <IconButton color="white"><LoginIcon color="white"></LoginIcon></IconButton>
                            </Link>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        </RegisterStyled>
    )
}
export default Register