// El archivo debe tener el nombre del componente

import { FunctionComponent } from "preact";

type QuoteProps = {
    quote: string;
};

const Quote: FunctionComponent<QuoteProps> = (props) => {
    const {quote} = props;
    
    // El alt es el texto alternativo que se muestra si la imagen no se puede cargar

    return (
    <div class="Contenedor">
        <div class="Imagen"></div>
        <h1 class="Titulo">Random Quote</h1>
        <image src= "https://www.alistdaily.com/wp-content/uploads/2017/10/ezgif.com-optimize-4.gif" alt="Gif tamagochi"></image>   
        <p class="Cita">{quote}</p>
        <br></br>
        <button id="BotonJugueton">Useless button</button>
        <script src="scripts.js"></script>
    </div>
    );
}


export default Quote;