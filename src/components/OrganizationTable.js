import {Table, Button, ButtonGroup } from "react-bootstrap"
import {Link} from 'react-router-dom'

const OrganizationTable = ({data, remove}) => {

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
                                            onClick={() => remove(row.id)}
                                        >
                                            Delete
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            </tr>)
                   }
                </tbody>
            </Table>
        </div>
    )
}


export default OrganizationTable
