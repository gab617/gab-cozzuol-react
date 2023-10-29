// eslint-disable-next-line react/prop-types
export function Quality({titleQuality,qualityText}) {
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
            <img src={titleQuality}></img>
            <p style={styles}>
                {qualityText}
            </p>
        </>
    )
}