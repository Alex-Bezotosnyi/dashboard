import {DarkModeProvider} from "./components/apps/DarkModeContext";
import {Layout} from "./components/apps/Layout";

function App() {
    return (
        <DarkModeProvider>
            <Layout />
        </DarkModeProvider>
    );
}

export default App;
