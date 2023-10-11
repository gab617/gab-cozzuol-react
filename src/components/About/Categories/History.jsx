const data = {
    img : "https://www.acozzuol.com.ar/eng/img/quines_somos_historia_tit.png",
    p1 : "Founded by Mr. Albano Cozzuol, the company began its operations in 1953 as a small producer of moulds and dies for different customers. Based on a constant process of investment and downstream value integration, Albano Cozzuol S.A. is currently Argentina s leading producer of plastic parts and components and one of the main manufacturers of Mercosur. Our plants are strategically located to supply an effective and efficient service to our customers, with production units in La Plata and General Pacheco (Province of Buenos Aires) and in Río Grande (Province of Tierra del Fuego).",
    p2 : "Throughout our history, we have acquired deep knowledge and experience about the characteristics of local and regional markets, which together with the quality and training of our human resources, allow us to offer our current and prospective customers an excellent service for the Full Development of Projects."
}

export function History() {
    return (
        <>
            <img src={data.img} alt="" />
            <div id="text-history">
                <p>
                    {data.p1}
                </p>
                <p>
                    {data.p2}
                </p>
            </div>
        </>
    )
}