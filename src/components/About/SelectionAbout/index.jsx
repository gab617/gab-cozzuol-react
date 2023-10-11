import { Link } from "wouter";
import { SelectionCont } from "../../SelectionCont";

const data = {
    img: "https://www.acozzuol.com.ar/eng/img/about_tit_eng.png",
    textos: ['History', 'Quality Managem', 'Plants', 'Markets']
}

export function SelectionAbout() {
    return (
        <>
            <SelectionCont>
                <img src={data.img} alt="" />
                <Link to="/about/history">{data.textos[0]}</Link>
                <Link to="/about/quality">{data.textos[1]}</Link>
                <Link to="/about/plants">{data.textos[2]}</Link>
                <Link to="/about/markets">{data.textos[3]}</Link>
            </SelectionCont>
        </>
    )
}