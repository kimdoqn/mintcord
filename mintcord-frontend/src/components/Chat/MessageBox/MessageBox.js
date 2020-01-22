import React from 'react';
import styles from './MessageBox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MessageBox = ({me, user, message, time}) => {
	return (
		<div className={cx('message-box', {me})}>
			<div className={cx('row')}>
				<img src="/favicon.ico" alt="temp icon"/>
				<div className={cx('column')}>
					<div className={cx('row')}>
						<div className={cx('user')}> {user} </div>
						<div className={cx('time')}> {time} </div>
					</div>
					<div className={cx('message')}> {message} </div>
				</div>
			</div>
		</div>
	);
}

export default MessageBox;