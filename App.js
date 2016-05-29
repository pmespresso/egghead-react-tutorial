import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor(props) {
	  super();
	  this.state = { 
	  	red: 0,
	  	green: 0,
	  	blue: 0,
	  	txt: ""
	  };

	  this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({
			red: ReactDom.findDOMNode(this.refs.red).value,
			blue: ReactDom.findDOMNode(this.refs.blue).value,
			green: ReactDom.findDOMNode(this.refs.green).value,
			txt: ReactDom.findDOMNode(this.refs.title).value
		});
	}

	render() {

		return (
			<div>

				<TitleSelector ref="title" update={this.update} />
				<h1>{this.state.txt}</h1>
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<Slider ref="green" update={this.update} />
				{this.state.green}

			</div>
		);
	}
}

class Slider extends React.Component {
	render() {
		return (
			<input type="range" min="0" max="255" onChange={this.props.update} />
		);
	}
}

class TitleSelector extends React.Component {
	render() {
		return (
			<input type="text" onChange={this.props.update} />
		);
	}
}











//refs don't work with stateless widget components
// const Widget = (props) => {
// 	return (
// 			<div>
// 				<input type='text' onChange={props.update} /> 
// 				<h1>{props.txt}</h1>
// 			</div>
// 		);
// }

export default App