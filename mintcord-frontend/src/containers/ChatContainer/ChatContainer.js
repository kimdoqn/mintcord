import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as chatActions from 'store/modules/chat';

import Chat from 'components/Chat';


class ChatContainer extends Component {

  handleSendMessage = (message) => {
    const { ChatActions } = this.props;

    ChatActions.sendMessage(message);
  }

  render() {
    const { socketid, users, chatLogs } = this.props;
    const { handleSendMessage } = this;

    return (
      <Chat
        socketid={socketid}
        users={users}
        chatLogs={chatLogs}
        handleSendMessage={handleSendMessage}/>
    );
  }
}

export default connect(
  (state) => ({
    socketid: state.chat.socketid,
    users: state.chat.users,
    chatLogs: state.chat.chatLogs,
  }),
  (dispatch) => ({
    ChatActions: bindActionCreators(chatActions, dispatch),
  })
)(ChatContainer);