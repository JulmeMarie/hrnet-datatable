import React from 'react';

import DataTable from './DataTable/DataTable';
import defaultData from '../data';

export default {
    title: 'Hrnet/Datatable',
    component: DataTable,
    /*
    argTypes: {
        backgroundColor: { control: 'color' },
    },*/
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});

Default.args = {
    globalData: defaultData
};