import {React, useState} from 'react';
import { Modal, ButtonToolbar, Button, RadioGroup, Radio, Placeholder } from 'rsuite';

const styles = {
    radioGroupLabel: {
        padding: '8px 12px',
        display: 'inline-block',
        verticalAlign: 'middle'
    }
};

function ModalWrapper({isOpen, onClose, selectedDate}) {

    const [open, setOpen] = useState(true);
    const [backdrop, setBackdrop] = useState('static');
    const handleOpen = () => setOpen(true);
    const handleClose = () => onClose();

    return (
        <Modal backdrop={backdrop} keyboard={false} open={isOpen} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Placeholder.Paragraph />
                <h1>Data selezionata</h1>
                <br /> {selectedDate?.toDateString()}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance="primary">
                    Ok
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWrapper;