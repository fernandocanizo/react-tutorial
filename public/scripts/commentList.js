"use strict";


const CommentList = React.createClass({
	render: () => {
		return (
			<div className="CommentList">
				<Comment author="Pepe Hongo">as I was just saying...</Comment>
				<Comment author="Nobody">just shut up</Comment>
			</div>
		);
	}
});
