import React, { useState } from 'react';

import styles from './Chat.scss';
import MessageBox from 'components/Chat/MessageBox';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Chat = () => {
	
	// TODO: apply redux, cuz we have to store message until send
	const [ message, setMessage ] = useState('');
	const [ messageLog, setMessageLog] = useState([]);
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	}
	const onClickButton = () => {
		setMessage('');
		setMessageLog([
			...messageLog,
			{
				id: Math.floor(Math.random() * 100),
				txt: message
			}
		]);
	}
	
	return (
		<div className={cx('chat')}>
			<div className={cx('chat-log')}>
				{messageLog.map(msg => (
					<MessageBox 
						key={msg.id}
						me={msg.id % 2}
						user={msg.id}
						message={msg.txt}
						/>
				))}
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