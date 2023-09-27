import { useLocation } from "wouter"
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
            <SelectionAbout />
            <div className="info-selection">
                {
                    loc == "/about/history" && (
                        <History />
                    )
                }
                {
                    loc == "/about/quality" && (
                        <Quality />
                    )
                }
                {
                    loc == "/about/plants" && (
                        <Plants />)
                }
                {
                    loc == "/about/markets" && (
                        <Markets />
                    )
                }
            </div>
        </div>
    )
}