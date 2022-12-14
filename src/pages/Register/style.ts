import {makeStyles} from "@mui/styles";
import styled from "@emotion/styled"
import { Button, createTheme,TextField,OutlinedInput } from "@mui/material"

const fontSize = 0.8

const RegisterStyled = styled.div`
    
    position: absolute;
    top: 0;
    bottom : 0;
    left : 0;
    right : 0;
    margin : 1rem auto;
    width: 80%; 
    max-width: 350px;
    min-width : 250px;
    height: fit-content;

    header
    {
        color: var(--color-primary);
        font-size: 1.4rem;
        font-weight: 800;
        margin: 1rem;
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    form
    {   
        width: 100%;
        height: max-content;
        padding: 1rem;
        font-family: 'Inter', sans-serif;
    }
    .login__container
    {
        background-color: var(--gray-3);
        padding:1rem 0 0 0;
        border-radius: 6px;
        width: 100%;
        height : 100%;
    }
    .box_title
    {
        color: var(--gray-0);
        font-weight: 800;
        text-align: center;
        margin: 1rem 0;
    }
    .box_title p
    {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 0.8rem;
    }
    .login__box
    {
        display: flex;
        align-items: center;
        flex-flow: column wrap;
        gap: 1rem;
        width: 100%;
        height: 100%;
    }
    .box_name
    {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.2rem;
    }
    .box_email
    {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.2rem;
    }
    .box_senha
    {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.2rem;
    }
    .box_bio
    {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.2rem;
    }
    .box_contato
    {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.2rem;
    }
    .box_modulo
    {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.2rem;
    }
    .p
    {
        color: white;
    }
    .div_input
    {
        width: 100%;
    }
    .input
    {
        width: 100%;
        height : 50px
    }
    .register__box
    {
        display: flex;
        flex-flow: column;
        gap: 1rem;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .register__box button
    {
        width : 100%;
    }
`

const TextFieldStyled = styled(TextField)({
    "& label" : 
    {
        color : "var(--gray-0)",
        fontSize : "0.9rem"
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': 
    {
       "&.Mui-focused":
       { 
            backgroundColor : "var(--gray-2)"
        },
        color : "white",
    fontSize : `${fontSize}rem` ,
    "& input[type=password]":
    {
        fontSize : `${fontSize - 0.2}rem`
    },
      '& fieldset': {
        borderColor: 'var(--gray-0)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--gray-0)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--gray-1)',
      },
    },
  });

const ThemeButton = createTheme(
{
    typography : 
    {
        fontFamily: "Inter, sans-serif",
        fontWeightRegular : 700,

    },
    palette : 
    {
        primary: 
        {
            main : '#ff577f',
            contrastText : "#F8F9FA"
        }
    },

})

const ThemeButtonBack = createTheme(
    {
        typography : 
        {
            fontFamily: "Inter, sans-serif",
            fontWeightRegular : 700,
    
        },
        palette : 
        {
            primary: 
            {
                main : '#343B41',
                contrastText : "#F8F9FA"
            }
        },
    
    })

const ThemeInput = createTheme(
    {
        typography : 
        {
            fontFamily: "Inter, sans-serif",
            fontWeightRegular : 700,
    
        },
        palette : 
        {
            primary: 
            {
                main : '#FFF',
                contrastText : "#fff"
            }
        },
    
    })
const ButtonStyled = styled(Button)
(
    
    {
        "&":
        {
            color: "var(--gray-0)",
            fontWeight : 800
        },
    }
)
const ButtonRegisterStyled = styled(Button)
(
    
    {
        "&":
        {
            fontWeight : 600,
            color: "var(--gray-0)",
            backgroundColor : "var(--gray-1)"
        },
        "&:hover" : 
        {
            backgroundColor : "var(--gray-2)"
        }
    }
) 
const ButtonBack = styled(Button)(
    {
        
    })
export {RegisterStyled,TextFieldStyled,ThemeInput,ThemeButton,ThemeButtonBack,ButtonStyled,ButtonRegisterStyled,ButtonBack}