import React from "react";

export default class HUD extends React.Component {
	render() {
		return (
			<div className='row hud-wrapper'>
				<div className='col-md-offset-2 col-md-2 hud hp'>HP: {this.props.player.hp}</div>
				<div className='col-md-1 hud lvl'>LVL: {this.props.player.lvl}</div>
				<div className='col-md-1 hud dmg'>DMG: {this.props.player.dmg}</div>
				<div className='col-md-2 hud weapon'>Weapon: {this.props.player.weapon}</div>
				<div className='col-md-2 hud dungeon'>Dungeon: {this.props.dungeon}</div>
			</div>
		);
	}
}

