import React from 'react';
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '177208867399-sj1mldcc9494ijvmchlgui4u3ffm9k8f.apps.googleusercontent.com',
					//scope means what info  you want to get from client such as Email, profile
					scope: 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					
					this.onAuthChange(this.auth.isSignedIn.get());
					// this.setState({
					// 	isSignedIn: this.auth.isSignedIn.get()
					// });
					//to render automiactill let user know whether is signIn or signOut
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};
	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return <div>Please Sign in</div>;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps= (state)=>{
	return{ isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
