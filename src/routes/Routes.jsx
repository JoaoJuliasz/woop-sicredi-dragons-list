import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import SignIn from '../Components/SignIn/SignIn'
import Home from '../Components/Home/Home'
import Dragon from '../Components/Dragon/Dragon'
import CreateDragon from '../Components/CreateDragon/CreateDragon';

const Routes = ({ dragons }) => {
    const renderDragon = (routerProps) => {
        let dragonId = routerProps.match.params.id;
        let foundDragon = dragons.find(dragon => dragon.id === dragonId)
        return foundDragon ? <Dragon dragon={foundDragon} /> : null
    }
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route exact path='/dragon/:id' component={routerProps => renderDragon(routerProps)} />
            <Route path='/create-dragon' component={CreateDragon} />
        </Switch>
    );
};

const mapStateToProps = state => {
    return {
        dragons: state.dragons.dragons,
    }
}
export default connect(mapStateToProps)(Routes);