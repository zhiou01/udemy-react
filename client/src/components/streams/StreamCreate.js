import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// const StreamCreate = () => {
//  return <div> StreamCreate</div>
// };

// export default StreamCreate;

class StreamCreate extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};
//changes
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
					<Field name="title" component={this.renderInput} label="Enter Title" />
					<Field name="description" component={this.renderInput} label="Enter Description" />
					<button className="ui button primary">Submit</button>
				</form>

				<button>
					<Link to="/">back to app </Link>{' '}
				</button>
			</div>
		);
	}
}
const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		//only ran if the user did not enter a title
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}
	return errors;
};

const fromWrapped = reduxForm({
	form: 'streamCreate',
	validate
})(StreamCreate);

export default connect(null, { createStream })(fromWrapped);

// export default connect(null, { createStream })(
// 	reduxForm({
// 		form: 'streamCreate',
// 		validate
// 	})(StreamCreate)
// );
