import {Table, Button, ButtonGroup } from "react-bootstrap"
import {Link} from 'react-router-dom'
import DeletionModal from "../Modals/DeletionModal"
import { useState } from "react"
import EditModal from "../Modals/EditModal"

const OrganizationTable = ({data, remove, edit}) => {
    const prios =  [
        {value: 2, text: 'Organization Category 1 [95]'},
        {value: 3, text: 'Organization Category 2 [90]'},
        {value: 4, text: 'Organization Category 3 [80]'},
        {value: 5, text: 'Organization Category 4 [70]'},
        {value: 6, text: 'Organization Category 5 [65]'},
        {value: 7, text: 'Organization Category 6 [60]'},
        {value: 8, text: 'Organization Category 7 [50]'},
        {value: 9, text: 'Organization Category 8 [45]'},
        {value: 10, text: 'Organization Category 9 [40]'},
        {value: 11, text: 'Organization Category 10 [30]'},
        {value: 12, text: 'Organization Category 11 [20]'},
        {value: 13, text: 'ISP [10]'},
        {value: 14, text: 'Parked with no prio [0]'}
    ]

    const [showDeleteOrg, setShowDeleteOrg] = useState(false);
    const [showEditOrg, setShowEditOrg] = useState(false);

    const [org, setOrg] = useState(null);

    const handleCloseDeleteOrg = () => setShowDeleteOrg(false);
    const handleShowDeleteOrg = () => setShowDeleteOrg(true);

    const handleCloseEditOrg = () => setShowEditOrg(false);
    const handleShowEditOrg = () => setShowEditOrg(true);


    return (
        <div>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th key={'id'}>Id</th>
                        <th key={'name'}>Name</th>
                        <th key={'prio'}>Prio</th>
                        <th key={'desc'}>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map(row => 
                            <tr key={'content_'+ row.id}>
                                <td key={'id_'+ row.id}>{row.id}</td> 
                                <td key={'name_'+ row.name}>{row.name}</td>
                                <td key={'prio_' + row.id }>{prios[row.prio_id].text}</td>
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
                                            onClick={() => {setOrg(row); handleShowDeleteOrg()}}
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
                <DeletionModal visible={showDeleteOrg}
                    onClose={handleCloseDeleteOrg} 
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
