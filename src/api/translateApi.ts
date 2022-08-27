import {api} from "./axiosConfig";
// data: `[{"Text":"I would really like to drive your car around the block a few times."}]`
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