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
                <ContactFullTable />
                <VPadding />
                <ASNFullTable />
                <VPadding />
                <IpRangeFullTable />
                <VPadding />
                <DomainNameFullTable />
                
            </Container>
        </TablesContext>
    )
};

export default Tables;
