import { configureStore } from "@reduxjs/toolkit";
import tableReducer from './reducer';

export const store = configureStore({
    reducer: {
        datatable: tableReducer
    }
});