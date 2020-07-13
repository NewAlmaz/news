import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import OneNews from "./components/OneNews/OneNews";
import AllNews from "./components/AllNews/AllNews";
import Main from "./components/Main/Main";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Main />
                <OneNews />
                <AllNews />
                <Contacts />
            </div>
        </div>
    );
}

export default App;
