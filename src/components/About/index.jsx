import { Route, Router, useLocation } from "wouter"
import "./About.css"
import { Selection } from "./Selection"
import { useEffect, useState } from "react"

export function About() {
    const locActual = useLocation()
    const [loc, setLoc] = useState(useLocation())

    useEffect(() => {
        const newLoc = locActual[0]
        setLoc(newLoc)
    }, [locActual])

    return (
        <div id="About">
            <Selection />
            <div className="info-selection">
                {
                    loc == "/about/history" && (
                        <>
                            <img src="https://www.acozzuol.com.ar/eng/img/quines_somos_historia_tit.png" alt="" />
                            <div id="text-history">
                                <p>
                                    Founded by Mr. Albano Cozzuol, the company began its operations in 1953 as a small producer of moulds and dies for different customers.
                                    Based on a constant process of investment and downstream value integration, Albano Cozzuol S.A. is currently Argentina s leading producer of plastic parts and components and one of the main manufacturers of Mercosur.
                                    Our plants are strategically located to supply an effective and efficient service to our customers, with production units in La Plata and General Pacheco (Province of Buenos Aires) and in Río Grande (Province of Tierra del Fuego).
                                </p>
                                <p>
                                    Throughout our history, we have acquired deep knowledge and experience about the characteristics of local and regional markets, which together with the quality and training of our human resources, allow us to offer our current and prospective customers an excellent service for the Full Development
                                    of Projects.
                                </p>
                            </div>
                        </>
                    )
                }
                {
                    loc == "/about/quality" && (
                        <>
                            <img src="https://www.acozzuol.com.ar/eng/img/about_total_quality.png"></img>
                            <p>
                                Albano Cozzuol S.A. es el mayor productor de componentes y conjuntos plásticos de Argentina y uno de los principales de la región (Mercosur), con capacidad propia para el desarrollo integral de proyectos.
                                Todos nuestros procesos se enmarcan y desenvuelven bajo el concepto de Calidad Integral de Gestión, lo que nos ha permitido ocupar un lugar relevante como proveedor de los principales constructores mundiales de automóviles como así también de otras industrias (Electrodomésticos, Alimentación).</p>
                        </>
                    )
                }
                {
                    loc == "/about/plants" && (
                        <>
                            <img src="https://www.acozzuol.com.ar/img/quienes_somos_planta01.png" alt="" />
                            <img src="https://www.acozzuol.com.ar/img/quienes_somos_planta02.png" alt="" />
                        </>
                    )
                }
                {
                    loc == "/about/markets" && (
                        <div id="markets-info">
                            <div className="img-market">
                                <img src="https://www.acozzuol.com.ar/eng/img/quienes_somos_mercados01.png" alt="" />
                                <h2>Automotive Ind.	</h2>
                            </div>
                            <div className="img-market">
                                <img src="https://www.acozzuol.com.ar/eng/img/quienes_somos_mercados02.png" alt="" />
                                <h2>Home Appliances</h2>
                            </div>
                            <div className="img-market">
                                <img src="https://www.acozzuol.com.ar/eng/img/quienes_somos_mercados03.png" alt="" />
                                <h2>Food</h2>
                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    )
}