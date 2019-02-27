import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App'

const Router = ()=>{
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path ='/' component ={StorePicker}/>
        <Route exact path ='/store/:storeid' component ={App}/>
        <Route render={()=>(<h2>Page not Found</h2>)}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Router;