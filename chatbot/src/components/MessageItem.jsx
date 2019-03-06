import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ text, isUser }) => (
    <li className={isUser ? 'user' : 'medium'}>
        <div className="msg">
            {text}
        </div>
    </li>
);

MessageItem.propTypes = {
    text: PropTypes.string,
    isUser: PropTypes.bool
};

export default MessageItem;
