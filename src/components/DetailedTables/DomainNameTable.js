import DetailedTable from "./DetailedTable";
import React from "react";

const DomainNameTable = () =>
    <DetailedTable
        header={'Domännamn'}
        dataKey={'domain_name'}
        items={[{
            label: 'Domain name',
            key: 'domain_name'
        }]}
    />;

export default DomainNameTable;