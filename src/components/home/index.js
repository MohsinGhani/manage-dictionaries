import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import { dictionaryAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { dictionaryReducer: { createdDictionary, createDictionaryLoader, createDictionaryError } } = state;
    return {
        createdDictionary, createDictionaryLoader, createDictionaryError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createDictionary: () => dispatch(dictionaryAction.createDictionary()),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(Home));