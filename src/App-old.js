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
import 'react-awesome-slider/dist/styles.css';

import {
	Provider,
	Link,
	withNavigationContext,
	withNavigationHandlers
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
			media={[
				{
					slug: "page-one",
					className: "page-one",
					children: () => <Home />
				},
				{
					slug: "page-two",
					className: "page-two",
					children: () => <Skills />
				},
				{
					slug: "page-three",
					className: "page-two",
					children: () => <Projects />
				}
			]}
		/>
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
	const slug = "page-one";

	return (
		<Provider slug={slug}>
			<Header />
			<NavigationSlider />
		</Provider>
	)
}



// return (
// <Router>
// 	<Switch>
// 		<Redirect path="/" exact to="home" />

// 		<Route path="/home" exact component={Home} />
// 		<Route path="/skills" exact component={Skills} />
// 		<Route path="/projects" exact component={Projects} />
// 		<Route path="/project-detail" exact component={ProjectDetail} />
// 		<Route path="/resume" exact component={Resume} />

// 	</Switch>
// </Router>


// );
// }

export default App;
