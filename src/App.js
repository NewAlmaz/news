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
        <HashRouter>
            <div className="App">
                <div className="container">
                    <Header/>
                    <Route exact path="/" render={() => <Main/>}/>
                    <Route exact path="/Main" render={() => <Main/>}/>
                    <Route exact path="/OneNews" render={() => <OneNews/>}/>
                    <Route exact path="/AllNews" render={() => <AllNews/>}/>
                    <Route exact path="/Contacts" render={() => <Contacts/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
