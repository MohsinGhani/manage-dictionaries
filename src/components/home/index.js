import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import { dictionaryAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';
import { Header, Grid, Button } from 'semantic-ui-react'
import DictionaryList from './../DictionaryList'
import CreateDictionary from './../CreateDictionary'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCreateRender: false
        }
    }

    render() {
        return (
            <div>
                <Header as='h1' block className="swing-in-top-fwd">
                    <Grid>
                        <Grid.Column floated='left' width={8}>
                            Manage Dictionaries
                        </Grid.Column>
                        <Grid.Column floated='right' width={4}>
                            {
                                this.state.isCreateRender ?
                                    <Button
                                        content=''
                                        icon='list ul'
                                        label={{ as: 'a', basic: true, pointing: 'right', content: 'Dictionary List .....' }}
                                        labelPosition='left'
                                        onClick={() => this.setState({ isCreateRender: false })}
                                    />
                                    :
                                    <Button
                                        content=''
                                        icon='book'
                                        label={{ as: 'a', basic: true, pointing: 'right', content: 'Create Dictionary' }}
                                        labelPosition='left'
                                        onClick={() => this.setState({ isCreateRender: true })}
                                    />
                            }
                        </Grid.Column>
                    </Grid>
                </Header>
                {
                    this.state.isCreateRender ? <CreateDictionary /> : <DictionaryList />
                }
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