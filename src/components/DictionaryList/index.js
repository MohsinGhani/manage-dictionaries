import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import { dictionaryAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';
import { Container, Accordion, Icon, Segment, Table, Button, Message } from 'semantic-ui-react'

class DictionaryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    handleClick = (newIndex) => {
        newIndex === this.state.activeIndex ? this.setState({ activeIndex: null }) : this.setState({ activeIndex: newIndex })
    }

    removeRowFromDictionary = (index) => { }

    render() {
        const { activeIndex } = this.state
        return (
            <Container className="fade-in">
                {
                    !this.props.getDictionariesError && this.props.dictionaries && this.props.dictionaries.map((dic, i) => {
                        return (
                            <Segment clearing color='blue' style={{ margin: '10px 0 10px 0' }}>
                                <Accordion fluid>
                                    <Accordion.Title active={activeIndex === i} index={0} onClick={() => this.handleClick(i)}><Icon name='dropdown' /></Accordion.Title>
                                    <Accordion.Content active={activeIndex === i}>
                                        <Table>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell>Domain</Table.HeaderCell>
                                                    <Table.HeaderCell>Range</Table.HeaderCell>
                                                    <Table.HeaderCell></Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                {
                                                    dic && dic.length && dic.map((row, index) => {
                                                        return (
                                                            <Table.Row>
                                                                <Table.Cell>{row.domain}</Table.Cell>
                                                                <Table.Cell>{row.range}</Table.Cell>
                                                                <Table.Cell collapsing>
                                                                    <Button size='tiny' circular basic icon onClick={() => this.removeRowFromDictionary(index)}>
                                                                        <Icon name='delete' />
                                                                    </Button>
                                                                </Table.Cell>
                                                            </Table.Row>
                                                        )
                                                    })
                                                }
                                            </Table.Body>
                                        </Table>
                                    </Accordion.Content>
                                </Accordion>
                            </Segment>
                        )
                    })
                }

                {
                    this.props.getDictionariesError ?
                        <Message negative>
                            <Message.Header>{this.props.getDictionariesError}!</Message.Header>
                        </Message>
                        : ''
                }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { dictionaryReducer: { dictionaries, getDictionariesLoader, getDictionariesError } } = state;
    return {
        dictionaries, getDictionariesLoader, getDictionariesError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(DictionaryList));