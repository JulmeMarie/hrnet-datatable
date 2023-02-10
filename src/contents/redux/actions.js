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
        state.page.index = 0;//init page index
        return state;
    },
    setEntries: (state, action) => {
        state.entries.selected = action.payload;
        state.page.index = 0;//init page index
        return state;
    },
    setSort: (state, action) => {
        state.sort = action.payload;
        return state;
    },
    /**
     * This method computes the data in 4 steps: 
     * 1) compute for search filter
     * 2) compute page numbers
     * 3) compute : sort the data
     * 4) Compute data to display in current page
     * @param {*} state 
     * @returns 
     */
    compute: (state) => {
        if (state.data.incoming) {
            let results = { ...state.data.incoming };// clone The user data

            //Step 1 : if search exists, perform search
            if (state.search != null && state.search.length > 0) {
                let dataList = results.data.filter((element) => {
                    let filteredList = results.columns.filter((column) => {
                        //return true if searchValue input includes in the column of the element
                        return element[column.data] && element[column.data].toLowerCase().includes(state.search.toLowerCase());
                    });
                    return filteredList.length > 0;
                });
                results.data = dataList;
            };

            // Step 2 : perform page numbers
            let division = results.data.length / state.entries.selected;
            state.page.number = Math.ceil(division);
            state.entries.filtered = results.data.length;

            // Step 3 : sort the data
            results.data.sort((element1, element2) => {
                if (state.sort.order === "ASC") {
                    return element1[state.sort.column] < element2[state.sort.column] ? -1 : 1;
                }
                else if (state.sort.order === "DESC") {
                    return element1[state.sort.column] > element2[state.sort.column] ? -1 : 1;
                }
                return 0;
            });

            // Step 4 : Compute data to display in the current page
            let dataListForCurrentPage = results.data.filter((element, index) => {
                let startPos = state.data.display ? state.page.index * state.entries.selected : 0;//start position
                let endPos = startPos + state.entries.selected;//end position
                //index must be between the startPos and the endPos
                return index >= startPos && index < endPos;//True or false
            });

            results.data = dataListForCurrentPage;
            state.data.display = results;
            state.entries.current = results.data.length;
        }
        return state;
    }
};

export default actions;