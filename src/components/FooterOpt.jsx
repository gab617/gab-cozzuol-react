import { Anchor } from "./Header/Anchor";
import { infoData } from '../assets/dataPage.json'

// eslint-disable-next-line react/prop-types
export function FooterOptions() {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%',
        marginLeft: '2em'
    }
    return (
        <>
            <div id='foo-options' style={style}>
                <Anchor path={'/quality-environment'} imgUrl={infoData[0].imgUrl} />
                <Anchor imgUrl={infoData[1].imgUrl} />
                <Anchor imgUrl={infoData[2].imgUrl} />
            </div>
        </>
    )
}