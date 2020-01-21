import React, { useState } from 'react';

import styles from './Chat.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Chat = () => {
	
	// TODO: apply redux, cuz we have to store message until send
	const [ message, setMessage ] = useState('');
	const [ messageLog, setMessageLog] = useState('Init');
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	}

	const onClickButton = () => {
		setMessage('');
		setMessageLog(messageLog + '\n' + message);
	}
	return (
		<div className={cx('chat')}>
			<div className={cx('chat-log')}>
				{
					messageLog.split('\n').map( line => {
						return (<span>{line}<br/></span>)
					})
				}
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