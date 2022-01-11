import {useParams} from "react-router-dom";

const OrganizationDetailed = () => {

    const { orgId } = useParams();

    return <div>Detailed info for organization: {orgId}</div>
}

export default OrganizationDetailed
