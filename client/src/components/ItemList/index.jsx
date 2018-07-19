import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const ItemList = props => {
    return (
        <div className="itemInListContainer">
            <Grid className="image">
                <Row>
                    <Col sm={2} md={2}>
                        <img src={props.thumbnail} alt={props.title} data-itemid={props.id} onClick={props.viewItem} />
                    </Col>
                    <Col sm={6} md={6}>
                        <div className="price">
                            $ {props.price.amount.toLocaleString(navigator.language, { maximumFractionDigits: 0 })}
                        </div>
                        <div className="title" data-itemid={props.id} onClick={props.viewItem}>
                            {props.title}
                        </div>
                    </Col>
                    <Col sm={2} md={2}>
                        <div className="location">
                            {props.city}
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default ItemList;