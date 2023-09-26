import { Link } from "wouter";

export function Selection() {
    const style = {
        width: '100%', // Asegura que el div ocupe todo el ancho disponible
        height: '100%', // Puedes ajustar la altura según tus necesidades
        backgroundImage: `url(https://www.acozzuol.com.ar/eng/img/nav.png)`,
/*         backgroundSize: 'cover', // Hace que la imagen se ajuste y cubra todo el div
        backgroundPosition: 'center', // Centra la imagen en el div
         */backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    }
    return (
        <>
            <div id="about-selection" >
                <div id="cont-about-selection" style={style}>
                    <img src="https://www.acozzuol.com.ar/eng/img/about_tit_eng.png" alt="" />
                    <Link to="/about/history">History</Link>
                    <Link to="/about/quality">Quality Managem</Link>
                    <Link to="/about/plants">Plants</Link>
                    <Link to="/about/markets">Markets</Link>
                </div>
            </div>
        </>
    )
}