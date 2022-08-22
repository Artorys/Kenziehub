import {createRoot} from "react-dom/client"
import React from "react"
import App from "./app"
import Reset from "./styles/Reset"
import Components from "./styles/Components"
import { BrowserRouter } from "react-router-dom"
const root = createRoot(document.querySelector("#root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Components></Components>
            <Reset></Reset>
            <App></App>
        </BrowserRouter>
    </React.StrictMode>
)