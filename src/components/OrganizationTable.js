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
                        <th key={'id'}>Id</th>
                        <th key={'name'}>Name</th>
                        <th key={'desc'}>Description</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map(row => 
                            <tr key={'content_'+ row.id}>
                                <td key={'id_'+ row.id}>{row.id}</td> 
                                <td key={'name_'+ row.name}>{row.name}</td>
                                <td key={'desc_'+ row.description}>{row.description}</td>
                                <td key={'btn_' + row.id }>
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
