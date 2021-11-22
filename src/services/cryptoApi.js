import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '472f58a7edmsha4265f5d786161dp1b5e3djsn89d3add5c915'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

export const cryptoApi = createApi({

});