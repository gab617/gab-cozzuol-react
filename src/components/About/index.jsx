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
    console.log(aboutUsData)
    const { titleSince, titleQuality, plants1, plants2, market } = aboutUsData.images /* IMAGENES */
    const { historyTexts, qualityText, marketsTexts } = aboutUsData.texts
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
                        <History
                            titleSince={titleSince}
                            historyTexts={historyTexts}

                        /> /* pasa las imagenes en url por parametros */
                    )
                }
                {
                    loc == `${aboutUsData.paths.quality}` && (
                        <Quality
                            titleQuality={titleQuality}
                            qualityText={qualityText}
                        />
                    )
                }
                {
                    loc == `${aboutUsData.paths.plants}` && (
                        <Plants
                            plants1={plants1}
                            plants2={plants2} />)
                }
                {
                    loc == `${aboutUsData.paths.markets}` && (
                        <Markets
                            market={market}
                            marketsTexts={marketsTexts}
                        />
                    )
                }
            </div>
        </div>
    )
}