import {Table} from 'react-bootstrap'
import { useTables } from '../../context/TablesContext';

const DataTable = ({dataKey, items, header}) => {
    const {
        tables
    } = useTables();

    return (
        <div>
            <h2>{header}</h2>
             <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        {items.map(it => <th key={it.key}>{it.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                   {
                       tables[dataKey].map(row => 
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
