/* eslint-disable react/prop-types */
import { infoFooterText } from '../../assets/dataPage.json'
import './Home.css'
import { FooterOptions } from "../FooterOpt";
import { Separator } from '../Separator';
export function Home() {
    return (
        <>
            <div id='cont-slide'>
                <div className='slide-main'>
                    <img src="https://www.acozzuol.com.ar/eng/img/home_img08.jpg" alt="" />
                </div>
                <Separator />
            </div>
            <div id='options-and-text'>
                <FooterOptions />
                <div id="text-home">
                    <p>{infoFooterText[0].textInfo}</p>
                    <p>{infoFooterText[1].textInfo}</p>
                    <p>{infoFooterText[2].textInfo}</p>
                </div>
            </div>
        </>
    )
}