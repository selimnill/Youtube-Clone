import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    method: "GET",
    params: { hl: 'en', gl: 'US' },
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Key': '06076de2a6msha585a28679fed5fp1e6609jsnbb64ab2dcea2',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}