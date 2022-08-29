import axios from "axios";

export const api = axios.create({
    baseURL: 'https://microsoft-translator-text.p.rapidapi.com/',
    params: {
        'api-version': '3.0',
    },
    headers: {
        'X-RapidAPI-Key': 'b2e007e49dmsh0fe008a14d08d62p10da13jsnfb42a154aba8',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
});