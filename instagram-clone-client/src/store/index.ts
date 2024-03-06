import { configureStore } from '@reduxjs/toolkit'
import dimensions from "~/store/dimensions";
import sidebar from "~/store/sidebar";

const store = configureStore({
    reducer: {
        dimensions,
        sidebar
    },
})

export default store;