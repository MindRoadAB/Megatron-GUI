import { CSVLink } from 'react-csv';

const ExportTableButton = ({data, name}) =>
    <CSVLink data={data}
        filename={name + '_table.csv'}
        className='btn btn-secondary m-1'
        target='_blank'

    >
        Export table
    </CSVLink>
export default ExportTableButton;
