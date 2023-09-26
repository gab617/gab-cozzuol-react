// eslint-disable-next-line react/prop-types
export function SelectionCont({ children }) {
    const style = {
        width: '100%', // Asegura que el div ocupe todo el ancho disponible
        height: '100%', // Puedes ajustar la altura según tus necesidades
        backgroundImage: `url(https://www.acozzuol.com.ar/eng/img/nav.png)`,
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    }
    const styleContainer = {
        width: '30vh', // Asegura que el div ocupe todo el ancho disponible
        height: '42vh'
    }
    return (
        <>
            <div style={styleContainer}>
                <div id="cont-selection" style={style}>
                    {children}
                </div>
            </div>

        </>
    )
}