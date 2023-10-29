import { SelectionCont } from "../SelectionCont";
import { customers }  from "/src/assets/dataPage.json"
import './Customers.css'

export function Customers (){
    const {customersImage, terminales} = customers.images
    return(
        <div id="Customers">
            <SelectionCont>
                <img src={customersImage} alt="" />
            </SelectionCont>
            <div id="customers-imgs" className="fade-in">
                <img src={terminales[0]} alt="" />
                <img src={terminales[1]} alt="" />
                <img src={terminales[2]} alt="" />
                <img src={terminales[3]} alt="" />
            </div>
        </div>
    )
}