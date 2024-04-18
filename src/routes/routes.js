import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/boletos">
        <Routes>
            <Route exact path="/avulso" element={<DadosCadastrais />} />
            <Route exact path="/promocional" element={<DadosCadastrais />} />
            <Route exact path="/lote" element={<DadosCadastrais />} />
            <Route exact path="/buscador" element={<DadosCadastrais />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;