import DataTable from "./DataTable";

const ContactFullTable = () => {
   
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
        
        <DataTable dataKey={'contact'}
            items={items}
            header={'Contacts Table'}/>
     )
};

export default ContactFullTable;
