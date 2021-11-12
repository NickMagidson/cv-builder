import React, { Component } from "react";
import Personal from "./CVForm/Personal";


class Main extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return(
            <div className="main">
                <div className="cv-form">
                    <Personal />
                </div>
                <div className="cv-preview"></div>
            </div>
        )
    };
};

export default Main;