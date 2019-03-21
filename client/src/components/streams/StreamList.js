import React from 'react';
import {Link} from 'react-router-dom';


class StreamList extends React.Component{
    render (){
    return (
        <div>
            this is StreamList <br/>
            <button><Link to='/'>back to app </Link> </button>
            <button><Link to='/streams/new'>New </Link> </button>
            <button><Link to='/streams/edit'>Edit </Link> </button>
            <button><Link to='/streams/delete'>Delete </Link> </button>
            <button><Link to='/streams/show'>Show</Link> </button>
        </div>
    )
    }
}

export default StreamList;