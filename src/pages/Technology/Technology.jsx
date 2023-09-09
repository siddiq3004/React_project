import React from "react";
import "../Technology/technology.css"
import Navbar from "../../components/Navbar/Navbar";
import NewWriter from "../../components/NewTypeWriter/NewWriter";

const Technology = () => {
    return (
        <>
        <Navbar />
        <div className="technology-page">
            <NewWriter VarName={'Technology Page'} toString={'They work.... Welcome to Tech page'} />
        </div>
        </>
    )
};

export default Technology;