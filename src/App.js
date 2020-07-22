import React from 'react';
import { useState, useEffect } from 'react'

import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from 'react-router-dom';
import './App.css';
import './services/utilities.css';
import Home from './pages/Home';


function App(props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/skills" component={Home} />
				<Route path="/projects" component={Home} />

			</Switch>
		</Router>


	);
}

export default App;
