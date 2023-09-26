import { Link } from "wouter";

// eslint-disable-next-line react/prop-types
export function Anchor({imgUrl, path}){
    return(
        <>
            <Link to={`${path}`} className="a">
                <img src={imgUrl} alt=" " />
            </Link>
        </>
    )
}