import { Link } from "wouter";
import { SelectionCont } from "../../SelectionCont";

export function SelectionAbout() {
    return (
        <>
                <SelectionCont>
                    <img src="https://www.acozzuol.com.ar/eng/img/about_tit_eng.png" alt="" />
                    <Link to="/about/history">History</Link>
                    <Link to="/about/quality">Quality Managem</Link>
                    <Link to="/about/plants">Plants</Link>
                    <Link to="/about/markets">Markets</Link>
                </SelectionCont>

                
                {/*                 <div id="cont-about-selection" style={style}>
                    <img src="https://www.acozzuol.com.ar/eng/img/about_tit_eng.png" alt="" />
                    <Link to="/about/history">History</Link>
                    <Link to="/about/quality">Quality Managem</Link>
                    <Link to="/about/plants">Plants</Link>
                    <Link to="/about/markets">Markets</Link>
                </div> */}
        </>
    )
}