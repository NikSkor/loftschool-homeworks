import React from 'react';
import './Chat.css';
import Message from '../Message/Message.js'

export default class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: "",
  }
  changeInputMessage = event => {
    this.setState({messageInput: event.target.value})
  }
  sendMessageOnEnter = e => {
    if (e.key === 'Enter' && this.state.messageInput !== '') {
    this.setState(
    {
      messages: [...this.state.messages, { text: this.state.messageInput }],
      messageInput: "",
    })
    }
  }

    render() {
      // console.log(this.state.messages);
      return (
        <div className="chat">
          <input 
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
          ></input>
          <div className="message-list">
            <div className="messages">
                  {this.state.messages.map((message,i) => (<Message key={i} text={message.text} /> ))
                }
            </div>
          </div>
        </div>
      );
    }
   }