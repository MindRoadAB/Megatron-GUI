import DataTable from '../FullTables/DataTable'

const IpRangeFullTable = () => {
    const items=[
        {
            label: 'Id',
            key: 'id'
        },
        {
            label: 'Organization Id',
            key: 'org_id'
        },
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
        }
    ];
    return (
        <DataTable dataKey={'ip_range'}
            items={items}
            header={'IP Range Table'}/>
    )
};

export default IpRangeFullTable;
