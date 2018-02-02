import React, {Component} from "react";
import "./App.css";
import Pinfo from "./modules/Pinfo";
import {Link} from "react-router-dom";

class App extends Component {
	render() {
		return (<div className="App">
			<Link to="/">adsdas</Link>
			<Link to="/gfsdgdf">fgsdfgsdf</Link>

			<Link to="/fdsgsdf/gdfsgf/gdsgf/323/gsdf">gdfsgdf</Link>
			
			<Pinfo/>
		</div>);
	}
}

export default App;
