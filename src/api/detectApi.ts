import {api} from "./axiosConfig";

class DetectApi {
    detect = (text: string) => {
        return api.post(`Detect`,
            JSON.stringify([{"Text": text}]
            )
        )
    }
}

export const detectApi = new DetectApi();