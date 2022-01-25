import {Table} from 'react-bootstrap'
import { useTables } from '../../context/TablesContext';

const DataTable = ({data, items}) => {
    return (
        <div>
             <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        {items.map(it => <th key={it.key}>{it.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map(row => 
                            <tr>
                                {items.map(it => <td> {row[it.key]}</td>)}
                            </tr>
                        )
                   }
                </tbody>
            </Table>
        </div>
    )
};

export default DataTable;
