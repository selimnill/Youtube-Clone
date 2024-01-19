import axios from "axios";

const BASE_URL = "https://youtube86.p.rapidapi.com";

const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Key': '1d42c64612msh6247994b5b963f1p1909acjsn9f516c6e4f79',
        'X-RapidAPI-Host': 'youtube86.p.rapidapi.com',
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    console.log(data);
    return data;
}