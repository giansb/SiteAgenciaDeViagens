import React from "react";
import './style.css'


export default function Ofertas(){
    return(
        <div>
            <section class="ofertas limita-secao">
                <h2><b>Ofertas</b></h2>
                <h3>Com até <b>50%</b> de desconto.</h3>
                <div class="ofertas-imagens">
                    <div class="metade img-principal">
                        <div>
                            <p>Rio de Janeiro</p>
                        </div>
                    </div>
                    <div class="metade tipo2">
                        <div class="quarto image1">
                            <p>Manaus</p>
                        </div>
                    <div class="quarto image2">
                        <p>São Paulo</p>
                    </div>
                    <div class="quarto image3">
                        <p>Rio de Janeiro</p>
                    </div>
                    <div class="quarto image4">
                        <p>Maranhão</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="ofertas limita-secao">
            <h2>Explore a natureza</h2>
            <h3>Viaje conosco e veja o melhor que a natureza tem a oferecer.</h3>
            <div>
                <div class="ofertas-imagens">
                    <div class="metade2 img-principal imagem5">
                        <div class="imgo"></div>
                        <div>
                            <h3>Lençois Maranhenses, Brasil</h3>
                            <span>Ida e volta a partir de R$79</span>
                        </div>
                    </div>
                    <div class="metade2 img-principal imagem6">
                        <div class="imgo tip2"></div>
                        <div>
                            <h3>Cachoeira Santa Bárbara, Brasil</h3>
                            <span>Ida e volta por R$139</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}