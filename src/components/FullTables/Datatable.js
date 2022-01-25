import {Table, Button} from 'react-bootstrap'


// The code for the structure of the table

//We have two of the (one in organizations.js) should be able to have only one
const camelToSentence = (s) =>{

    //Special cases
    if(s === 'ASN')
        return 'ASN';
    else if(s === 'IPRanges')
        return 'IP Ranges';

    let res = s.replace(/([A-Z])/g, ' $1');
    res = res.charAt(0).toUpperCase() + res.slice(1);
    return res;
}

const Datatable = ({data, onDelete, onEdit}) => {
    const columns = data[0] && Object.keys(data[0]);
    return (
        <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                 {data[0] && columns.map(heading => <th>{camelToSentence(heading)}</th>)} 
                 <th>Actions</th>  
                </tr>
            </thead>
            <tbody>
                {data.map(row => 
                <tr>
                    {
                        columns.map(column => <td>{row[column]}</td>)
                    }
                    <td>
                        <Button className='m-1' variant='primary' onClick={() => onEdit(row.id)}>Edit</Button>
                        <Button variant='danger' onClick={() => onDelete(row.id)}>Delete</Button>
                    </td>
                </tr>)
                }
            </tbody>
        </Table>
    )
}

export default Datatable