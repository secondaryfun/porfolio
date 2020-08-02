import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import './App.css';
import './services/utilities.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import { useEffect } from 'react'
import { PageView, initGA } from './components/Tracking';




function App(props) {

	useEffect(() => {
		initGA()
		PageView()
		return () => {

		}
	}, [])

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
