import { Link } from "wouter";
import { SelectionCont } from "../SelectionCont";
import {products} from "/src/assets/dataPage.json"
import './Products.css'

// eslint-disable-next-line react/prop-types
export function Products() {  
    const {navegationDescriptions, navegationTitles, images} = products
    return (
        <div id="Products">
            <SelectionCont>
                <img id='img-product-tit' src={images.productsImage} alt="" />
                <div id='selection-products'>
                    <div id="sel-prod-1">
                        <div className="selec-title">
                            <img src={images.flechaAzul} alt="" />
                            <h2>{navegationTitles[0]}</h2>
                        </div>
                        <div className="selec-links">
                            <Link to="">{navegationDescriptions[0]}</Link>
                            <Link to="">{navegationDescriptions[1]}</Link>
                            <Link to="">{navegationDescriptions[2]}</Link>
                        </div>
                    </div>
                    <div id="sel-prod-2">
                        <div className="selec-title">
                            <img src={images.flechaAzul} alt="" />
                            <h2>{navegationTitles[1]}</h2>
                        </div>
                        <div className="selec-links">
                            <Link to="">{navegationDescriptions[3]}</Link>
                            <Link to="">{navegationDescriptions[4]}</Link>
                        </div>
                    </div>
                </div>
            </SelectionCont>

            <div id="slider-prducts">
            <div >
                <img  className="fade-in" src={images.piece3} alt="" />
                </div>
            </div>
        </div>
    )
}