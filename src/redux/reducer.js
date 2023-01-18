import { createSlice } from "@reduxjs/toolkit";
import actions from './actions';


const tableSlice = createSlice({
    name: "datatable",
    initialState: {
        search: null, //stock the value of the input search
        data: {
            incoming: null,//The data from the root app
            display: null, //stock the data that is displaying in the current page
        },
        entries: {
            selected: 10, //The value of the select option field
            filtered: 0,//stock dataLength: 0, 
            current: 0, //stock the number of entries displaying in the current page
            total: 0, //Store the total number of entries
        },
        page: {
            index: 0, //Store the page index
            number: 1 //Store the number of pages
        },
        sort: {
            column: null, //Column to sort
            order: null //The order of the sort
        }
    },
    reducers: actions
});

export const { setIncomingData, setDisplayData, display, setEntries, setPageIndex, setSearch, setSort } = tableSlice.actions;

export default tableSlice.reducer;