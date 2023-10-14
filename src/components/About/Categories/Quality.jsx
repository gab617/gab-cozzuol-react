export function Quality() {
    const styles ={
        width : '',
        marginTop : '',
        fontSize  : ''
    }

    if (window.matchMedia('(max-width: 768px)').matches){
        styles.width = '90%'
        styles.marginTop = '2em'
        styles.fontSize = '1.2em'

    }
    return (
        <>
            <img src="https://www.acozzuol.com.ar/eng/img/about_total_quality.png"></img>
            <p style={styles}>
                Albano Cozzuol S.A. es el mayor productor de componentes y conjuntos plásticos de Argentina y uno de los principales de la región (Mercosur), con capacidad propia para el desarrollo integral de proyectos.
                Todos nuestros procesos se enmarcan y desenvuelven bajo el concepto de Calidad Integral de Gestión, lo que nos ha permitido ocupar un lugar relevante como proveedor de los principales constructores mundiales de automóviles como así también de otras industrias (Electrodomésticos, Alimentación).</p>
        </>
    )
}