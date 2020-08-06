import React from 'react';
import {
	Route,
	Redirect,
} from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

import './App.css';
import './services/utilities.css';

import AwesomeSlider from "react-awesome-slider"
import 'react-awesome-slider/dist/styles.css';
import animationStyles from 'react-awesome-slider/dist/custom-animations/cube-animation.css';


import {
	Provider,
	withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";

import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// Create an AwesomeSlider instance with some content
const Slider = (startPage = 0) => {
	// console.log(starPage)
	return (
		<NavigationSlider
			className="awesome-slider"
			animation="cubeAnimation"
			cssModule={[animationStyles]}
			bullets={false}
			fillParent={true}
			className="page-slider"
			infinite={true}
			startup={true}
			mobileTouch={true}
			selected={startPage}
			media={[
				{
					slug: "home",
					className: "slide-page",
					children: <Home />
				},
				{
					slug: "skills",
					className: "slide-page",
					children: <Skills />
				},
				{
					slug: "projects",
					className: "slide-page",
					children: <Projects />
				},
				{
					slug: "resume",
					className: "slide-page",
					children: <Resume />
				},

			]}
		/>
	)
}

const App = (props) => {
	const slug = useRouteMatch().path


	return (
		<Provider slug={slug}>
			<Redirect path="/" exact to="/home" />
			<Redirect path="" exact to="/home" />
			<Route path="/home" exact component={() => Slider(0)} />
			<Route path="/skills" exact component={() => Slider(1)} />
			<Route path="/projects" exact component={() => Slider(2)} />
			<Route path="/resume" exact component={() => Slider(3)} />
			<Route path="/project-detail" exact component={ProjectDetail} />

		</Provider>

	);
}

export default App; 
