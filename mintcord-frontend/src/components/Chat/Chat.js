import React, { useState } from 'react';

import styles from './Chat.scss';
import MessageBox from 'components/Chat/MessageBox';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Chat = ({socketid, users, chatLogs, handleSendMessage}) => {
	
	// TODO: apply redux, cuz we have to store message until send
	const [ message, setMessage ] = useState('');
	//const [ messageLog, setMessageLog] = useState([]);
	const d = new Date();
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};
	const onClickButton = () => {
		handleSendMessage(message); // ***
		setMessage('');
		// setMessageLog([
		// 	...messageLog,
		// 	{
		// 		id: Math.floor(Math.random() * 100),
		// 		txt: message
		// 	}
		// ]);
	};
	const logList = chatLogs.map((log, index) => {
		return (
			<MessageBox
				key={index}
				me = {socketid === log.sender? true : false}
				user={log.sender}
				message={log.message} 
				time={(d.getMonth()+1) + "월" + d.getDate() + "일" + d.getSeconds()} 
				/>
		);
	});
				
	return (
		<div className={cx('chat')}>
			<div className={cx('chat-log')}>
				{logList}
			</div>
			<input
				type='text'
				placeholder='message...'
				value={message}
				onChange={handleMessageChange}
			/>
			<button onClick={onClickButton}> Send </button>
		</div>
	);
}

export default Chat;