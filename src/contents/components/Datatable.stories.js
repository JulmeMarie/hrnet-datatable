import React from 'react';
import { Provider } from "react-redux";
import { store } from '../redux/store';
import DataTable from './DataTable/DataTable';
import defaultData from '../data';

export default {
    title: 'Hrnet/Datatable',
    component: DataTable,
};

const Template = (args) => <Provider store={store}><DataTable {...args} /></Provider>;

export const Default = Template.bind({});

Default.args = {
    inputData: defaultData
};