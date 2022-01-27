import DataTable from '../FullTables/DataTable'
import { Form } from 'react-bootstrap';
import { useTables } from '../../context/TablesContext';
import { useState } from 'react';



const ASNFullTable = ({searchFunction}) => {
    const [searchColumns] = useState(['id', 'org_id', 'asn']);
    const[query, setQuery] = useState('');


    const {
        tables
    } = useTables();

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
        <div>
            <h2> ASN Table </h2>
            <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder='Search...'
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
            />
            <DataTable data={searchFunction(tables['asn'], searchColumns, query)}
                items={items}
                name={'asn'}
            />
        </div>
    )
};

export default ASNFullTable;
