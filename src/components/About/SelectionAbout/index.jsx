/* eslint-disable react/prop-types */
import { Link } from "wouter";
import { SelectionCont } from "../../SelectionCont";

const data = {
    textos: ['History', 'Quality Managem', 'Plants', 'Markets']
}

export function SelectionAbout({aboutUsData}) {
    const {history, quality, plants, markets} = aboutUsData.paths
    const {aboutImage} = aboutUsData.images
    return (
        <>
            <SelectionCont>
                <img src={aboutImage} alt="" className="fade-in"/>
                <Link to= {history}>{data.textos[0]}</Link>
                <Link to= {quality}>{data.textos[1]}</Link>
                <Link to= {plants}>{data.textos[2]}</Link>
                <Link to= {markets}>{data.textos[3]}</Link>
            </SelectionCont>
        </>
    )
}