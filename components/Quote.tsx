import { FunctionComponent } from "preact";

type QuoteProps = {
    quote: string;
};

const Quote: FunctionComponent<QuoteProps> = (props) => {
    const {quote} = props;
    
    

    // El alt es el texto alternativo que se muestra si la imagen no se puede cargar

    return (
    <>
        <img src= "/sources/javi-1.jpg" id="JAVI" alt="Foto de Javi"></img>
        <button id="BotonJugueton">Claim your price!!!</button>

        <div class="publicidad" id="izq">
            <img  class = "multimedia" src="/sources/tamagochi.gif" id="Tamagochi" alt="Gif tamagochi"></img>
            <br></br>
            <img  class = "multimedia" src="/sources/teletubbies.gif" id="Teletubbies" alt="Gif teletubbies"></img>
            <br></br>
            <button class = "multimedia" id="He-man" alt="Foto de He-Man" onClick="playSound('Heman-sound')"></button>
                <audio id="Heman-sound" src="/sources/he-man.mp3" type="audio/mp3" ></audio>
            <br></br>
            <video class = "multimedia" src="/sources/video-pkmn.mp4" id="Video"  controls></video>
        </div>

        <div class="Center">
            <img src="/sources/Sonic.gif" id="Sonic" alt="Gif Sonic"></img>
            <h1 id="Titulo">Random Quote</h1>
            <p id="Cita">{quote}</p>
        </div>

        <div class="publicidad" id="der">
            <img class = "multimedia" src = "/sources/elvis.png" id="Elvis" alt="Foto de Elvis"></img>
            <br></br>
            <img  class = "multimedia" src="/sources/et.gif" id="ET" alt="Gif ET"></img>
            <br></br>
            <img  class = "multimedia" src="/sources/alf.gif" id="Alf" alt="Gif Alf"></img>
            <br></br>
            <button id="Fart" onClick="playSound('Fart-sound')"></button>
                <audio id="Fart-sound" src="/sources/fart.mp3" type="audio/mp3"></audio>
        </div>
        
        <script src="scripts.js"></script>
    </>
    );
}


export default Quote;