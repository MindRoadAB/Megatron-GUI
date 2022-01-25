import DataTable from '../FullTables/DataTable'
import { Form } from 'react-bootstrap';
import { useTables } from '../../context/TablesContext';
import { useState } from 'react';

const DomainNameFullTable = () => {
    const {
        tables
    } = useTables();

    const [searchColumns] = useState(['id', 'org_id', 'domain_name']);
    const[query, setQuery] = useState('');

    const search = (rows) =>{
        return rows.filter(
            (row) => 
                searchColumns.some((column) => row[column]?.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
            );
    }
   
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
        <div>
            <h2> Domain Name Table </h2>
            <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder='Search...'
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
            />
            <DataTable data={search(tables['domain_name'])}
                items={items}
            />
        </div>
    )
};

export default DomainNameFullTable;
