import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import ToggleDisplay from 'react-toggle-display';

const MessageBoardToggle = props => {
	console.log(props);
	return (
		<div>
			<div className="sticky" onClick={() => props.toggleMessageBoard()}>
				message board
			</div>
			<ToggleDisplay show={props.showMessageBoard}>
				<MessageBoard
					messages={props.data.messages}
					loading={props.data.loading}
				/>
			</ToggleDisplay>
		</div>
	);
};

export default MessageBoardToggle;
