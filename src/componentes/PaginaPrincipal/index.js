import React from 'react';
import Topo from '../Topo';
import Formulario from '../Fomulario';
import Ofertas from '../Ofertas';
import Rodape from '../Rodape';


export default function PaginaPrincipal(){
    return(
        <div>
            <Topo/>
            <Formulario/>
            <Ofertas/>
            <Rodape/>
        </div>
    );
}