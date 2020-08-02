import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import './App.css';
import './services/utilities.css';

import AwesomeSlider from "react-awesome-slider"
import coreStyles from 'react-awesome-slider/src/core/styles.scss'
import 'react-awesome-slider/dist/styles.css';
import animationStyles from 'react-awesome-slider/dist/custom-animations/cube-animation.css';


import {
	Provider,
	Link,
	withNavigationContext,
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
const Slider = () => {
	return (
		<NavigationSlider
			className="awesome-slider"
			cssModule={[coreStyles, animationStyles]}
			bullets={false}
			media={[
				{
					slug: "home",
					className: "home",
					children: () => (
						<div className="ras-sectioned">
							<div className="ras-page">
								<div className="ras-section">
									<Home />
								</div>
							</div>
						</div>
					)
				},
				{
					slug: "skills",
					className: "skills",
					children: () => (
						<div className="ras-sectioned">
							<div className="ras-page">
								<Skills />
							</div>
						</div>
					)
				},

			]}
		/>
	)
}

const pageSlider = () => {
	return (
		<AwesomeSlider
			animation="cubeAnimation"
			cssModule={[animationStyles]}
			bullets={false}
			fillParent={true}
			className="page-slider"
			infinite={true}
			startup={true}
			mobileTouch={true}

		>
			<div className="slide-page">
				<Home />
			</div>
			<div className="slide-page">
				<Skills />
			</div>

			<div className="slide-page">{
				<Projects />
			}</div>
			<div className="slide-page">{
				<Resume />
			}</div>




		</AwesomeSlider>
	)
}

// Page header navigation
const Header = () => {
	return (
		<Header>
			<nav>
				<Link href="page-one">Page One</Link>
				<Link href="page-two">Page Two</Link>
				<Link href="page-three">Page Two</Link>
			</nav>
		</Header>
	)
}

const App = (props) => {

	return (
		<Router>
			<Switch>

				<Route path="/" exact render={pageSlider} />
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
