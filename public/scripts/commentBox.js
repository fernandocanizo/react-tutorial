"use strict";

const CommentBox = React.createClass({
	render: () => {
		return (
			<div classname="commentBox">
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));
