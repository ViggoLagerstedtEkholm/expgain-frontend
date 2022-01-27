import React from 'react';
import Header from "./Components/Shared/Header";
import {GlobalStyles} from "./Components/Styles/Global";
import {Container} from "./Components/Styles/Container.styled";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Components/Pages/Home";
import Footer from "./Components/Shared/Footer";
import Profile from "./Components/Pages/Profile";
import AppContextProvider from "./AppContextProvider";

function App() {
    return (
        <AppContextProvider>
            <Router>
                <GlobalStyles/>
                <Header/>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </Router>
        </AppContextProvider>
    );
}

export default App;
