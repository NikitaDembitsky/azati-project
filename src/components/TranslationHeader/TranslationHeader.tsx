import './TranslationHeader.css'
import React from "react";
import {languages} from "../../utils/constants";

interface Props {
    editFromLanguage: (language: string) => void;
    editToLanguage: (language: string) => void;
    fromLanguage: string;
    toLanguage: string;
}

const TranslationHeader: React.FC<Props> = ({editFromLanguage, editToLanguage, fromLanguage, toLanguage}) => {

    const switchLanguage = () => {
        editFromLanguage(toLanguage);
        editToLanguage(fromLanguage);
    }

    return (
        <div className='translation-header'>
            <div className='header-item'>
                <div>Translate from:</div>
                <select value={fromLanguage} onChange={(e) => editFromLanguage(e.target.value)}>
                    {
                        languages.map((item) => <option key={item.value}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className='switch-btn'>
                <button onClick={switchLanguage}>⇆</button>
            </div>
            <div className='header-item'>
                <div>Translate to:</div>
                <select value={toLanguage} onChange={(e) => editToLanguage(e.target.value)}>
                    {
                        languages.map((item) => <option key={item.value}>{item.name}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default TranslationHeader;