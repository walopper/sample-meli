// dependencias
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

// componentes
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

// estilos
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

import imageLogo from '../../assets/images/logo.png';

class SearchBox extends PureComponent {
    constructor(props) {
        super(props);
        this.props = props;
        this.inputSearch = React.createRef();
    }

    state = {
        searchString: null
    };

    interval = null;

    goHome = () => {
        this.props.history.push('/');
    }

    search = (searchString) => {
        this.setState({ searchString });
        this.props.history.push(`/items?search=${searchString}`);
        return true;
    }

    // arrow function para pasar la referencia y evitar tener que bindear dentro de una funcion anonima
    gotoSearch = (event) => event.key === 'Enter' ? this.search(event.target.value) : null;

    searchByButton = () => {
        const searchString = this.inputSearch.current.value;
        if(searchString) {
            this.search(searchString);
        }
    }

    render() {
        return (
            <div className="searchBoxContainer">
                <Grid className="searchBox">
                    <Row className="show-grid">
                        <Col sm={1} md={1} lgOffset={1}>
                            <div className="imageContainer">
                                <img src={imageLogo} alt="Meli test" onClick={this.goHome} style={{cursor:'pointer'}} />
                            </div>
                        </Col>
                        <Col sm={9} md={9}>
                            <div className="inputContainer">
                                <input type="text"
                                    placeholder="Nunca dejes de buscar"
                                    onChange={this.gotoSearch}
                                    ref={this.inputSearch}
                                    onKeyPress={this.gotoSearch} />
                                <button>
                                    <Glyphicon glyph="search" onClick={this.searchByButton} />
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default withRouter(SearchBox);
