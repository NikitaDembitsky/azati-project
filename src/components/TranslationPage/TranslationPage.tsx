import './TranslationPage.css'

const TranslationPage = () => {
    return (
        <div className='translation-wrapper'>
            <div className='translation-header'>⇆</div>
            <div className='translate-area-wrapper'>
                <div className='translate-area border-right'>
                    <textarea />
                </div>
                <div className='translate-area'>
                    <textarea />
                </div>
            </div>
        </div>
    )
}

export default TranslationPage;