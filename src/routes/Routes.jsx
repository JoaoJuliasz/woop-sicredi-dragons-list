import React from 'react';
import { Switch, Route, } from 'react-router-dom'
import { connect } from 'react-redux'
import SignIn from '../Pages/SignIn/SignIn'
import Home from '../Pages/Home/Home'
import UpdateDragon from '../Pages/UpdateDragon/UpdateDragon'
import CreateDragon from '../Pages/CreateDragon/CreateDragon';

const Routes = ({ dragons }) => {
    const renderDragon = (routerProps) => {
        let dragonId = routerProps.match.params.id;
        let foundDragon = dragons.find(dragon => dragon.id === dragonId)
        return foundDragon ? <UpdateDragon dragon={foundDragon} /> : null
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