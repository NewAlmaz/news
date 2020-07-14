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
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route exact path="/news/" render={() => <Main/>}/>
                        <Route exact path="/news/Main" render={() => <Main/>}/>
                        <Route exact path="/news/OneNews" render={() => <OneNews/>}/>
                        <Route exact path="/news/AllNews" render={() => <AllNews/>}/>
                        <Route exact path="/news/Contacts" render={() => <Contacts/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
