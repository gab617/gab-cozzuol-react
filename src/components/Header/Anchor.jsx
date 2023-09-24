// eslint-disable-next-line react/prop-types
export function Anchor({imgUrl, id}){
    return(
        <>
            <a href="#" id={id}>
                <img src={imgUrl} alt="" />
            </a>
        </>
    )
}