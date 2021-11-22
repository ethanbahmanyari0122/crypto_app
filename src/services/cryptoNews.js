import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '472f58a7edmsha4265f5d786161dp1b5e3djsn89d3add5c915'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers:cryptoNewsHeaders })


export const cryptoNews = createApi({
    reducerPath: 'cryptoNews',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNews;