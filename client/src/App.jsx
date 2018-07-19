// dependencias
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// helpers
import getParamFromQueryString from './helpers/querySearchParam';

// contenedores
import Item from './containers/Item';
import ItemsSearch from './containers/ItemsSearch';
import Search from './containers/Search';

// estilos
import '@Styles/main.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/items/:id' component={Item} />
                    <Route path='/items' render={(props) => <ItemsSearch {...props} searchString={getParamFromQueryString('search', props.location.search)}/>} />
                    <Route exact path='/' component={Search} />
                    <Redirect from='*' to='/' />
                </Switch>
            </Router>
        );
    }
}

export default App;
