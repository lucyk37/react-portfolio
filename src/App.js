import React from "react";

import Header from "./components/Header";
import Main, { Skills, Projects } from './components/Main';
import Footer from "./components/Footer";

//bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
};

export default App;