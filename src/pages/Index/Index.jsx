import React from "react";
import '../Index/index.css'
import Navbar from "../../components/Navbar/Navbar";
import NewWriter from "../../components/NewTypeWriter/NewWriter";

const Index = () => {
    return (
        <>
        <Navbar />
        <div className="index-page">
            <NewWriter VarName={'Index Page'} toString={'Testing Team welcomes you...'} />
        </div>
        </>
    )
};

export default Index;