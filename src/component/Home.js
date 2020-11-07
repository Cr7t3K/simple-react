import React from "react";
import "../assets/css/home.css"
import logo from "../images/logo.png"
import everest from "../images/everest.jpeg"
import citation from "../images/citation.png"


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            hide: 1,
        }
    }
    handleChange(){
        if (this.state.hide) {
            this.setState({hide:0});
        } else {
            this.setState({hide:1});
        }
    }


    render() {
        return(
            <>
                <div className={this.state.hide ? "home-container": "home-container hide"}>
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="logo"/><h1>Mountain</h1>
                        </div>
                    </div>
                    <div
                        className="home-discover"
                        onClick={this.handleChange}
                    >
                        <h1>Discover</h1>
                    </div>
                </div>
                <div className={this.state.hide ? "mountain": "mountain show"}>
                    <div onClick={this.handleChange} className="mountain-close">
                        <i className="fas fa-times"/>
                    </div>
                    <img className="mountain-image" src={everest} alt="Everest"/>
                    <div className="mountain-content">
                        <div className="title">
                            <h1>Everest</h1>
                            <h4>8 848 m</h4>
                        </div>

                        <div className="mountain-description">Point culminant du monde, dans l'Himalaya, à la frontière du Népal et de la Chine (Tibet)</div>

                        <div className="mountain-citation">
                            <img src={citation} alt="citation" id="citation-1"/>
                            <p>
                                Il y a des chemins que nos propres peurs rendent impraticables. L’insécurité et l’angoisse
                                peuvent semer d’abîmes jusqu’aux actes les plus simples. <br/>Chacun a son propre Everest
                            </p>
                            <img src={citation} alt="citation" id="citation-2"/>
                            <span>Gabriel Rolon</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Home;
