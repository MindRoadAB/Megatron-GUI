import React from "react";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import DomainNameTable from "../DetailedTables/DomainNameTable";
import IpRangeTable from "../DetailedTables/IpRangeTable";
import ASNTable from "../DetailedTables/ASNTable";
import ContactTable from "../DetailedTables/ContactTable";
import {
    OrganizationDetailContext,
    useOrganization
} from "../../context/OrganizationDetailContext";


const VPadding = () => <div style={{marginTop: "3rem"}} />;

const OrganizationInfo = () => {
    const { organization } = useOrganization();
    return <h1>{organization.organization.name}</h1>;
}

const OrganizationDetailed = () => {

    const { orgId } = useParams();

    return (
        <OrganizationDetailContext orgId={orgId}>
            <Container>
                <OrganizationInfo />
                <VPadding />
                <DomainNameTable />
                <VPadding />
                <IpRangeTable />
                <VPadding />
                <ASNTable />
                <VPadding />
                <ContactTable />
                <VPadding />
            </Container>
        </OrganizationDetailContext>
    );
}

export default OrganizationDetailed;
