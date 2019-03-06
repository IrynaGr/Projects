import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import MessageList from '../components/MessageList';
import ResponseForm from '../components/ResponseForm';
import { fetchMessagesSchema, saveResponse } from '../actions/messages.actions';

class ChatBlock extends PureComponent {
    static propTypes = {
        fetchMessagesSchema: PropTypes.func,
        saveResponse: PropTypes.func,
        messageList: PropTypes.arrayOf(PropTypes.shape()),
        currentForm: PropTypes.shape(),
        isFormActive: PropTypes.bool,
        isTimeOut: PropTypes.bool
    };

    componentDidMount() {
        this.props.fetchMessagesSchema();
    }

    render() {
        const { messageList, currentForm, saveResponse, isFormActive, isTimeOut } = this.props;

         return (
             <section className="application-container">
                 <header className="chat-header">
                     <div className="header-on-off">
                         <span className="menu-button">
                            <i className={`fas fa-circle ${isTimeOut ? 'light-off' : 'light-on'}`} />
                         </span>
                     </div>
                    <div className="header-title mark-script mark-script-h4 mark-script-white">
                        Amanda
                    </div>
                    <div className="header-menu-buttons">
                        <span className="menu-button">
                            <i className={`fas fa-user-friends ${isTimeOut ? 'icon-off' : 'icon-on'}`} />
                        </span>
                        <span className="menu-button">
                            <i className="fas fa-video icon-off" />
                        </span>
                        <span className="menu-button">
                            <i className="fas fa-phone icon-off" />
                        </span>
                        <span className="menu-button">
                            <i className={`fas fa-cog ${isTimeOut ? 'icon-off' : 'icon-on'}`} />
                        </span>
                        <span className="menu-button">
                            <i className={`fas fa-times ${isTimeOut ? 'icon-off' : 'icon-on'}`} />
                        </span>
                    </div>
                 </header>
                 <MessageList
                     messages={messageList}
                 />
                 <ResponseForm
                     form={currentForm}
                     submitResponse={saveResponse}
                     isFormActive={isFormActive}
                 />
                 <footer className="chat-footer">
                    <div className="footer-menu-buttons-left">
                        <span className="menu-button">
                            <i className="fas fa-camera icon-off" />
                        </span>
                        <span className="menu-button">
                            <i className="fas fa-smile icon-off" />
                        </span>
                        <span className="menu-button">
                            <i className="fas fa-paperclip icon-off" />
                        </span>
                    </div>
                     <div className="footer-menu-buttons-right">
                        <span className="menu-button">
                            <i className="fas fa-thumbs-up icon-off" />
                        </span>
                     </div>
                 </footer>
             </section>
         )
    }
}

const mapStateToProps = (state, props) => {
    const messagesSchema = state.messages.messagesSchema;
    const messageList = state.messages.messageList;
    const currentMessageIndex = state.messages.currentMessageIndex;
    const nextSchemaElement = messagesSchema[currentMessageIndex];
    const currentForm = get(nextSchemaElement, 'form', null);

    return {
        messageList,
        currentForm,
        isFormActive: currentMessageIndex > 0 && !props.isTimeOut
    }
};

export default connect(mapStateToProps, {
    fetchMessagesSchema,
    saveResponse
})(ChatBlock);
