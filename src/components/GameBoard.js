import React, {Component} from 'react';
import TargetContainer from '../containers/TargetContainer';
import TimerContainer from '../containers/TimerContainer';
import NumbersContainer from '../containers/NumbersContainer';
import UsersInput from '../containers/UsersInputContainer';
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
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" id="game">
                        <div className="row animatable">
                            <TargetContainer />
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
                            <TimerContainer />
                        </div>
                        <div className="row">
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                            <div className="col-lg-10">
                                <UsersInput />
                            </div>
                        </div>
                        <div className="row animatable">
                            <NumbersContainer />
                        </div>
                        <div className="row animatable">
                            <OperatorsContainer />
                        </div>
                        <div className="row">
                            <ButtonContainer />
                        </div>
                        <div classname="row">
                            <Footer />
                        </div>
                        <ModalContainer />
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>
            </div>
        )
    }
}

export default GameBoard;
