"use strict";

import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

const CommentBox = React.createClass({
	render: () => {
		return (
			<div className="commentBox">
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));

module.exports = CommentBox;
