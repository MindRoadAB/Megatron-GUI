import {FaTimes} from 'react-icons/fa';

const Organization = ({organization, onDelete}) => {
    return (
        <div>
            <h3>{organization.name} 
                <FaTimes 
                    style={{color:'red', cursor:'pointer'}} 
                    onClick={() => onDelete(organization.id)}
                />
            </h3>
            <p>{organization.orgno}</p>
            <p>{organization.ipranges}</p>
            <p>{organization.domains}</p>
            <p>{organization.asn}</p>
            <p>{organization.prio}</p>
            <p>{organization.countryCode}</p>
            <p>{organization.languageCode}</p>
        </div>
    )
}

export default Organization
