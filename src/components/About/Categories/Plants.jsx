export function Plants() {
    const styles ={
        display :'block',

    }
    const styles2={
        marginTop : '',
        marginBottom : ''
    }
    const urlImg2 ={
        url : "/images/about-us/quienes_somos_planta02.png"
    }
    if (window.matchMedia('(max-width: 768px)').matches){
        styles2.marginTop = '0'
        styles2.marginBottom = '0'
    }
    return (
        <>
            <img style={styles} src="/images/about-us/quienes_somos_planta01.png" alt="" />
            <img style={styles2} src={urlImg2.url} alt="" />
        </>
    )
}