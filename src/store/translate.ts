import {makeAutoObservable} from "mobx";
import {translateApi} from "../api/translateApi";

class Translate {
    firstField = ''
    constructor() {
        makeAutoObservable(this);
    }

    getTranslate = async (text: string, language: string) => {
        const res = await translateApi.translate(text, language);
        this.firstField = res.data[0].translations[0].text;
    }
}

export default new Translate()