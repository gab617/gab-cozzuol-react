import { Anchor } from "./Header/Anchor";
import { infoFooter } from '../assets/dataPage.json'
import "./stylesInd.css"

// eslint-disable-next-line react/prop-types
export function FooterOptions() {
/*     const style = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%',
        marginLeft: '2em',
        cursor: 'pointer'
    } */
    return (
        <>
            <div id='foo-options'>
                <Anchor path={'/quality-environment'} imgUrl={infoFooter[0].imgUrl} />
                <Anchor path={'/development'} imgUrl={infoFooter[1].imgUrl} />
                <Anchor path={'/production-capacity'} imgUrl={infoFooter[2].imgUrl} />
            </div>
        </>
    )
}