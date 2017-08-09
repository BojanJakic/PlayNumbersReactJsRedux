import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalErrorResult = (props) => {
    return (
        <div>
            <Modal show={props.open}>
                <Modal.Body>
                    <div className="row text-danger">
                        <div className="col-lg-1-offset col-lg-10">
                            <p>Sorry,</p>
                            <p>Target : {props.target}</p>
                            <p>Result : {props.result}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={() => props.closeModal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default ModalErrorResult;