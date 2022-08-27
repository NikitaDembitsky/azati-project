import axios from "axios";

export const api = axios.create({
    baseURL: 'https://microsoft-translator-text.p.rapidapi.com/'
});