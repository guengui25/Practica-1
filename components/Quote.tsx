import { FunctionComponent } from "preact";

type QuoteProps = {
    quote: string;
};

const Quote: FunctionComponent<QuoteProps> = (props) => {
    const {quote} = props;
    
    

    // El alt es el texto alternativo que se muestra si la imagen no se puede cargar

    return (
    <div class="Contenedor">
        <img src= "../static/sources/javi-1.jpg" id="JAVI" alt="Foto de Javi"></img>
        <h1 class="Titulo">Random Quote</h1>

        <img id="Elvis" alt="Foto de Elvis"></img>

        <img class="publicidad" src="a" id="Tamagochi" alt="Gif tamagochi"></img>   

        <p class="Cita">{quote}</p>
        <br></br>
        <button id="BotonJugueton">Useless button</button>
        <script src="scripts.js"></script>
    </div>
    );
}


export default Quote;