import DataTable from '../FullTables/DataTable'

const DomainNameFullTable = () => {
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
            label: 'Domain Name',
            key: 'domain_name'
        }
    ];
    return (
        <DataTable dataKey={'domain_name'}
            items={items}
            header={'Domain Name Table'}/>
    )
};

export default DomainNameFullTable;
