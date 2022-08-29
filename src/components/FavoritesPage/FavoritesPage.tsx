import './FavoritesPage.css'

const FavoritesPage = () => {
    return (
        <div className='favorites-wrapper'>
            {
                JSON.parse(localStorage.getItem('favorite') as string).map((item: any) => {
                    return (
                        <div className='favorites-item'>
                            <div>{item.languageFrom} ➝ {item.languageTo}</div>
                            <div>from: {item.textFrom}</div>
                            <div>to: {item.textTo}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FavoritesPage;