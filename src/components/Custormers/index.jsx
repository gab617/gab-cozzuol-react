import { SelectionCont } from "../SelectionCont";
import './Customers.css'

export function Customers (){
    return(
        <div id="Customers">
            <SelectionCont>
                <img src="https://www.acozzuol.com.ar/eng/img/customers_tit_eng.png" alt="" />
            </SelectionCont>
            <div id="customers-imgs" className="fade-in">
                <img src="https://www.acozzuol.com.ar/eng/img/clientes_img1.png" alt="" />
                <img src="https://www.acozzuol.com.ar/eng/img/clientes_img2.png" alt="" />
                <img src="https://www.acozzuol.com.ar/eng/img/clientes_img3.png" alt="" />
                <img src="https://www.acozzuol.com.ar/eng/img/clientes_img4.png" alt="" />
            </div>
        </div>
    )
}