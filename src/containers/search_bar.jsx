import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();

		// we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''}); // clear the search field
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}

	render() {
		return (
			<form
				className="input-group"
				onSubmit={this.onSubmit}
			>
				<input
					placeholder="Get a five-day forecast in your favourite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);