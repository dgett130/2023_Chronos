import {React, useEffect, useState} from 'react';
import {Modal, ButtonToolbar, Button, RadioGroup, Radio, Placeholder, Cascader, Slider, Loader} from 'rsuite';
import {mockedDataForJobsCascader} from '../mockData.js';
import './ModalWrapper.css';
import { projectAPI } from '../apis/projectAPI.js';
import {project_typesAPI} from "../apis/project_typesAPI";
import {mapModalProjectSelection} from "../../utility/responseUtility";
import { InputNumber } from 'rsuite';

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
    const [projectHours, setProjectHours] = useState(0);
    const [loading, setLoading] = useState(false);

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

    const handleOreChange = (value, event) => {
        setProjectHours(value);
    }

    const handleProjectChange = (value, event) => {
        setProjectHours(0);
    }

    const handleSave = () => {
        setLoading(true);
        console.log("Salvataggio in corso...");
        setTimeout(() => {
            handleClose();
            setLoading(false);
        }, 2000);
    }

    return (
        <div>
            <Modal backdrop={backdrop} keyboard={false} open={isOpen} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Attività</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        {loading && <div>
                            <Loader backdrop size="md" content="Salvataggio..." vertical/>
                        </div>}
                        <h3>{selectedDate?.toDateString()}</h3>
                        <br/>
                        {/*<Placeholder.Graph/>*/}
                        <div>
                            <h4>Progetto</h4>
                            <Cascader data={mapModalProjectSelection(projectsList, project_types)}
                                      onChange={handleProjectChange}
                                      placeholder="Seleziona un progetto"/>
                        </div>
                        <div>
                            <h4>Ore</h4>
                            <InputNumber value={projectHours} defaultValue={0} min={0} max={8} step={0.50} onChange={handleOreChange}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSave} appearance="primary">
                        Salva
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalWrapper;
