import { useState } from "react"
import './ProductionCapacity.css'


export function ProductionCapacity(){
    const [plants] = useState(["La Plata, Buenos Aires", "Gral. Pacheco, Buenos Aires", "Río Grande, Tierra del Fuego"])
    const [process] = useState( [
        "Tool shop",
        "Injection moulding (Thermoplastics and Thermoset)",
        "Gas-assisted injection moulding",
        "Painting (Thermoplastics and Thermoset)",
        "Body colour painting",
        "Plastic parts welding",
        "Assembly"
      ])
    return (
        <div id="ProductionCapacity">
            <img src="https://www.acozzuol.com.ar/eng/img/production_tit.png" alt="" />

            <div id="prod-cap-cont">
                <div className="prod-list">
                    <h2>Plants</h2>
                    <ul>
                    {
                        plants.map(city =>(
                            <li>{city}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className="prod-list">
                    <h2>Process</h2>
                    <ul>
                        {
                            process.map(proc =>(
                                <li>{proc}</li>
                            ))
                        }
                    </ul>
                </div>  
            </div>
        </div>
        
    )
}