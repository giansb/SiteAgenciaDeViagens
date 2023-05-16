import React from "react";
import './style.css'

export default function Formulario(){
    return(
        <section class="capa">
            <div class="formulario-div limita-secao">
                <div class="formulario-cab">
                    <img src=".\assets\icons\aviao.png"></img>
                    <h3>Solicite um orçamento</h3>
                </div>
                <div class="formulario-cont">
                    <form method="post" action="https://www.devmedia.com.br/codigos/missao/front-end/agencia-de-viagens/">
                        <h2>Informe seus dados</h2>
                        <div>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="Nome completo"/>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email para contato"/>
                            <label>Celular</label>
                            <input type="tel" name="celular" placeholder="(xx) xxxxx-xxxx"/>
                        </div>

                        <div class="juntos">
                            <div>
                                <label>Data da ida</label>
                                <input type="date" name="partida"/>
                            </div>
                            <div>
                                <label>Data da volta</label>
                                <input type="date" name="chegada"/>
                            </div>
                        </div>
                        <div class="juntos">
                            <div>
                                <label>Origem</label>
                                <select name="origem">
                                    <option value="">Partindo de</option>
                                    <option value="portoalegre">Porto Alegre</option>
                                    <option value="novohamburgo">Novo Hamburgo</option>
                                    <option value="gramado">Gramado</option>
                                    <option value="caxiasdosul">Caxias do Sul</option>
                                </select>
                            </div>
                            <div>
                                <label>Destino</label>
                                <select name="destino">
                                    <option value="">Indo para</option>
                                    <option value="riodejainero">Rio de Janeiro</option>
                                    <option value="santacatarina">Santa Catarina</option>
                                    <option value="saopaulo">São Paulo</option>
                                    <option value="espiritosanto">Espirito Santo</option>
                                </select>
                            </div>
                        </div>
                        <div class="opcoes">
                            <label>Quarto com cama infantil?</label>
                            <div class="case">
                                <div>
                                    <input type="radio" name="infantil" value="sim"/>
                                    <label>Sim</label>
                                </div>
                                <div>
                                    <input type="radio" name="infantil" value="nao"/>
                                    <label>Não</label>
                                </div>
                            </div>
                        </div>
                        <div class="opcoes">
                            <label>Preferências da hospedagem</label>
                            <div class="case">
                                <div>
                                    <input type="checkbox" name="preferencias[]" value="piscina"/>
                                    <label>Piscina</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="preferencias[]" value="wi-fi"/>
                                    <label>WI-FI</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="preferencias[]" value="garagem"/>
                                    <label>Garagem</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="preferencias[]" value="suite"/>
                                    <label>Suite</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Solicitar orçamento</button>
                    </form>
                </div>
            </div>
        </section>
    );
}