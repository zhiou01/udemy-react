import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import StreamNew from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Hearder';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<h1>
						<Header />
					</h1>
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact render={StreamNew.render} />
					<Route path="/streams/edit" component={StreamEdit} />
					<Route path="/streams/delete" component={StreamDelete} />
					<Route path="/streams/show" component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
