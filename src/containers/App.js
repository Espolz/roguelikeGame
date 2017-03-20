import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import HUD from "../components/HUD";
import Dungeon from "../components/Dungeon";


import { generate, movePlayer } from "../actions/gameActions";



class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.generateMap(5, 5);
	}

	render() {
		return (
			<div className='container'>
				<Header />
				<HUD dungeon={this.props.game.dungeon} player={this.props.game.player}/>
				<Dungeon map={this.props.game.map}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		game: state
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		generateMap: (width, height) => {
			dispatch(generate(width, height));
		},
		movePlayer: (direction) => {
			dispatch(movePlayer(direction));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
