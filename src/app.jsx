import Rotas from "./routes"
import ContextsProvider from "./contexts/Contexts"
import Toast from "./components/Toast"

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