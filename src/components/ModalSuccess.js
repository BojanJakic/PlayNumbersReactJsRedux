import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalSuccess = (props) => {
    return(
        <div>
            <Modal show={props.open}>
                <Modal.Body>
                    <div className="row text-success">
                        <div className="col-lg-1-offset col-lg-10">
                            <p>Congratulation,</p>
                            <p>Target Number : {props.target}</p>
                            <p>Your Result : {props.result}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button  onClick={() => props.closeModal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default ModalSuccess;