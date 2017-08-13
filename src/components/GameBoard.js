import React, {Component} from 'react';
import TargetContainer from '../containers/TargetContainer';
import TimerContainer from '../containers/TimerContainer';
import NumbersContainer from '../containers/NumbersContainer';
import UsersInputContainer from '../containers/UsersInputContainer';
import ButtonContainer from '../containers/ButtonContainer';
import OperatorsContainer from '../containers/OperatorsContainer';
import ModalContainer from '../containers/ModalContainer';
import Header from './Header'
import Footer from './Footer'

class GameBoard extends Component {

    render = () => {
        return (
            <div className="game-container">
                <Header />
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" id="game">
                        <div className="row">
                            <TargetContainer />
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
                            <TimerContainer />
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                            <div className="col-lg-8">
                                <UsersInputContainer />
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                        </div>
                        <div className="row">
                            <NumbersContainer />
                        </div>
                        <div className="row">
                            <OperatorsContainer />
                        </div>
                        <div className="row">
                            <ButtonContainer />
                        </div>
                        <div className="row">
                            <Footer />
                        </div>
                        <ModalContainer />
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
        )
    }
}

export default GameBoard;
