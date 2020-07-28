import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import ReactGA from 'react-ga'
import './App.css';
import './services/utilities.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';


(function initializeReactGA() {
	ReactGA.initialize('UA-173593293-1');
	ReactGA.pageview('/homepage');
})()

function App(props) {

	return (
		<Router>
			<Switch>
				<Redirect path="/" exact to="home" />
				<Route path="/home" exact component={Home} />
				<Route path="/skills" exact component={Skills} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/project-detail" exact component={ProjectDetail} />
				<Route path="/resume" exact component={Resume} />
			</Switch>
		</Router>


	);
}

export default App;
