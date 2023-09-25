import "./About.css"

export function About() {
    const style = {
        width: '100%', // Asegura que el div ocupe todo el ancho disponible
        height: '100%', // Puedes ajustar la altura según tus necesidades
        backgroundImage: `url(https://www.acozzuol.com.ar/eng/img/nav.png)`,
/*         backgroundSize: 'cover', // Hace que la imagen se ajuste y cubra todo el div
        backgroundPosition: 'center', // Centra la imagen en el div
         */backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    }

    return (
        <div id="About">
            <div id="about-selection" >
                <div id="cont-about-selection" style={style}>
                    <img src="https://www.acozzuol.com.ar/eng/img/about_tit_eng.png" alt="" />
                    <a href="#">History</a>
                    <a href="#">Quality Managem</a>
                    <a href="#">Plants</a>
                    <a href="#">Markets</a>
                </div>
            </div>

            <div className="info-selection">
                <img src="https://www.acozzuol.com.ar/eng/img/quines_somos_historia_tit.png" alt="" />
                <div id="text-history">
                    <p>
                        Founded by Mr. Albano Cozzuol, the company began its operations in 1953 as a small producer of moulds and dies for different customers.
                        Based on a constant process of investment and downstream value integration, Albano Cozzuol S.A. is currently Argentina s leading producer of plastic parts and components and one of the main manufacturers of Mercosur.
                        Our plants are strategically located to supply an effective and efficient service to our customers, with production units in La Plata and General Pacheco (Province of Buenos Aires) and in Río Grande (Province of Tierra del Fuego).
                    </p>
                    <p>
                        Throughout our history, we have acquired deep knowledge and experience about the characteristics of local and regional markets, which together with the quality and training of our human resources, allow us to offer our current and prospective customers an excellent service for the Full Development
                        of Projects.
                    </p>
                </div>
            </div>
        </div>
    )
}