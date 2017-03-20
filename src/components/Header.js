import React from "react";

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className='row'>
					<h1 className='text-center'>Roguelike Game</h1>
				</div>
				<div className='row'>
					<h4 className='text-center'>kill the boss in dungeon 4</h4>
				</div>
			</header>
		);
	}
}