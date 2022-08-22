import Rotas from "./routes"
import ContextsProvider from "./contexts/Contexts"
import Toast from "./components/Toast"
import { ReactElement } from "react"

function App()
{
    return (
        <ContextsProvider>
                <Toast>
                </Toast>
            <Rotas></Rotas>
        </ContextsProvider>
    )
}
export default App