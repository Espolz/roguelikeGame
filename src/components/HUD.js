import React from "react";

export default class HUD extends React.Component {
	render() {
		return (
			<div className='row'>
				<div className='col-xs-1'>HP: {this.props.player.hp}</div>
				<div className='col-xs-1'>DMG: {this.props.player.dmg}</div>
				<div className='col-xs-1'>LVL: {this.props.player.lvl}</div>
				<div className='col-xs-2'>Weapon: {this.props.player.weapon}</div>
				<div className='col-xs-2'>Dungeon: {this.props.dungeon}</div>
			</div>
		);
	}
}