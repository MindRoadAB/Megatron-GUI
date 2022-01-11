import DetailedTable from "./DetailedTable";
import React from "react";

const IpRangeTable = () =>
    <DetailedTable
        header={'IP Range'}
        dataKey={'ip_range'}
        items={[
            {
                label: 'Start Address',
                key: 'start_address'
            },
            {
                label: 'End Address',
                key: 'end_address'
            },
            {
                label: 'Net Name',
                key: 'net_name'
            },
        ]}
    />;

export default IpRangeTable;