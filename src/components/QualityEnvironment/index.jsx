import './QualityEnvironment.css'

export function QualityEnvironment (){
    return(
        <div id="QualityEnvironment" className='fade-in'>
            <div id='quality-title'>
                <img src="https://www.acozzuol.com.ar/eng/img/environment_tit.png" alt="" />
            </div>
            <div id='quality-info-cont'>
                <div className='quality-info'>
                    <img src="https://www.acozzuol.com.ar/eng/img/calidad_medio_img01.png" alt="" />
                    <p>The company s ongoing commitment to quality and environment is instrumented by an Integrated Quality Assurance and Environmental Management. This system has permitted us to achieve the highest standards in the field.</p>
                </div>
                <div className='quality-info'>
                    <img src="https://www.acozzuol.com.ar/eng/img/calidad_medio_img02.png" alt="" />
                    <p>	The main goal of Albano Cozzuol S.A. is the permanent environmental management of its activities, taking proactive measures which tend to reduce environmental impact of its operations as well as of the materials transformed and the manufactured parts and components.</p>
                </div>
            </div>
            <div id='certifications'>
                <h2 id='title-certification'>THIRD PARTY CERTIFICATIONS</h2>
                <div>
                    <div className='certif-data'>
                        <img src="https://www.acozzuol.com.ar/eng/img/flecha_roja.png" alt="" />
                        <h3>ISO TS 16949</h3>
                    </div>
                    <div className='certif-data'>
                        <img src="https://www.acozzuol.com.ar/eng/img/flecha_roja.png" alt="" />
                        <h3>ISO 9001</h3>
                    </div>
                    <div className='certif-data'>
                        <img src="https://www.acozzuol.com.ar/eng/img/flecha_roja.png" alt="" />
                        <h3>ISO 14001</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}