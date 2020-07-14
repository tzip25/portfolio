import React from 'react';
import MountainsDesktop from './MountainsDesktop'

class Home extends React.Component {

	render(){
		return(
			<>
			<div className="container homeDiv">
				<h1 className="slide-in">TaliScheer</h1>
				<p className="tagline">
					<span className="fadeIn2">Developer</span>
					<span className="fadeIn2">•</span>
					<span className="fadeIn3">Designer</span>
					<span className="fadeIn4">•</span>
					<span className="fadeIn4">Creator</span>
				</p>
				<div className="down-arrow" />
				<div className="down-arrow" />
			</div>
			<MountainsDesktop/>
			</>
		)
	}
}

export default Home
