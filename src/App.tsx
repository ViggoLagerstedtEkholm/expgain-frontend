import React from 'react';
import Header from "./Components/Header";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./Components/Styles/Global";
import {Container} from "./Components/Styles/Container.styled";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Components/Home";
import Footer from "./Components/Footer";

const theme = {
    colors: {
        header: '#1d1d1d',
        button: '#bb86fc',
        body: '#121212',
        footer: '#1d1d1d',
        text: 'white',
        card: '#1f1e22',
    },
    mobile: '768px',
}

export type ThemeType = typeof theme;

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Header/>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </ThemeProvider>
        </Router>
    );
}

export default App;
