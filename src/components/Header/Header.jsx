import { Anchor } from "./Anchor"
import "./Header.css"

export function Header() {
    return (
        <>
            <header>
                <div id='header'>
                    <div id='header-top'>
                        <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/header_home.png" id="a-home" />
                        <div id='idiomas'>
                            <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/header_esp.png" />
                            <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/header_eng.png" />
                        </div>
                    </div>

                    <nav id='nav-options'>
                        <ul>
                            <li>
                                <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/header_eng_about.png" />
                            </li>
                            <li>
                                <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/header_eng_prod.png" />
                            </li>
                            <li>
                                <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/header_eng_custom.png" />
                            </li>
                            <li>
                                <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/header_eng_contact.png" />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="div-img-logo-cozz">
                    <Anchor imgUrl="https://www.acozzuol.com.ar/eng/img/logo.png" />
                </div>
            </header>
        </>
    )
}