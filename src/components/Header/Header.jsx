/* eslint-disable react/prop-types */
import { Anchor } from "./Anchor"
import "./Header.css"


export function Header({headerData}) {
    return (
        <>
            <header>
                <div id='header'>
                    <div id='header-top'>
                        <Anchor imgUrl={
                            headerData[0].imgUrl}
                            path={headerData[0].path}
                            id="a-home" 
                            />
                        <div id='idiomas'>
                            <Anchor imgUrl={
                                headerData[1].imgUrl} 
                                path={headerData[1].path}
                                />
                            <Anchor imgUrl={
                                headerData[2].imgUrl} 
                                path={headerData[2].path}
                                />
                        </div>
                    </div>

                    <nav id='nav-options'>
                        <ul>
                            {
                                headerData.map((data,index) =>{/* archivos de navegacion definidos a partir de la posicion 4 */
                                    if (index >= 4){
                                        return(
                                            <li key={data.index}>
                                                <Anchor
                                                    imgUrl={data.imgUrl}
                                                    path={data.path}
                                                />
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div id="div-img-logo-cozz">
                    <Anchor imgUrl={headerData[3].imgUrl} />
                </div>
            </header>
        </>
    )
}