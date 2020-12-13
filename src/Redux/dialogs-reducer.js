const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {

    dialogs: [{id: 1, name: 'Dmitry'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Anna'}
    ],

    messages: [{id: 1, message: 'Hi!!'},
        {id: 2, message: 'Ok))'},
        {id: 3, message: 'Good Day!))'},
        {id: 4, message: 'Fuck....'}
    ],

    inputMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {id: 5, message: state.inputMessageText};

            return {
                ...state,
                inputMessageText: '',
                messages: [...state.messages, newMessage]
            };

        case UPDATE_MESSAGE_TEXT:
            return  {
                ...state,
                inputMessageText: action.newText
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;