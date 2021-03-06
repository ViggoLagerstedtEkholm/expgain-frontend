import React from 'react';
import Header from "./Components/Shared/Header";
import {GlobalStyles} from "./Components/Styles/Global";
import {Container} from "./Components/Styles/Container.styled";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Components/Pages/Home";
import Footer from "./Components/Shared/Footer";
import Profile from "./Components/Pages/Profile";
import AppContextProvider from "./AppContextProvider";
import Settings from "./Components/Pages/Settings/Settings";
import Search from "./Components/Pages/Search";
import Assignment from "./Components/Pages/Assignment";
import ScrollToTop from "./Components/Shared/Filter/Misc/ScrollTop";
import Company from "./Components/Pages/Company";
import Leaderboard from "./Components/Pages/Leaderboard";
import ExpGainPlus from "./Components/Pages/ExpGainPlus";
import Certification from "./Components/Pages/Certification";

function App() {
    return (
        <AppContextProvider>
            <Router>
                <GlobalStyles/>
                <Header/>
                <Container>
                    <ScrollToTop/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/assignment/:id" element={<Assignment/>}/>
                        <Route path="/company/:name" element={<Company/>}/>
                        <Route path="/leaderboard" element={<Leaderboard/>}/>
                        <Route path="/plus" element={<ExpGainPlus/>}/>
                        <Route path="/certification" element={<Certification/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </Router>
        </AppContextProvider>
    );
}

export default App;
