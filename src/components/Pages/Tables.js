import React from "react";
import{Container} from 'react-bootstrap'
import {
    TablesContext,
    useTables
} from "../../context/TablesContext";


const VPadding = () => <div style={{marginTop: "3rem"}} />;

const TablesInfo = () => {
    const { tables } = useTables();
    console.log(tables);                                                                        
    return <h1>All of the data</h1>;
}


const Tables = () => {
  return (
        <div>
            <TablesContext>
                <Container>
                    <VPadding />
                    <TablesInfo />
                </Container>
            </TablesContext>
        </div>
    )
};

export default Tables;
