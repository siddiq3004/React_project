import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import '../Home/home.css';
import NewWriter from "../../components/NewTypeWriter/NewWriter";

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="home-page">
            <NewWriter VarName={'Home Page'} toString={'Welcome to home page'} />
        </div>
        </>
    )
};

export default Home;