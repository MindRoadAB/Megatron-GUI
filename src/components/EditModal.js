import Modal from 'react-modal'
import { useState } from "react"
import {Form, Button} from 'react-bootstrap'

const EditModal = ({onCloseClick, organization, onEditSubmit}) => {
    // Styling
    const modalStyle = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    // Date
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    // States
    const [name, setName] = useState(organization.name);
    const [id] = useState(organization.id);
    const [prio, setPrio] = useState(organization.prio);
    const [ASN, setAsn] = useState(organization.ASN);
    const [domains, setDomains] = useState(organization.domains);
    const [IPRanges, setIpRanges] = useState(organization.IPRanges);
    const [regNo, setRegistrationNumber] = useState(organization.regNo);
    const [countryCode, setCountryCode] = useState(organization.countryCode);
    const [languageCode, setLanguageCode] = useState(organization.languageCode);
    const [description, setDescirtpion] = useState(organization.description);
    const [status, setStatus] = useState(organization.status);
    const [lastModified] = useState(date);
    const [comments] = useState(organization.comments);

    // Submit method
    const onSubmit = (e) =>{
        e.preventDefault();

        if(!name){
            alert('Please add a name to the org');
            return;
        }

        onEditSubmit({id, name, regNo, IPRanges, domains, ASN, 
                    prio, countryCode, languageCode, status, 
                    description, lastModified, comments});
        onCloseClick();
    }

    // Modal form
    return (
        <Modal isOpen={true} 
            ariaHideApp={false} 
            style={modalStyle}> 
        <h1>{name}</h1>

        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-2">
                <Form.Label>Organization name:</Form.Label>
                <Form.Control type='text' 
                    placeholder='Organization name'
                    value={name}
                    onChange={(e) => setName(e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>AS Number:</Form.Label>
                <Form.Control type='text' 
                    placeholder='AS number'
                    value={ASN}
                    onChange={(e) => setAsn(e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Prio:</Form.Label>
                <Form.Select onChange={(e) => setPrio(e.target.value) }>
                    <option>{prio}</option>
                    <option value="Organization Category 1 [95]">Organization Category 1 [95]</option>
                    <option value="Organization Category 2 [90]">Organization Category 2 [90]</option>
                    <option value="Organization Category 3 [80]">Organization Category 3 [80]</option>
                    <option value="Organization Category 4 [70]">Organization Category 4 [70]</option>
                    <option value="Organization Category 5 [65]">Organization Category 5 [65]</option>
                    <option value="Organization Category 6 [60]">Organization Category 6 [60]</option>
                    <option value="Organization Category 7 [50]">Organization Category 7 [50]</option>
                    <option value="Organization Category 8 [45]">Organization Category 8 [45]</option>
                    <option value="Organization Category 9 [40]">Organization Category 9 [40]</option>
                    <option value="Organization Category 10 [30]">Organization Category 10 [30]</option>
                    <option value="Organization Category 11 [20]">Organization Category 11 [20]</option>
                    <option value="ISP [10]">ISP [10]</option>
                    <option value="Parked with no prio [0]">No prio [0]</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Domains:</Form.Label>
                <Form.Control type='text' 
                    placeholder='Domains'
                    value={domains}
                    onChange={(e) => setDomains(e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>IP Ranges:</Form.Label>
                <Form.Control type='text' 
                    placeholder='IP Ranges'
                    value={IPRanges}
                    onChange={(e) => setIpRanges(e.target.value) }/>
            </Form.Group>
            
            <Form.Group className="mb-2">
                <Form.Label>Registration number:</Form.Label>
                <Form.Control type='text' 
                    placeholder='Registration number:'
                    value={regNo}
                    onChange={(e) => setRegistrationNumber(e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Country code:</Form.Label>
                <Form.Control type='text' 
                    placeholder='Country code:'
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Language code:</Form.Label>
                <Form.Control type='text' 
                    placeholder='Language code:'
                    value={languageCode}
                    onChange={(e) => setLanguageCode(e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Description:</Form.Label>
                <Form.Control as='textarea' 
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescirtpion(e.target.value) }
                    />
            </Form.Group>

            <Form.Group className="mb-2">
                    <Form.Label>Enabled:</Form.Label>
                    <Form.Check />
            </Form.Group>

            <Button className="m-1" variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="danger" onClick={onCloseClick}>
                Cancel
            </Button>
        </Form>    

        </Modal>
    )
}

export default EditModal