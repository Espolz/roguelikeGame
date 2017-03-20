import React from "react";

import Tile from "./Tile";

export default class Dungeon extends React.Component {
	render() {
		return (
			<div id='board'>
				{
					this.props.map.map((row) => {
						return row.map((e, idx) => {
							return <Tile key={idx} type={e.tile}/>
						})
					})
				}
			</div>
		);
	}
}