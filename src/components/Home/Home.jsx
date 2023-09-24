import { Anchor } from "../Header/Anchor";

export function Home() {
    return (
        <>
            <div id='cont-slide'>
                <div className='slide-main'>
                    <img src="https://www.acozzuol.com.ar/eng/img/home_img08.jpg" alt="" />
                </div>
                <footer id='footer-slide'>
                    <img src="https://www.acozzuol.com.ar/eng/img/footer_separa_1.png" alt="" />
                </footer>
            </div>

            <div className='cont-info'>
                <div id='info'>
                    <div className='info-link'>
                        <Anchor imgUrl={"https://www.acozzuol.com.ar/eng/img/footer_tit_1_eng.png"} />
                        <p>The company{"'"}s ongoing commitment to quality and environment is instrumented by an Integrated Quality Assurance and Environmental Management. This system has permitted us to achieve the highest standards in the field.</p>
                    </div>
                    <div className='info-link' >
                        <Anchor imgUrl={"https://www.acozzuol.com.ar/eng/img/footer_tit_2_eng.png"} />
                        <p>Since 1953, we have acquired deep knowledge and experience that allow us to offer an excellent service for the Full Development of Projects.</p>
                    </div>
                    <div className='info-link' >
                        <Anchor imgUrl={"https://www.acozzuol.com.ar/eng/img/footer_tit_3_eng.png"} />
                        <p>Our production units are strategically located to supply an effective and efficient service to our customers.</p>
                    </div>
                </div>
            </div>
        </>
    )
}