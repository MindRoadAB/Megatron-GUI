import DataTable from "./DataTable";
import { Form } from 'react-bootstrap';
import { useTables } from '../../context/TablesContext';
import { useState } from 'react';

const ContactFullTable = ({searchFunction}) => {
    const {
        tables
    } = useTables();

    const [searchColumns] = useState(['id', 'org_id', 'first_name', 'last_name', 'email_address']);
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
            label: 'First Name',
            key: 'first_name'
        },
        {
            label: 'Last Name',
            key: 'last_name'
        },
        {
            label: 'Role',
            key: 'role'
        },
        {
            label: 'Email Address',
            key: 'email_adress'
        },
        {
            label: 'Email Type',
            key: 'email_type'
        },
        {
            label: 'Phone Number',
            key: 'phone_number'
        },
        {
            label: 'Comment',
            key: 'comment'
        },
        {
            label: 'Enabled',
            key: 'enabled'
        },
        {
            label: 'Created',
            key: 'created'
        },
        {
            label: 'Last Modified',
            key: 'last_modified'
        },
        {
            label: 'Modified By',
            key: 'modified_by'
        },
        {
            label: 'External Reference',
            key: 'external_reference'
        },
        {
            label: 'Auto Update',
            key: 'auto_update'
        }
    ];

    return (
        <div>
            <h2> Contact Table </h2>
            <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder='Search...'
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
            />
            <DataTable data={searchFunction(tables['contact'], searchColumns, query)}
                items={items}
                name={'contact'}
            />
        </div>
    )
};

export default ContactFullTable;
