import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalErrorResult = (props) => {
    return (
        <div>
            <Modal show={props.open}>
                <Modal.Body>
                    <div className="row text-danger">
                        <div className="col-lg-1-offset col-lg-4"><img className="img-responsive" src={'milka.jpg'} alt="N/A"/></div>
                        <div className="col-lg-6">
                            <p>Sorry,</p>
                            <p>Target Number : {props.target}</p>
                            <p>Your Result : {props.result}</p>
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
