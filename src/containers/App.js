import React from "react";
import { connect } from "react-redux";
import $ from "jquery";


import Header from "../components/Header";
import HUD from "../components/HUD";
import Dungeon from "../components/Dungeon";


import { generate, movePlayer } from "../actions/gameActions";
import { WIDTH, HEIGHT } from "../constants/globalConsts";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown(event) {
		switch(event.which) {
			case 38:
				this.props.move('up');
				break;
			case 40:
				this.props.move('down');
				break;
			case 37:
				this.props.move('left');
				break;
			case 39:
				this.props.move('right');
		}
	}

	componentWillMount() {
		this.props.generateMap(WIDTH, HEIGHT);
		$(document).on('keydown', this.handleKeyDown);
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

	componentDidUpdate(prevProps, prevState) {
		if (this.props.game.game_status === 'starting') {
			this.props.generateMap(WIDTH, HEIGHT);
		}
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
		move: (direction) => {
			dispatch(movePlayer(direction));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
