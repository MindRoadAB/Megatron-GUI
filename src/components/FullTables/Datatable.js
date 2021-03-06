import {Table, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ExportTableButton from '../ExportTableButton';

const DataTable = ({data, items, name}) => {
    return (
        <div>
             <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        {items.map(it => <th key={it.key}>{it.label}</th>)}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map(row => 
                            <tr>
                                {items.map(it => <td> {row[it.key]}</td>)}
                                <td>
                                    <Button className={'m-1 float-end'}
                                        as={Link} 
                                        to={'/organization/' + row.org_id}  
                                        variant='secondary'
                                    >
                                        View
                                    </Button>
                                </td>
                            </tr>
                        )
                   }
                </tbody>
            </Table>
                <ExportTableButton data={data} name={name} />
        </div>
    )
};

export default DataTable;
