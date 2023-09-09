import React from "react";
import '../Feedback/feedback.css'
import Navbar from "../../components/Navbar/Navbar";
import NewWriter from "../../components/NewTypeWriter/NewWriter";

const Feedback = () => {
    return (
        <>
        <Navbar />
        <div className="feedback-page">
            <NewWriter VarName={'Feedback Page'} toString={'Welcome to Feedback page'} />
        </div>
        </>
    )
};

export default Feedback;