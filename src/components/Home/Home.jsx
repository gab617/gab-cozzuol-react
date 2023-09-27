/* eslint-disable react/prop-types */
import { infoDataText } from '../../assets/dataPage.json'
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
                <Separator/>
            </div>
            <FooterOptions />
            <div id="text-home">
                <p>{infoDataText[0].textInfo}</p>
                <p>{infoDataText[1].textInfo}</p>
                <p>{infoDataText[2].textInfo}</p>
            </div>



            {/*             <div className='cont-info'>
                <div id='info'>
                    <div className='info-link'>
                        <Anchor imgUrl={infoData[0].imgUrl} />
                        <p>{infoDataText[0].textInfo}</p>
                    </div>
                    <div className='info-link' >
                        <Anchor imgUrl={infoData[1].imgUrl} />
                        <p>{infoDataText[1].textInfo}</p>
                    </div>
                    <div className='info-link' >
                        <Anchor imgUrl={infoData[2].imgUrl} />
                        <p>{infoDataText[2].textInfo}</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}