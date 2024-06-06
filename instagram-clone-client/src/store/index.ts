import { configureStore } from '@reduxjs/toolkit'
import dimensions from "~/store/dimensions";
import sidebar from "~/store/sidebar";
import authentication from "~/store/authentication";

const store = configureStore({
    reducer: {
        dimensions,
        sidebar,
        authentication
    },
})

export default store;
