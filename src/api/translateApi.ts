import {api} from "./axiosConfig";

class TranslateApi {
    translate = (text: string, language: string) => {
        return api.post(`translate`,
            JSON.stringify([{"Text": text}]
            ), {
                params: {
                    'to[0]': language,
                    profanityAction: 'NoAction',
                    textType: 'plain'
                },
            }
        )
    }
}

export const translateApi = new TranslateApi();