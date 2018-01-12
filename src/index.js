import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//importy w głównym pliku
//który bedzie kopiowany wtedy bedzie można stworzyć komponenty z innymi układami wielokrotnego uzytku
//idwywidualnie zmienimy tylko importy i stworzymy nowe komponenty dla wszystkich
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
