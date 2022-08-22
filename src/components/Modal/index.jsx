
import {Dialog,DialogActions,DialogContent, DialogTitle,FormControl,Input,InputLabel,Button, InputBase, ThemeProvider, FilledInput,Select,MenuItem, Typography, IconButton, FormHelperText} from "@mui/material"
import { useContext } from "react"
import {ModalContext} from "../../contexts/ModalProvider"
import {toastContext} from "../../contexts/ToastProvider"
import { userContext } from "../../contexts/UserProvider"
import CloseIcon from '@mui/icons-material/Close';
import {Theme} from "./style"
import { useState } from "react";
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { useRef } from "react";
import Tecs from "../../models/Tecs"
import Api from "../../services/api";
function Modal()
{
    const {tecs,setTecs} = useContext(userContext)
    const {modal,setModal} = useContext(ModalContext)
    const {toastTecError,setToastTecError,toastTec,setToastTec} = useContext(toastContext)
    const [select,setSelect] = useState("")
    const selectInput = useRef()
    const schema = yup.object().shape(
        {
            nome : yup.string().required("Digite o nome da tecnologia"),
            status : yup.string().required("Selecione um status")
        })
    const {register,handleSubmit,formState : {errors},setValue} = useForm(
        {
             resolver : yupResolver(schema)
        })
    return(
    <ThemeProvider theme={Theme}>
        <Dialog open = {modal ? true : false}>
            <DialogTitle sx = {{padding : "1rem"}}>
                Adicionar tecnologia
                <IconButton onClick = {()=> setModal(false)} sx = {{color : "var(--gray-0)",position : "absolute",top : 8,right : 0}}>
                    <CloseIcon></CloseIcon>
                </IconButton>
            </DialogTitle>
            <form onSubmit={handleSubmit(async(data)=>
                {
                   const {nome,status} = data
                   const newTec = new Tecs(nome,status)
                   try
                   {
                        await Api.post("/users/techs",newTec)
                        const {data : {techs}} = await Api.get("/profile")
                        setTecs(techs)
                        setToastTec(true)
                        setModal(false)
                   }
                   catch
                   {
                        setToastTecError(true)
                   }
                    
                })} style={{display : "flex",flexFlow : 'column'}}>
                <FormControl>
                    <InputLabel variant="outlined" htmlFor="nameTec">
                        Nome
                    </InputLabel>
                    <FilledInput inputProps={{...register("nome")}} id= "nameTec">

                    </FilledInput>
                    {errors.nome?.message && <FormHelperText sx = {{fontWeight : 600}} error>{errors.nome.message}</FormHelperText>}
                    </FormControl>
                <FormControl>
                    <InputLabel  htmlFor="status">
                        Selecionar Status
                    </InputLabel>
                    <Select id = "status" {...register("status")} onChange={(eve)=> 
                    {
                        setSelect(eve.target.value)
                        setValue("status",eve.target.value,{ shouldValidate: true })
                    }} value={select} variant="filled" labelId="status">
                        <MenuItem value={`Iniciante`}>Iniciante</MenuItem>
                        <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
                        <MenuItem value={"Avançado"}>Avançado</MenuItem>
                    </Select>
                    {errors.status?.message && <FormHelperText sx = {{fontWeight : 600}} error>{errors.status.message}</FormHelperText>}
                </FormControl>
            <DialogActions>
                <Button type="submit" color = "primary" sx={{width : "100%"}} variant = "contained">
                    <Typography variant="body1">Adicionar</Typography>
                </Button>
            </DialogActions>
            </form>
        </Dialog>
    </ThemeProvider>
    )
}
export default Modal