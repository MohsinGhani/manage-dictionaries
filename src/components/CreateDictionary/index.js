import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import { dictionaryAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';
import { Container, Input, Grid, Divider, Button, Icon, Segment, Header } from 'semantic-ui-react'

class CreateDictionary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dictionary: [{ domain: '', range: '' }]
        }
    }

    addRowInDictionary = () => {
        let dictionary = this.state.dictionary
        if (dictionary) {
            dictionary.push({ domain: '', range: '' })
        } else {
            dictionary = [{ domain: '', range: '' }]
        }
        this.setState({ dictionary })
    }

    removeRowInDictionary = (index) => {
        let dictionary = this.state.dictionary
        if (dictionary.length === 1) return;
        dictionary.splice(index, 1)
        this.setState({ dictionary })
    }

    handleDomainInput = (e, i) => {
        let dictionary = this.state.dictionary
        dictionary[i].domain = e.target.value
        this.setState({ dictionary })
    }

    handleRangeInput = (e, i) => {
        let dictionary = this.state.dictionary
        dictionary[i].range = e.target.value
        this.setState({ dictionary })
    }

    createNewDictionary = () => {
        this.props.createDictionary(this.state.dictionary)
        this.setState({ dictionary: null })
    }

    render() {
        return (
            <Container className="fade-in">
                <Segment>
                    <Header as='h3' textAlign='left'>
                        Create Dictionary
                    </Header>
                </Segment>

                <Segment clearing color='blue'>
                    {
                        this.state.dictionary && this.state.dictionary.map((row, index) => {
                            return (
                                <div style={{ margin: '10px 0 10px 0' }} className="row" key={index}>
                                    <div className='col-md-1'></div>
                                    <div className='col-md-5'>
                                        <Input focus fluid placeholder='Write Domain here' onChange={(event) => this.handleDomainInput(event, index)} />
                                    </div>
                                    <div className='col-md-5'>
                                        <Input focus fluid placeholder='Write Range here' onChange={(event) => this.handleRangeInput(event, index)} />
                                    </div>
                                    <div className='col-md-1'>
                                        <Button circular basic icon onClick={() => this.removeRowInDictionary(index)}>
                                            <Icon name='delete' />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <br />
                    <div className="row" style={{ margin: '0' }} >
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <Button onClick={this.createNewDictionary} basic fluid color='blue'>
                                Create
                            </Button>
                        </div>
                        <div className="col-md-1" title='add a new row'>
                            <Button icon onClick={this.addRowInDictionary}>
                                <Icon name='add square' />
                            </Button>
                        </div>
                    </div>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { } = state;
    return {}
}


const mapDispatchToProps = (dispatch) => {
    return {
        createDictionary: (dictionary) => dispatch(dictionaryAction.createDictionary(dictionary)),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(CreateDictionary));