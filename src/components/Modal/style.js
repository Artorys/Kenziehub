import { createTheme, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Input } from "@mui/material";

export const Theme = createTheme(
    {
        palette : 
        {
            primary : 
            {
                main : "#ff577f",
            }
        },
        typography : 
        {
            body1 : 
            {
                fontWeight : 700,
            }
        },
        components: 
        {
            MuiFilledInput : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        ".MuiFilledInput-input" :
                        {
                            padding : "1rem",
                            margin : "0rem",  
                            color : "white",
                            borderColor : "red"
                        },
                        "::after" : 
                        {
                            border : "var(--gray-2) 1px solid"
                        }
                    }

                }
            },
            MuiFormControl :
            {
                styleOverrides : 
                {
                    root : 
                    {
                        padding: "1rem",
                    }
                }
            },
            MuiInputLabel : 
            {
                styleOverrides :
                {
                    root : 
                    {
                        padding : "1rem 0rem 1rem 0.5rem",
                        fontWeight : "600",
                        color : "var(--gray-0)",
                        "&.Mui-focused" : 
                        {
                            color : "var(--gray-1)",
                        }
                    }
                }
            },
            MuiDialog : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        ".MuiDialog-paper" : 
                        {
                            backgroundColor : "var(--gray-3)",
                            padding: "1rem"
                        },
                    }
                }
            },
            MuiDialogTitle : 
            {
                styleOverrides : 
                {
                    root: 
                    {
                        color : "var(--gray-0)",
                        fontWeight : "700"
                    }
                }
            },
            MuiSelect : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        ".MuiSelect-icon" : 
                        {
                            color : "var(--gray-0)"
                        },
                        ".MuiSelect-select" : 
                        {
                            color : "var(--gray-0)"
                        },
                        ".MuiSelect-outlined:hover" : 
                        {
                            borderColor : "red"
                        }
                    }
                }
            },
            MuiButton : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        padding : "0.8rem 0.5rem"
                    }
                }
            }
        }
    })