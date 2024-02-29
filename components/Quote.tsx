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
        <p class="Cita">{quote}</p>
        <br></br>
        <br></br>
        <button class="Boton">Useless button</button>
    </div>
    );
}



export default Quote;