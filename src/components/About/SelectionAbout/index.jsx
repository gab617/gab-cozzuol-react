/* eslint-disable react/prop-types */
import { Link } from "wouter";
import { SelectionCont } from "../../SelectionCont";


export function SelectionAbout({aboutUsData}) {
    const {history, quality, plants, markets} = aboutUsData.paths
    const {aboutImage} = aboutUsData.images
    const {navegationDescriptions} = aboutUsData
    return (
        <>
            <SelectionCont>
                <img src={aboutImage} alt="" className="fade-in"/>
                <Link to= {history}>{navegationDescriptions[0]}</Link>
                <Link to= {quality}>{navegationDescriptions[1]}</Link>
                <Link to= {plants}>{navegationDescriptions[2]}</Link>
                <Link to= {markets}>{navegationDescriptions[3]}</Link>
            </SelectionCont>
        </>
    )
}