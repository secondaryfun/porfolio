import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import './App.css';
import './services/utilities.css';
import Home from './pages/Home';
import Skills from './pages/Skills';


function App(props) {

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/skills" exact component={Skills} />
				<Route path="/projects" exact component={Skills} />
			</Switch>
		</Router>


	);
}

export default App;
