import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import { dictionaryAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';
import { Container  } from 'semantic-ui-react'

class DictionaryList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Container className="fade-in">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                    link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                    vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                    enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                    ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi.
                            </p>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { } = state;
    return {}
}


const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(DictionaryList));