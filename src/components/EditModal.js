import { useState } from 'react'
import {Form, Button, Modal, Col, Row, Container} from 'react-bootstrap'

const EditModal = ({visible, onEditSubmit, onClose, edit, orgToEdit={}}) => {
    

    // States
    const [name, setName] = useState(edit? orgToEdit.name : '');
    const [prio_id, setPrio] = useState(edit? orgToEdit.prio_id : '');
    const [registration_no, setRegistrationNumber] = useState(edit? orgToEdit.registration_no : '');
    const [country_code, setCountryCode] = useState(edit? orgToEdit.country_code : 'SE');
    const [language_code, setLanguageCode] = useState(edit? orgToEdit.language_code : 'sv');
    const [description, setDescirtpion] = useState(edit? orgToEdit.description : '');
    const [enabled, setEnabled] = useState(edit? orgToEdit.enabled : false);

    const [header] = useState(edit? 'Edit ' + orgToEdit.name : 'Add organization');

    // Submit method
    const onSubmit = (e) =>{
        e.preventDefault();

        // Maybe these should be set in backend
        const auto_update_match_fields = true;
        const date = new Date();
        const timestamp = date.getTime() / 1000;

        const created = timestamp;
        const last_modified = timestamp;
        const modified_by = 'GUI';
        let comment;

        if(edit)
            comment = '[1 ' + date.toISOString().split('.')[0] + '] Edited.';
        else
            comment = '[1 ' + date.toISOString().split('.')[0] + '] Created.';

        if(!name){
            alert('Please add a name to the organization');
            return;
        }
        if(!prio_id){
            alert('Please add a prio to the organization');
            return;
        }

        onEditSubmit({auto_update_match_fields, name, registration_no, prio_id, country_code, 
            language_code, description, enabled, created, last_modified, modified_by, comment });
        clearForm();
        onClose();
    }

    const clearForm = () =>{
        setName('');
        setRegistrationNumber('');
        setCountryCode('SE');
        setLanguageCode('sv');
        setDescirtpion(''); 
        setEnabled(false);
    }

    // Modal form
    return (
        <Modal show={visible} 
            onHide={onClose}
            centered
        >
            <Modal.Header className='mb-3' closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            
            <Container fluid>
                <Form onSubmit={onSubmit}>
                    <Form.Group as={Row} className='mb-2'>
                        <Form.Label column>Organization name:</Form.Label>
                        <Col>
                            <Form.Control type='text' 
                                placeholder='Organization name'
                                value={name}
                                onChange={(e) => setName(e.target.value) }
                            />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className='mb-2'>
                        <Form.Label column>Prio:</Form.Label>
                        <Col>
                            <Form.Select onChange={(e) => setPrio(e.target.value) }>
                                <option></option>
                                <option value='2'>Organization Category 1 [95]</option>
                                <option value='3'>Organization Category 2 [90]</option>
                                <option value='4'>Organization Category 3 [80]</option>
                                <option value='5'>Organization Category 4 [70]</option>
                                <option value='6'>Organization Category 5 [65]</option>
                                <option value='7'>Organization Category 6 [60]</option>
                                <option value='8'>Organization Category 8 [45]</option>
                                <option value='10'>Organization Category 9 [40]</option>
                                <option value='11'>Organization Category 10 [30]</option>
                                <option value='12'>Organization Category 11 [20]</option>
                                <option value='13'>ISP [10]</option>
                                <option value='1'>No prio [0]</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className='mb-2'>
                        <Form.Label column>Registration number:</Form.Label>
                        <Col>
                            <Form.Control type='text' 
                                placeholder='Registration number'
                                value={registration_no}
                                onChange={(e) => setRegistrationNumber(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className='mb-2'>
                        <Form.Label column>Country code:</Form.Label>
                        <Col>
                            <Form.Control type='text' 
                                placeholder='Country code'
                                value={country_code}
                                onChange={(e) => setCountryCode(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className='mb-2'>
                        <Form.Label column>Language code:</Form.Label>
                        <Col>
                            <Form.Control type='text' 
                                placeholder='Language code:'
                                value={language_code}
                                onChange={(e) => setLanguageCode(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className='mb-2'>
                        <Form.Label column>Description:</Form.Label>
                        <Col>
                            <Form.Control as='textarea' 
                                placeholder='Description'
                                value={description}
                                onChange={(e) => setDescirtpion(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className='mb-2'>
                        <Col sm={{ span: 10, offset: 6 }}>
                            <Form.Check label='Enabled' 
                                checked = {enabled  ? true : false}
                                onChange={(e) => setEnabled(() => e.target.checked ? true : false) }
                            />
                        </Col>
                    </Form.Group>

                    <Modal.Footer>
                        <Button className='m-1' 
                            variant='primary' 
                            type='submit'
                        >
                            Submit
                        </Button>
                        <Button variant="danger" onClick={onClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Container>
        </Modal>
    )
}

export default EditModal