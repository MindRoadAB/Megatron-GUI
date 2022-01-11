import DetailedTable from "./DetailedTable";
import React from "react";

const ASNTable = () =>
    <DetailedTable
        header={'ASN'}
        dataKey={'asn'}
        items={[{
            label: 'ASN',
            key: 'asn'
        }]}
    />;

export default ASNTable;