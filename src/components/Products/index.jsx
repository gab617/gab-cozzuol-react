import { Link } from "wouter";
import { SelectionCont } from "../SelectionCont";
import './Products.css'

export function Products() {
    return (
        <div id="Products">
            <SelectionCont>
                <img id='img-product-tit' src="https://www.acozzuol.com.ar/eng/img/prod_tit_eng.png" alt="" />
                <div id='selection-products'>
                    <div id="sel-prod-1">
                        <div className="selec-title">
                            <img src="https://www.acozzuol.com.ar/eng/img/prod_flecha_azul.png" alt="" />
                            <h2>Automotive Ind.</h2>
                        </div>
                        <div className="selec-links">
                            <Link to="">Interiors</Link>
                            <Link to="">Exteriors</Link>
                            <Link to="">Under Hood / Power Train</Link>
                        </div>
                    </div>
                    <div id="sel-prod-2">
                        <div className="selec-title">
                            <img src="https://www.acozzuol.com.ar/eng/img/prod_flecha_azul.png" alt="" />
                            <h2>Other Markets</h2>
                        </div>
                        <div className="selec-links">
                            <Link to="">Home appliances</Link>
                            <Link to="">Food</Link>
                        </div>
                    </div>
                </div>
            </SelectionCont>

            <div id="slider-prducts">
                <img src="https://www.acozzuol.com.ar/img/prod/interior3.jpg" alt="" />
            </div>
        </div>
    )
}