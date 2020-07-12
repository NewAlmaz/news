import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import OneNews from "./components/OneNews/OneNews";
import AllNews from "./components/AllNews/AllNews";
import Main from "./components/Main/Main";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <Main/>
                    <div>aaaaaaaaa</div>
                </header>

                <Main/>
                <OneNews/>
                <AllNews/>
                <Contacts/>

                {/*<div className="app-wrapper-content">*/}
                {/*    <Route path='/main' component={Main}/>*/}
                {/*    <Route path='/onenews' component={OneNews}/>*/}
                {/*    <Route path='/allnews' component={AllNews}/>*/}
                {/*    <Route path='/contacts' component={Contacts}/>*/}
                {/*</div>*/}

                {/*<Route path='/Main' render={ () => <Main/> } />*/}
                {/*<Route path='/OneNews' render={ () => <OneNews/> } />*/}
                {/*<Route path='/AllNews' render={ () => <AllNews/> } />*/}
                {/*<Route path='/Contacts' render={ () => <Contacts/> } />*/}

            </div>
    );
}

export default App;
