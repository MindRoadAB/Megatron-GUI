import {Button,  Modal } from "react-bootstrap"

const DeletionModal = ({onClose, orgToDelete, onDelete}) => {
    return (
        <div>
            <Modal show={true} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {orgToDelete.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {orgToDelete.name}?</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={() =>{ onDelete(orgToDelete.id); onClose()}}>
                    Delete
                </Button>

                <Button variant="secondary" onClick={onClose} >
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default DeletionModal
