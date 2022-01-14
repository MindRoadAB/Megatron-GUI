import {Table, Button, ButtonGroup } from "react-bootstrap"
import {Link} from 'react-router-dom'
import DeletionModal from "./DeletionModal"
import { useState } from "react"

const OrganizationTable = ({data, remove}) => {

    const [showDeleteOrg, setShow] = useState(false);
    const [org, setOrg] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map(row => 
                            <tr>
                                <td>{row.id}</td> 
                                <td>{row.name}</td>
                                <td>{row.description}</td>
                                <td>
                                    <ButtonGroup className='float-end' >
                                        <Button as={Link} 
                                            to={'/organization/' + row.id} 
                                            className='m-1' 
                                            variant='primary'
                                        >
                                            View
                                        </Button>

                                        <Button
                                            className='m-1' 
                                            variant='danger'
                                            onClick={() => {setOrg(row); handleShow()}}
                                        >
                                            Delete
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            </tr>)
                   }
                </tbody>
            </Table>

            {showDeleteOrg &&
            <DeletionModal onCloseClick={() => handleClose()} 
                orgToDelete={org}
                onDelete={remove}/>}

        </div>

        
    )
}


export default OrganizationTable
