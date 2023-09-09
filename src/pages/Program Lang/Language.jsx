import React from "react";
import '../Program Lang/languages.css'
import Navbar from "../../components/Navbar/Navbar";
import NewWriter from "../../components/NewTypeWriter/NewWriter";

const Language = () => {
    return (
        <>
        <Navbar />
        <div className="programming-page">
            <NewWriter VarName={'Programming Language'} toString={'Testing whether they do work or not'} />
        </div>
        </>
    )
};

export default Language;