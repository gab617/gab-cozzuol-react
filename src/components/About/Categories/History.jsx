
// eslint-disable-next-line react/prop-types
export function History({titleSince, historyTexts}) {
    return (
        <>
            <img src={titleSince} alt="" />
            <div id="text-history">
                <p>
                    {historyTexts[0]}
                </p>
                <p>
                    {historyTexts[1]}
                </p>
            </div>
        </>
    )
}