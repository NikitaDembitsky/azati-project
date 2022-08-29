import './TranslateHistory.css'

const TranslateHistory = () => {
    return (
        <div className='history-wrapper'>
            <div className='history-header'>
                <h3>History</h3>
            </div>
            <div className='translate-history'>
                {
                    JSON.parse(localStorage.getItem('history') as string).map((item: any) => {
                        return (
                            <div className='history-item'>
                                <div>{item.languageFrom} ➝ {item.languageTo}</div>
                                <div>from: {item.textFrom}</div>
                                <div>to: {item.textTo}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TranslateHistory;