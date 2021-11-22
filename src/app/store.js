import {configureStore} from "@reduxjs/toolkit";

import { cryptoApi} from "../services/cryptoApi";
import { cryptoNews } from "../services/cryptoNews";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNews.reducerPath]: cryptoNews.reducer,
    },
});