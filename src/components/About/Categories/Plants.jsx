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
        styles.display = 'none'
        urlImg2.url = "/src/components/About/Categories/imgs/quienes_somos_planta2.png"
        styles2.marginTop = '5em'
        styles2.marginBottom = '5em'
        
    }
    return (
        <>
            <img style={styles} src="https://www.acozzuol.com.ar/img/quienes_somos_planta01.png" alt="" />
            <img style={styles2} src={urlImg2.url} alt="" />
        </>
    )
}