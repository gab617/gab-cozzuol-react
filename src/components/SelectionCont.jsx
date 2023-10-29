import './stylesInd.css'

// eslint-disable-next-line react/prop-types
export function SelectionCont({ children }) {
    const style = {
        width: '100%', // Asegura que el div ocupe todo el ancho disponible
        height: '100%', // Puedes ajustar la altura según tus necesidades
        backgroundImage: `url("/images/nav.png")`,
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        marginBottom: '',
    }
    const styleFlex = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        
    }
    const styleContainer = {
        width: '30vh', // Asegura que el div ocupe todo el ancho disponible
        height: '42vh'
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        style.background = 'none'
        style.marginBottom = '1em'
        styleFlex.flexDirection = 'row'
        styleContainer.width = '99%'
        styleContainer.height = '100%'
    }
    return (
        <>
            <div style={styleContainer} id="container-menu-static">
                <div id="cont-selection" style={style}>
                    <div style={styleFlex}>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}