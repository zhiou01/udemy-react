import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderList() {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<div>
                    <h2>Streams</h2>
                    <div className="ui celled list">
                    {this.renderList()}
                    </div>
                </div>
                
                
                <br />
				<button>
					<Link to="/">back to app </Link>{' '}
				</button>
				<button>
					<Link to="/streams/new">New </Link>{' '}
				</button>
				<button>
					<Link to="/streams/edit">Edit </Link>{' '}
				</button>
				<button>
					<Link to="/streams/delete">Delete </Link>{' '}
				</button>
				<button>
					<Link to="/streams/show">Show</Link>{' '}
				</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { streams: Object.values(state.streams) }; //trun all value in object into array
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
