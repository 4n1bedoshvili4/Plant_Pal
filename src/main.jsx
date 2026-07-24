import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";


createRoot(document.getElementById('root')).render(

    <AuthProvider>

        <App />

    </AuthProvider>

)