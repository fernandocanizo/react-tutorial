"use strict";

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
