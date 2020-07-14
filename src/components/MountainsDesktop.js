import React from 'react';

class MountainsDesktop extends React.Component {
  render(){
    return(
		<>
			<div id="triangle3"></div>
			<div id="triangle3-shadow"></div>

			<div id="triangle2"></div>
			<div id="triangle2-shadow"></div>

			<div id="triangle1"></div>
			<div id="triangle1-shadow"></div>

			<div id="triangle4"></div>
			<div id="triangle4-shadow"></div>

			<div id="triangle5"></div>
			<div id="triangle5-shadow"></div>

			<div className="circle">
				<div className="innerCircle pulsate">
					<div className="innerCircle2 pulsate"></div>
				</div>
			</div>
		</>
    )
  }
}

export default MountainsDesktop
