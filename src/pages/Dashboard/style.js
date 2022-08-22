import { Button, createStyles, createTheme } from "@mui/material"
import styled from "@emotion/styled"
import { fontWeight } from "@mui/system"

const DashboardStyled = styled.div`
    header
    {
        width: auto;
        height: 100%;
        border-bottom: solid 2px var(--gray-3);
    }
    nav
    {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1
    {
        color: var(--color-primary);
        font-size: 1.4rem;
        font-weight: 800;
    }
    main
    {
        width: 100%;
        height: 100%;
    }
    .container
    {
        width: inherit;
        height: inherit;
    }
    .user_section
    {
        width: auto;
        height: 100%;
        border-bottom: solid 2px var(--gray-3);
    }
    .user_box
    {
        width: auto;
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items:flex-start;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
    }
    .user_section h2
    {
        color : var(--gray-0);
        font-size: 1.4rem;
        font-weight : 700;
    }
    .user_section p
    {
        color : var(--gray-1);
        font-size: 0.9rem;
        font-weight : 700;
    }
    .content_section
    {
        width: 100%;
        height: 100%;
        border-bottom: solid 2px var(--gray-3);
    }
    .content_box
    {
        padding: 1rem;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
    }
    .content_add 
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .content_add  p:nth-of-type(1)
    {
        color : var(--gray-0);
        font-size: 1.2rem;
        font-weight : 700;
    }
    .content_add  p:nth-of-type(2)
    {
        background-color: var(--gray-3);
        display: flex;
        border-radius : 3px;
        padding: 0.5rem;
        color : var(--gray-0);
        font-size: 1.6rem;
        font-weight : 700;
    }
    .content_add  p:nth-of-type(2):hover
    {
        background-color: var(--gray-2);
        cursor: pointer;
    }
    .content_tecs
    {
        width: 100%;
        display: flex;
        flex-flow: column;
        gap : 5px;
        height: max-content;
        padding: 1rem;
        background-color: var(--gray-3);
        border-radius: 10px;
    }
    .tecs
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--gray-4);
        width: 100%;
        padding: 0.8rem 1rem;
        border-radius: 5px;
    }
    .tec_name
    {
        color : var(--gray-0);
        font-size: 1rem;
        font-weight : 600;
    }
    .tec_status
    {
        color : var(--gray-2);
        font-size: 0.9rem;
        font-weight : 600;
    }
    .tecs_remove
    {
        display: flex;
        align-items: center;
        gap : 5px;
    }
    .addTec
    {
        color : var(--gray-0);
        font-size: 1.2rem;
        font-weight : 700;
    }
    @media screen and (min-width: 1024px)
    {
            nav
            {
                margin: 0 8rem;
            }
            .user_box
            {
                margin: 0rem 8rem;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .content_box
            {
                margin: 0 8rem;
            }
        
    }
`
const ButtonStyled = styled(Button)(
    {
        backgroundColor : "var(--gray-3)",
        fontWeight : "600",
    })
const Theme = createTheme(
    {
        typography : 
        {
            fontFamily: "Inter, sans-serif",
            fontSize : 14,
    
        },
        palette : 
        {
            gray1 :
            {
                light: '#F8F9FA',
                main: '#F8F9FA',
                dark: '#F8F9FA',
                contrastText: '#F8F9FA',
            },
            gray3 : 
            {
                dark:  `#343B41`,
                contrastText: '#F8F9FA',
            }
        },

    
    })
export {DashboardStyled,Theme,ButtonStyled}