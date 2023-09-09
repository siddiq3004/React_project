import React from "react";
import '../Applications/applications.css'
import Navbar from "../../components/Navbar/Navbar";
import NewWriter from "../../components/NewTypeWriter/NewWriter";

const Applications = () => {
    return (
        <>
        <Navbar />
        <div className="applications-page">
            <NewWriter VarName={'Application Page'} toString={'Welcome to Application page'} />
        </div>
        </>
    )
};

export default Applications;