import React from "react";
import './TranslationPage.css'
import {observer} from "mobx-react-lite";
import translate from "../../store/translate";
import TranslationHeader from "../TranslationHeader/TranslationHeader";
import {Box, Skeleton} from "@mui/material";
import {languages} from "../../utils/constants";

const TranslationPage = observer(() => {
    const [firstTextArea, setFirstTextArea] = React.useState('');
    const [secondTextArea, setSecondTextArea] = React.useState('');
    const [fromLanguage, setFromLanguage] = React.useState('de');
    const [toLanguage, seToLanguage] = React.useState('de');
    const timeout: any = React.useRef(null);
    const [loadFirstArea, setLoadFirstArea] = React.useState(false);
    const [loadSecondArea, setLoadSecondArea] = React.useState(false);

    console.log(fromLanguage);
    const onChangeHandler = (field: string) => {
        let chosenLanguage = returnLanguageValue(toLanguage);
        console.log(chosenLanguage);
        let textValue = field === 'first' ? firstTextArea : secondTextArea;
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            await translate.getTranslate(textValue, toLanguage);
            field === 'first' ? setSecondTextArea(translate.firstField) : setFirstTextArea(translate.firstField)
        }, 1500);
    }

    const editFromLanguage = (language: string) => {
        setFromLanguage(language);
    }

    const editToLanguage = (language: string) => {
        seToLanguage(language);
    }

    const returnLanguageValue = (languageName: string) => {
        return languages.find((item) => item.name === languageName);
    }

    return (
        <div className='translation-wrapper'>
            <TranslationHeader editFromLanguage={editFromLanguage} editToLanguage={editToLanguage}/>
            <div className='translate-area-wrapper'>
                <div className='translate-area border-right'>
                    {
                        loadFirstArea ? <Box sx={{width: '80%'}}>
                                <Skeleton/>
                                <Skeleton animation="wave"/>
                                <Skeleton animation={false}/>
                            </Box>
                            :
                            <textarea value={firstTextArea} onChange={(event) => {
                                setFirstTextArea(event.target.value)
                                onChangeHandler('first')
                            }
                            }/>
                    }


                </div>
                <div className='translate-area'>
                    {
                        loadFirstArea ?
                            <Box sx={{width: '80%'}}>
                                <Skeleton/>
                                <Skeleton animation="wave"/>
                                <Skeleton animation={false}/>
                            </Box>
                            :
                            <textarea value={secondTextArea} onChange={(event) => {
                                setSecondTextArea(event.target.value)
                                onChangeHandler('second')
                            }
                            }/>
                    }
                </div>
            </div>
        </div>
    )
})

export default TranslationPage;