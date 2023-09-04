import React, {Component, component} from "react";
import shifi from "../Books/scifi.json"
import LatestRelease from "./LatestRelease";
import fantasy from "../Books/fantasy.json"

export default class MyMain extends Component{
    render(){
        return(
            /*qui vado ad inserire i LatestReleased con una promps con detro i libri che importo qui shifiBooks={shifi}, i libri li passo da qui
            perche è il genitore di tutti, tutti gli altri sono componenti riutizzabili*/
            <LatestRelease books={fantasy}/>
        )
    }
}