import DataTable from '../FullTables/DataTable'

const ASNFullTable = () => {
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
            label: 'ASN',
            key: 'asn'
        }
    ];
    return (
        <DataTable dataKey={'asn'}
            items={items}
            header={'ASN Table'}/>
    )
};

export default ASNFullTable;
