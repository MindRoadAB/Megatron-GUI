import {Button,  Modal } from "react-bootstrap"

const DeletionModal = ({onCloseClick, orgToDelete, onDelete}) => {
    return (
        <div>
            <Modal show={true} onHide={onCloseClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {orgToDelete.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {orgToDelete.name}?</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={() =>{ onDelete(orgToDelete.id); onCloseClick()}}>
                    Delete
                </Button>

                <Button variant="secondary" onClick={onCloseClick} >
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default DeletionModal
