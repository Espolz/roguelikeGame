import React from "react";

import tilesImg from "../constants/tilesImg";


export default class Tile extends React.Component {
	render() {
		return (
			<img src={tilesImg[this.props.type]} className='tile'/>
		);
	}
}

// export class Health extends React.Component {
// 	render() {
// 		return (
// 			<img src={tilesImg.health} className='tile'/>
// 		);
// 	}
// }

// export class Player extends React.Component {
// 	render() {
// 		return (
// 			<img src={tilesImg.health} className='tile'/>
// 		);
// 	}
// }

// export class Enemy extends React.Component {
// 	render() {
// 		return (
// 			<img src={tilesImg.health} className='tile'/>
// 		);
// 	}
// }

// export class Boss extends React.Component {
// 	render() {
// 		return (
// 			<img src={tilesImg.health} className='tile'/>
// 		);
// 	}
// }

// export class Wall extends React.Component {
// 	render() {
// 		return (
// 			<img src={tilesImg.health} className='tile'/>
// 		);
// 	}
// }

// export class Void extends React.Component {
// 	render() {
// 		return (
// 			<img src={tilesImg.health} className='tile'/>
// 		);
// 	}
// }

// export class Weapon extends React.Component {
// 	render() {
// 		return (
// 			<img src={tilesImg.health} className='tile'/>
// 		);
// 	}
// }