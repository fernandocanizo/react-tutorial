"use strict";

import Comment from './Comment.js';

const CommentList = React.createClass({
	render: () => {
		return (
			<div className="commentList">
				<Comment author="Pepe Hongo">as I was just saying...</Comment>
				<Comment author="Nobody">just shut up</Comment>
			</div>
		);
	}
});

module.exports = CommentList;
