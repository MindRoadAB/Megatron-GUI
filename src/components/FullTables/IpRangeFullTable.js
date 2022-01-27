import DataTable from '../FullTables/DataTable'
import { Form } from 'react-bootstrap';
import { useTables } from '../../context/TablesContext';
import { useState } from 'react';

const IpRangeFullTable = ({searchFunction}) => {
    const {
        tables
    } = useTables();

    const [searchColumns] = useState(['id', 'org_id', 'start_address', 'end_address', 'net_name']);
    const[query, setQuery] = useState('');
   
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
        <div>
            <h2> IP Range Table </h2>
            <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder='Search...'
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
            />
            <DataTable data={searchFunction(tables['ip_range'], searchColumns, query)}
                items={items}
                name={'ip_range'}
            />
        </div>
    )
};

export default IpRangeFullTable;
