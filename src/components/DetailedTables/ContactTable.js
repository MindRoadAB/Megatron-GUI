import DetailedTable from "./DetailedTable";
import React from "react";

const ContactTable = () =>
    <DetailedTable
        header={'Kontakter'}
        dataKey={'contact'}
        addTimestamps={true}
        defaultObject={{
            email_type: 'smtp',
            modified_by: 'gui',
            auto_update_email: 0,
            enabled: '1'
        }}
        items={[
            {
                label: 'Förnamn',
                key: 'first_name'
            },
            {
                label: 'Efternamn',
                key: 'last_name'
            },
            {
                label: 'Roll',
                key: 'role'
            },
            {
                label: 'Telefon',
                key: 'phone_number'
            },
            {
                label: 'Email',
                key: 'email_address'
            },
            {
                label: 'Email-typ',
                key: 'email_type'
            },
            {
                label: 'Extern referens',
                key: 'external_reference'
            },
            {
                label: 'Enabled',
                key: 'enabled'
            },
            {
                label: 'Kommentar',
                key: 'comment'
            }
        ]}
    />;

export default ContactTable;