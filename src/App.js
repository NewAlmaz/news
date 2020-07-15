import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import OneBigNews from "./components/OneBigNews/OneBigNews";
import AllNews from "./components/AllNews/AllNews";
import Main from "./components/Main/Main";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter basename="/news">
            <div className="App">
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route exact path="/Main" render={() => <Main state={props.state.newsPage}/>}/>
                        <Route exact path="/OneNews" render={() => <OneBigNews/>}/>
                        <Route exact path="/AllNews" render={() => <AllNews/>}/>
                        <Route exact path="/Contacts" render={() => <Contacts/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
