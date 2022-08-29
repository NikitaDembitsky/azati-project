import {makeAutoObservable} from "mobx";
import {translateApi} from "../api/translateApi";
import {detectApi} from "../api/detectApi";

class Translate {
    translatedText = '';
    detectedText = '';
    firstTextArea = '';

    constructor() {
        makeAutoObservable(this);
    }

    getTranslate = async (text: string, language: string) => {
        const res = await translateApi.translate(text, language);
        this.translatedText = res.data[0].translations[0].text;
    }

    detectLanguage = async (text: string) => {
        const res = await detectApi.detect(text);
        this.detectedText = res.data[0].language;
    }
}

export default new Translate()