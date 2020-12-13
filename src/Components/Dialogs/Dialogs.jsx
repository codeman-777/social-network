import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";

const Dialogs = (props) => {

    let dialogsData = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
    let messagesData = props.state.messages.map(message => <Message message={message.message} key={message.id}/>);

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsRow}>
                <div className={style.dialog}>
                    {dialogsData}
                </div>
                <div className={style.messages}>
                    {messagesData}
                </div>
            </div>
            <div className={style.submitRow}>
                <div className={style.submitArea}>
                    <textarea className={style.textArea}
                              placeholder='Напишите сообщение...'
                              onChange={onMessageChange}
                              value={props.state.inputMessageText} />
                </div>
                <div className={style.buttonArea}>
                    <button className={style.button}
                            onClick={onAddMessage}>add post
                    </button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;

