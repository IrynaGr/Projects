import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

class MessageList extends PureComponent {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape)
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    render() {
        const { messages } = this.props;
        return (
            <section className="chat-body">
                <ul className="messages">
                    {messages.map((message, index) =>
                        <MessageItem
                            text={message.text}
                            isUser={message.isUser}
                            key={index}
                        />
                    )}
                </ul>
                <div
                    style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}
                />
            </section>
        );
    }
}

export default MessageList;
