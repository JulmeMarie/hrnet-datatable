# HRNET-DATATABLE
hrnet-datatable is a react library created using create-react-app. It allows you to display data in a dynamic table that can be filtered and sorted.

## Features available

### - Display rows dynamically
You can chose the number of rows per page you want to display via the "entries select options (10, 25, 50, 100)"

### - Search by criteria
You can search easily an entry via the search input form

### - Sort by columns
You can also sort by colums value (ASC or DESC) via the icons "caret-up" and "caret-down"

### - Pagination
You can easily navigate from one page to another via the pagination tab.

## Requirements
- React 17.0.2+

## Installation
- using NPM :  `npm install hrnet-datatable`
- using yarn :  `yarn add hrnet-datatable`

## Usage
To use the hrnet-datatable library, you have to proceed like this : 
-  import it to your component  : `import DataTable from 'hrnet-datatable'`
- Then provide a props called `inputData`. example : `<Datatable inputData={yourData}/>`
- The `yourData` is an object that contains two attributes :  `columns` and `data`. Both `columns` and `data`  are arrays of elements.

- `columns` define the name of the columns (which we use for the head of the columns)
- `data` array contains the data for the rows (array of objects)

The keys of each object element in the `data` array should be the same as the `data` keys of each column element of the `columns` array.

_yourData_

```javascript
{
    columns : [
        { title: "Column Name 1", data: "columnName1" },
        { title: "Column Name 2", data: "columnName2" },
        { title: "Column Name 3", data: "columnName3" },
    ],
    data : [
        {
            columnName1: "value1",
            columnName2: "value2",
            columnName3: "value3",
        },
        {
            columnName1: "value1",
            columnName2: "value2",
            columnName3: "value3",
        },
    ]
}
```

### Example
_YourComponent.js_

```javascript
import DataTable from "hrnet-datatable";
import yourData from "./data.js";

const YourComponent = () => {
  <DataTables inputData={yourData} />;
};
```

_data.js_

```javascript
const yourData = {
    columns: [
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' },
        { title: 'Start Date', data: 'startDate' },
    ],
    data: [
        {
            lastName: 'JULME',
            firstName: 'Wilnie',
            startDate: '08/01/2023'
        },
        {
            firstName: 'Alice',
            lastName: 'PIERRE'
        },
        {
            firstName: 'Victor',
            lastName: 'André'
        },
    ]
}

export default yourData;

```