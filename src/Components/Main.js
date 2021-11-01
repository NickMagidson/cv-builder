import React, { Component } from "react";


class Main extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return(
            <div className="main">
                <div className="cv-form"></div>
                <div className="cv-preview"></div>
            </div>
        )
    };
};

export default Main;