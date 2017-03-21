import React from "react";

import tilesImg from "../constants/tilesImg";


export default class Tile extends React.Component {
	render() {
		return (
			<img src={tilesImg[this.props.type]} className='tile'/>
		);
	}
}
