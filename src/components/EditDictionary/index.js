import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import { dictionaryAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';
import { Container, Input, Grid, Divider, Button, Icon, Segment, Header, Message } from 'semantic-ui-react'
import TopNav from './../Header'

class EditDictionary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dictionary: [{ domain: '', range: '' }],
            artificialLoader: false,
            isConsistence: true
        }
    }

    componentDidMount() {
        let dictionaries = this.props.dictionaries
        if (dictionaries && this.props.match.params.d_id) {
            this.setState({ dictionary: dictionaries[this.props.match.params.d_id] })
        }
        else if (!dictionaries && this.props.match.params.d_id) {
            this.props.getDictionaries()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.dictionaries !== nextProps.dictionaries && nextProps.dictionaries && this.props.match.params.d_id) {
            if (nextProps.dictionaries.length > this.props.match.params.d_id) {
                this.setState({ dictionary: nextProps.dictionaries[this.props.match.params.d_id] })
            }
            else {
                alert('Id could not found');
                this.history.push('/')
            }
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
        this.handleConsistency(dictionary, e.target.value)
        dictionary[i].domain = e.target.value
        this.setState({ dictionary })
    }

    handleRangeInput = (e, i) => {
        let dictionary = this.state.dictionary
        this.handleConsistency(dictionary, e.target.value)
        dictionary[i].range = e.target.value
        this.setState({ dictionary })
    }

    handleConsistency = (dictionary, value) => {
        dictionary && dictionary.map((data, index) => {
            if (data.domain === value || data.range === value) {
                this.setState({ isConsistence: false })
            }
        })
    }

    updateDictionary = () => {
        let dictionaries = this.props.dictionaries
        dictionaries[this.props.match.params.d_id] = this.state.dictionary
        this.setState({ artificialLoader: true })
        setTimeout(() => {
            this.props.updateDictionary(dictionaries)
        }, 1000)
    }

    removeConsistency = () => {
        this.setState({
            isConsistence: true,
            dictionary: [{ domain: '', range: '' }]
        })
        this.props.history.push('/')
    }

    componentWillUpdate(nextProps) {
        if (this.props.updateDictionaryLoader && !nextProps.updateDictionaryLoader && !nextProps.updateDictionaryError) {
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div>
                <TopNav {...this.props} />
                <Container className="fade-in">
                    <Segment>
                        <Header as='h3' textAlign='left'>
                            Create Dictionary
                        </Header>
                    </Segment>
                    {
                        !this.state.isConsistence ? <Message color='red'>Inconsistency Occurred <a onClick={this.removeConsistency} style={{ cursor: 'pointer' }}><strong>Clear</strong></a></Message> : ''
                    }
                    <Segment clearing color='blue'>
                        {
                            this.state.dictionary && this.state.dictionary.map((row, index) => {
                                return (
                                    <div style={{ margin: '10px 0 10px 0' }} className="row" key={index}>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-5'>
                                            <Input focus fluid placeholder='Write Domain here' value={this.state.dictionary[index].domain} onChange={(event) => this.handleDomainInput(event, index)} />
                                        </div>
                                        <div className='col-md-5'>
                                            <Input focus fluid placeholder='Write Range here' value={this.state.dictionary[index].range} onChange={(event) => this.handleRangeInput(event, index)} />
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
                                <Button loading={this.state.artificialLoader} disabled={!this.state.isConsistence} onClick={this.updateDictionary} basic fluid color='blue'>
                                    Update
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        dictionaryReducer: {
            updatedDictionary, updateDictionaryLoader, updateDictionaryError,
            dictionaries, getDictionariesLoader, getDictionariesError
        }
    } = state;
    return {
        updatedDictionary, updateDictionaryLoader, updateDictionaryError,
        dictionaries, getDictionariesLoader, getDictionariesError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateDictionary: (dictionary) => dispatch(dictionaryAction.updateDictionary(dictionary)),
        getDictionaries: () => dispatch(dictionaryAction.getDictionaries()),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(EditDictionary));