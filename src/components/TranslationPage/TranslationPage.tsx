import React, {useState} from "react";
import './TranslationPage.css'
import {observer} from "mobx-react-lite";
import translate from "../../store/translate";
import TranslationHeader from "../TranslationHeader/TranslationHeader";
import {Box, Skeleton} from "@mui/material";
import {languages} from "../../utils/constants";
import TranslateHistory from "../TranslateHistory/TranslateHistory";

const TranslationPage = observer(() => {
    const [secondTextArea, setSecondTextArea] = React.useState('');
    const [fromLanguage, setFromLanguage] = React.useState('English');
    const [toLanguage, seToLanguage] = React.useState('German');
    const timeout: any = React.useRef(null);
    const [loadFirstArea, setLoadFirstArea] = React.useState(false);
    const [favorite, setFavorite] = useState('★');

    const editFromLanguage = (language: string) => {
        setFromLanguage(language);
    }

    const onChangeHandler = (event: any) => {
        translate.firstTextArea = event.target.value;
        setFavorite('★');
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            await translate.detectLanguage(translate.firstTextArea);
            setLoadFirstArea(true);
            await translate.getTranslate(translate.firstTextArea, chosenToLanguage.value);
            setLoadFirstArea(false);
            setSecondTextArea(translate.translatedText);
            saveToHistory();
        }, 1000);
    }

    const editToLanguage = (language: string) => {
        seToLanguage(language);
    }

    const saveToFavorite = () => {
        let favorite: any = {
            languageFrom: fromLanguage,
            languageTo: toLanguage,
            textFrom: translate.firstTextArea,
            textTo: secondTextArea
        };
        setFavorite('✓');
        let localStorageValue: any = JSON.parse(localStorage.getItem('favorite') as string) || [];
        localStorageValue.push(favorite);
        localStorage.setItem('favorite', JSON.stringify(localStorageValue));
    }

    const saveToHistory = () => {
        let history: any = {
            languageFrom: fromLanguage,
            languageTo: toLanguage,
            textFrom: translate.firstTextArea,
            textTo: translate.translatedText
        };
        let localStorageValue: any = JSON.parse(localStorage.getItem('history') as string) || [];
        localStorageValue.push(history);
        localStorage.setItem('history', JSON.stringify(localStorageValue));
    }


    const returnLanguageByName = (languageName: string) => languages.find((item) => item.name === languageName);

    const returnLanguageByValue = (languageValue: string) => languages.find((item) => item.value === languageValue);
    let chosenFromLanguage: any = returnLanguageByName(fromLanguage);
    let chosenToLanguage: any = returnLanguageByName(toLanguage);
    let fullNameLanguage: any = returnLanguageByValue(translate.detectedText)

    return (
        <div className='translation-wrapper'>
            <TranslationHeader fromLanguage={fromLanguage} toLanguage={toLanguage} editFromLanguage={editFromLanguage}
                               editToLanguage={editToLanguage}/>
            <div className='translate-area-wrapper'>
                <div className='translate-area border-right'>
                            <textarea value={translate.firstTextArea} onChange={(event) =>
                                onChangeHandler(event)
                            }/>
                    {
                        translate.detectedText && translate.detectedText !== chosenFromLanguage.value ?
                            <div>You need to change the input language to: <a href="#"
                                                                              onClick={() => setFromLanguage(fullNameLanguage?.name)}>{fullNameLanguage?.name}</a>
                            </div> : null
                    }

                </div>
                <div className='translate-area'>
                    {
                        secondTextArea ?
                            <button className='favorite-btn' onClick={saveToFavorite}>{favorite}</button> : null
                    }
                    {
                        loadFirstArea ?
                            <Box sx={{width: '80%', margin: 'auto'}}>
                                <Skeleton/>
                                <Skeleton animation="wave"/>
                                <Skeleton animation={false}/>
                            </Box>
                            :
                            <textarea value={secondTextArea} disabled/>
                    }
                </div>
            </div>
            {
                localStorage.getItem('history') ? <TranslateHistory/> : null
            }
        </div>
    )
})

export default TranslationPage;