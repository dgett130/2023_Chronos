import {React, useEffect, useState} from 'react';
import {Modal, ButtonToolbar, Button, RadioGroup, Radio, Placeholder, Cascader, Slider} from 'rsuite';
import {mockedDataForJobsCascader} from '../mockData.js';
import './ModalWrapper.css';
import { projectAPI } from '../apis/projectAPI.js';
import {project_typesAPI} from "../apis/project_typesAPI";
import {mapModalProjectSelection} from "../../utility/responseUtility";

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

    const [projectsList, setProjectsList] = useState([]);
    const [project_types, setProject_types] = useState([]);

    useEffect(() => {
        projectAPI.getAll().then((response) => {
            setProjectsList(response);
        }).catch((error) => {
            console.error("Error: ", error);
        });
        project_typesAPI.getAll().then((response) => {
            setProject_types(response);
        }).catch((error) => {
            console.error("Error: ", error);
        });
    },[]);

    return (
        <Modal backdrop={backdrop} keyboard={false} open={isOpen} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>Attività</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3>{selectedDate?.toDateString()}</h3>
                <br/>
                {/*<Placeholder.Graph/>*/}
                <div>
                    <h4>Progetto</h4>
                    <Cascader data={mapModalProjectSelection(projectsList, project_types)} placeholder="Seleziona un progetto"/>
                </div>
                <div>
                    <h4>Ore</h4>
                    <Slider className="slider" defaultValue={0} min={0} step={1} max={8} graduated progress />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance="primary">
                    Salva
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                    Chiudi
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWrapper;
