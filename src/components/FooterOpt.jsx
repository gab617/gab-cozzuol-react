import { Anchor } from "./Header/Anchor";
import { infoData } from '../assets/dataPage.json'
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
                <Anchor path={'/quality-environment'} imgUrl={infoData[0].imgUrl} />
                <Anchor path={'/development'} imgUrl={infoData[1].imgUrl} />
                <Anchor path={'/production-capacity'} imgUrl={infoData[2].imgUrl} />
            </div>
        </>
    )
}