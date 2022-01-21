import {Table, Button, ButtonGroup } from "react-bootstrap"
import {Link} from 'react-router-dom'
import DeletionModal from "./DeletionModal"
import { useState } from "react"
import EditModal from "./EditModal"

const OrganizationTable = ({data, remove, edit}) => {

    const [showDeleteOrg, setShow] = useState(false);
    const [showEditOrg, setShowEditOrg] = useState(false);

    const [org, setOrg] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseEditOrg = () => setShowEditOrg(false);
    const handleShowEditOrg = () => setShowEditOrg(true);

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
                                            variant='secondary'
                                        >
                                            View
                                        </Button>

                                        <Button
                                            className='m-1' 
                                            variant='primary'
                                            onClick={() => {setOrg(row); handleShowEditOrg()}}
                                        >
                                            Edit
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
            {showEditOrg && 
                <EditModal visible={showEditOrg} 
                    onEditSubmit={edit}
                    onClose={handleCloseEditOrg}
                    edit={true}
                    orgToEdit={org}
                />
            }

        </div>

        
    )
}


export default OrganizationTable
