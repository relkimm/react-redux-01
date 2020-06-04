import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as waitingActions from '../store/modules/waiting';
import WaitingList from '../components/WaitingList';

class WaitingListContainer extends Component {

    handleChange = e => {
        const { waitingActions } = this.props;
        waitingActions.changeInput(e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        const { waitingActions, input } = this.props;
        waitingActions.create(input);
        waitingActions.changeInput('');
    };

    handleEnter = id => {
        const { waitingActions } = this.props;
        waitingActions.enter(id);
    };

    handleLeave = id => {
        const { waitingActions } = this.props;
        waitingActions.leave(id);
    };

    render() {
        const { input, list } = this.props;
        return (
            <WaitingList
                input={input}
                waitingList={list}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onEnter={this.handleEnter}
                onLeave={this.handleLeave}
            />
        );
    }
}




const mapStateToProps = ({ waiting }) => ({
    input: waiting.input,
    list: waiting.list
});

const mapDispatchToProps = dispatch => ({
    waitingActions: bindActionCreators(waitingActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)
    (WaitingListContainer);

