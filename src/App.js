import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import OneNews from "./components/OneNews/OneNews";
import AllNews from "./components/AllNews/AllNews";
import Main from "./components/Main/Main";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter basename="/news123">
            <div className="App">
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route exact path="/" render={() => <Main/>}/>
                        <Route exact path="/Main" render={() => <Main/>}/>
                        <Route exact path="/OneNews" render={() => <OneNews/>}/>
                        <Route exact path="/AllNews" render={() => <AllNews/>}/>
                        <Route exact path="/Contacts" render={() => <Contacts/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
