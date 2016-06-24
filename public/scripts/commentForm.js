"use strict";


const CommentForm = React.createClass({
	render: () => {
		return (
			<div className="commentForm">
				<input type="text" name="comment" />
			</div>
		);
	}
});

module.exports = CommentForm;
