export function Plants() {
    const styles ={
        display :'block',

    }
    const styles2={
        marginTop : '',
        marginBottom : ''
    }
    const urlImg2 ={
        url : "https://www.acozzuol.com.ar/eng/img/quienes_somos_planta02.png"
    }
    if (window.matchMedia('(max-width: 768px)').matches){
        /* styles.display = 'none' */
        styles2.marginTop = '0'
        styles2.marginBottom = '0'
    }
    return (
        <>
            <img style={styles} src="https://www.acozzuol.com.ar/img/quienes_somos_planta01.png" alt="" />
            <img style={styles2} src={urlImg2.url} alt="" />
        </>
    )
}