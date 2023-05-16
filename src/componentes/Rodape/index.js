import React from "react";
import './style.css'

export default function Rodape(){
    return(
        <footer>
            <div class="rodape limita-secao">
            <div class="box-rodape">
                <h3>Contato</h3>
                <div>
                    <img class="icon" src=".\assets\icons\local.png"/><span>Rio de Janeiro, RJ</span>
                </div>
                <div>
                    <img class="icon" src=".\assets\icons\telefone.png"/><span>Telefone: (21) 9999-9999</span>
                </div>
                <div>
                    <img class="icon" src=".\assets\icons\email.png"/><span>Email: contato@agencia.com.br</span>
                </div>
            </div>
            <div class="box-rodape">
                <h3>Nossas Redes Sociais</h3>
                <div>
                    <img class="icon" src=".\assets\icons\fb.png"/><span>/AgenciaDeViagem</span>
                </div>
                <div>
                    <img class="icon" src=".\assets\icons\ig.png"/><span>@AgenciaDeViagem</span>
                </div>
                <div>
                    <img class="icon" src=".\assets\icons\tt.png"/><span>@AgenciaDeViagem</span>
                </div>
            </div>
        </div>
        </footer>
    );
}