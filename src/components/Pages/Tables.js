import React from "react";
import{Container} from 'react-bootstrap'
import ASNFullTable from "../FullTables/ASNFullTable";
import ContactFullTable from "../FullTables/ContactFullTable";
import {
    TablesContext,
    useTables
} from "../../context/TablesContext";
import IpRangeFullTable from "../FullTables/IpRangeFullTable";
import DomainNameFullTable from '../FullTables/DomainNameFullTable';

const search = (rows, searchColumns, query) =>{
    return rows.filter(
        (row) => 
            searchColumns.some((column) => row[column]?.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
        );
}


const VPadding = () => <div style={{marginTop: "3rem"}} />;

const TablesInfo = () => {
    const { tables } = useTables();
    console.log(tables);                                                                        
    return <h1>All of the data</h1>;
}


const Tables = () => {
  return (
        <TablesContext>
            <Container>
                <VPadding />
                <TablesInfo />
                <VPadding />
                <ContactFullTable searchFunction={search} />
                <VPadding />
                <ASNFullTable searchFunction={search} />
                <VPadding />
                <IpRangeFullTable searchFunction={search} />
                <VPadding />
                <DomainNameFullTable searchFunction={search} />
                
            </Container>
        </TablesContext>
    )
};

export default Tables;
