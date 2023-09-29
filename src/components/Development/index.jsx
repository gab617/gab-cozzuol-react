import './Development.css'

export function Development() {
    return (
        <div id='Development' className='fade-in'>
            <img id='img-title' src="https://www.acozzuol.com.ar/eng/img/capacity_tit.png" alt="" />
            <div className='develop-cont' id='dev1'>
                <img src="https://www.acozzuol.com.ar/eng/img/capacidad_desarrollo_img01.png" alt="" />
                <div className="development-text">
                    <h2>Conceptual proposal</h2>
                    <h2>Design and simulation</h2>
                    <h2>Design validation</h2>
                </div>
            </div>
            <div className='develop-cont' id='dev2'>
                <img src="https://www.acozzuol.com.ar/eng/img/capacidad_desarrollo_img02.png" alt="" />
                <div className="development-text">
                    <h2>Design and production of tooling and devices	</h2>
                    <h2>Production</h2>
                    <h2>Logistics</h2>
                </div>
            </div>
        </div>
    )
}