import {Table, Button, ButtonGroup, Modal, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useOrganization} from "../../context/OrganizationDetailContext";
import { CSVLink } from 'react-csv';

const DataHeaders = ({items}) =>
    <thead>
        <tr>
            {
                items.map(it => <th key={it.key}>{it.label}</th>)
            }
            <th />
        </tr>
    </thead>;

const DataRow = ({listItem, items, setEditObject, deleteObject}) =>
    <tr>
        {
            items.map(item =>
                <>
                    <td key={item.key}>
                        { listItem[item.key] }
                    </td>
                </>
            )
        }
        <td>
            <ButtonGroup className={"float-end"}>
                <Button
                    className='m-1'
                    variant='primary'
                    onClick={() => setEditObject(listItem)}
                >
                    Edit
                </Button>
                <Button
                    className='m-1'
                    variant='danger'
                    onClick={() => deleteObject(listItem)}
                >
                    Delete
                </Button>
            </ButtonGroup>
        </td>
    </tr>;

const DataTable = ({items, dataList, setEditObject, deleteObject}) =>
    <Table striped bordered hover size='sm'>
        {
            dataList.length > 0 &&
            <DataHeaders
                items={items}
            />
        }
        <tbody>
        {
            dataList.map(listItem =>
                <DataRow
                    key={listItem.id}
                    listItem={listItem}
                    items={items}
                    setEditObject={setEditObject}
                    deleteObject={deleteObject}
                />
            )
        }
        </tbody>
    </Table>;

const EditModal = ({title, items, editItem, handleClose, setEditItem, onOk}) => {

    let body = <>
        {
            editItem &&
            items.map((it, idx) =>
                <Row>
                    <Col>
                        {it.label}
                    </Col>
                    <Col>
                        <input
                            autoFocus={idx === 0}
                            onChange={e => {
                                let newEditObject = {...editItem};
                                newEditObject[it.key] = e.target.value;
                                setEditItem(newEditObject);
                            }}
                            value={editItem[it.key]}
                        />
                    </Col>
                </Row>
            )
        }
    </>;

    let footer = <>
        <Button variant="primary" onClick={() => {
            onOk();
        }}>
            OK
        </Button>
        <Button variant="danger" onClick={handleClose}>
            Avbryt
        </Button>
    </>;

    return (
        <Modal
            show={editItem !== null}
            onHide={handleClose}
            animation={false}
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    { title }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { body }
            </Modal.Body>
            <Modal.Footer>
                { footer }
            </Modal.Footer>
        </Modal>
    );
}

const NewItemButton = ({onClick}) =>
    <Button
        className='m-1'
        variant='success'
        onClick={() => onClick()}
    >
        Add
    </Button>;

const ExportTableButton = ({data, name}) =>
    <CSVLink data={data}
        filename={name + '_table.csv'}
        className='btn btn-secondary m-1'
        target='_blank'

    >
        Export table
    </CSVLink>




const DetailedTable = ({header, dataKey, items, defaultObject={}, addTimestamps=false}) => {

    const {
        organization,
        updateOrganizationItem,
        removeOrganizationItem
    } = useOrganization();

    const [editItem, setEditItem] = useState(null);
    const handleClose = () => setEditItem(null);

    useEffect(() => {
        setEditItem(null);
    }, organization[dataKey]);

    return <>
        <h3>{header}</h3>
        <DataTable
            items={items}
            dataList={organization[dataKey]}
            setEditObject={setEditItem}
            deleteObject={deleteObject => removeOrganizationItem(dataKey, deleteObject)}
        />
        <NewItemButton
            onClick={() => setEditItem({...defaultObject})}
        />

        <ExportTableButton data={organization[dataKey]}
            name={organization.organization.name + '_' + header}
        />

        <EditModal
            title={header}
            items={items}
            editItem={editItem}
            handleClose={() => handleClose()}
            setEditItem={setEditItem}
            onOk={() => {
                let updateItem = {...editItem};
                if (addTimestamps) {
                    const date = new Date();
                    const timestamp = date.getTime() / 1000;
                    if (!updateItem.created) {
                        updateItem.created = timestamp;
                    }
                    updateItem.last_modified = timestamp;
                }
                updateOrganizationItem(dataKey, updateItem);
            }}
        />
    </>;
}

export default DetailedTable;