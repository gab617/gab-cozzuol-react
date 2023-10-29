// eslint-disable-next-line react/prop-types
export function Markets({market,marketsTexts}) {
    return (
        <div id="markets-info">
            <div className="img-market">
                <img src={market[0]} alt="" />
                <h2>{marketsTexts[0]}</h2>
            </div>
            <div className="img-market">
                <img src={market[1]} alt="" />
                <h2>{marketsTexts[1]}</h2>
            </div>
            <div className="img-market">
                <img src={market[2]} alt="" />
                <h2>{marketsTexts[2]}</h2>
            </div>
        </div>

    )
}