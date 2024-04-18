import React from "react";
import RoutesApp from "./routes/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <>
            <RoutesApp />
            <ToastContainer />
        </>
    );
}

export default App;