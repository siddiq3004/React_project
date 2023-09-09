import React from "react";
import Typewriter from "typewriter-effect";

const NewWriter = ( { VarName, toString } ) => {
    return (
        <>
        <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString(VarName)
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(toString)
                        .start();
                }} />
        </>
    );
};

export default NewWriter;