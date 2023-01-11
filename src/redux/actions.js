const actions = {
    setIncomingData: (state, action) => {
        state.data.incoming = action.payload;
        if (action.payload) {
            state.entries.total = action.payload.data.length;
        }
        return state;
    },
    setDisplayData: (state, action) => {
        state.data.display = action.payload;
        return state;
    },
    setPageIndex: (state, action) => {
        state.page.index = action.payload;
        return state;
    },
    setSearch: (state, action) => {
        state.search = action.payload;
        return state;
    },
    setEntries: (state, action) => {
        state.entries.selected = action.payload;
        return state;
    },
    display: (state) => {
        if (state.data.incoming) {//check if inputData exist
            let filteredData = { ...state.data.incoming };
            if (state.search != null && state.search.length > 0) {
                let filteredDataList = filteredData.data.filter((element) => {
                    //Filter the columns array to get the extact column names
                    let filteredList = filteredData.columns.filter((column) => {
                        //Check if searchValue input includes in the column of the element
                        return element[column.data] && element[column.data].toLowerCase().includes(state.search.toLowerCase());
                    });
                    return filteredList.length > 0;
                });

                filteredData.data = filteredDataList;
                state.page.index = 0;
            };

            let division = filteredData.data.length / state.entries.selected;
            state.page.number = Math.ceil(division);
            state.entries.filtered = filteredData.data.length;

            let dataListForCurrentPage = filteredData.data.filter((element, index) => {
                let startElement = state.data.display ? state.page.index * state.entries.selected : 0;//start position
                let endElement = startElement + state.entries.selected;//end position
                //index must be between the startelement and the endElement
                return index >= startElement && index < endElement;//True or false
            });

            filteredData.data = dataListForCurrentPage;
            state.data.display = filteredData;
            state.entries.current = filteredData.data.length;
        }
        return state;
    }
};

export default actions;