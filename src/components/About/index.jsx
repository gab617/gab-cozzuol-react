import { useLocation } from "wouter"
import { aboutUsData } from "/src/assets/dataPage.json"
import "./About.css"
import { SelectionAbout } from "./SelectionAbout"
import { useEffect, useState } from "react"
import { History } from "./Categories/History"
import { Quality } from "./Categories/Quality"
import { Plants } from "./Categories/Plants"
import { Markets } from "./Categories/Markets"

/* El useEffect, mantiene actualizada la rutaactual en nuestro proyecto
comparando asi con "locActual y asi saber que componente renderizar." */

export function About() {
    const locActual = useLocation()
    const [loc, setLoc] = useState(useLocation())

    useEffect(() => {
        const newLoc = locActual[0]
        setLoc(newLoc)
    }, [locActual])

    return (
        <div id="About">
            <SelectionAbout 
                aboutUsData={aboutUsData} 
            />
            
            <div className="info-selection fade-in">
                {
                    loc == `${aboutUsData.paths.history}` && (
                        <History />
                    )
                }
                {
                    loc == `${aboutUsData.paths.quality}` && (
                        <Quality />
                    )
                }
                {
                    loc == `${aboutUsData.paths.plants}` && (
                        <Plants />)
                }
                {
                    loc == `${aboutUsData.paths.markets}` && (
                        <Markets />
                    )
                }
            </div>
        </div>
    )
}