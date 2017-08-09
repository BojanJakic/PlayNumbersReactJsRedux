import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalSuccess = (props) => {
    return(
        <div>
            <Modal show={props.open}>
                <Modal.Body>
                    <div className="row text-success modal-container">
                        <div className="col-xs-5 col-sm-5 col-md-4 col-lg-4"><img className="img-responsive" src={'milka.jpg'} alt="N/A"/></div>
                        <div className="col-xs-7 col-sm-7 col-md-8 col-lg-8">
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