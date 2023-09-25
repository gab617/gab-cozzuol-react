
// eslint-disable-next-line react/prop-types
export function Anchor({imgUrl, path}){
    return(
        <>
            <a href={path} className="a">
                <img src={imgUrl} alt="" />
            </a>
        </>
    )
}