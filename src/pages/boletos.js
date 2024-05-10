import React, { useState, useEffect } from 'react';
import './boletos.css';
import HeaderBoletos from '../components/header/index';
import Carregando from '../components/carregando';

const Boletos = () => {
    const [idioma, setIdioma] = useState(false);
    const [isIdioma, setIsIdioma] = useState(true);

    const verificaIdioma = () => {
        const savedUsuario = localStorage.getItem("usuario");
        if (savedUsuario) {
            const usuarioObj = JSON.parse(savedUsuario)
            setIdioma(usuarioObj.idioma === 'BR' ? false : true);
        }
        setIsIdioma(false)
    }

    useEffect(() => {
        const intervalId = setInterval(verificaIdioma, 100);

        // Certificar-se de limpar o intervalo quando o componente for desmontado
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='container-boletos'>
            {isIdioma ? (
                <div className='dashboard-boletos'>
                    <Carregando />
                </div>
            ) : (
                <><HeaderBoletos idioma={idioma} />
                    <div className='dashboard-boletos'>
                        {/* <img src={Contratos}></img> */}
                    </div>
                </>
            )}
        </div>

    )
}

export default Boletos;