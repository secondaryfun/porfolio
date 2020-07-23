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
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';


function App(props) {

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/skills" exact component={Skills} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/project-detail" exact component={ProjectDetail} />
			</Switch>
		</Router>


	);
}

export default App;
