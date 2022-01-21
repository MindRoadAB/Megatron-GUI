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
