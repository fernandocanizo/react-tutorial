"use strict";


const Comment = React.createClass({
	render: () => {
		return (
			<div className="comment">
				<li>
					<strong>{this.props.author}: </strong>{this.props.children}
				</li>
			</div>
		);
	}
});
