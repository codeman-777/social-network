import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        messagePage: {
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
        },
        profilePage: {
            posts: [{id: 1, message: 'Hi to all!!!', likesCount: 15, date: '09.06.2019, 15:09:26'},
                {id: 2, message: 'Hello World', likesCount: 7, date: '16.02.2020, 03:54:26'},
                {id: 3, message: 'This is network', likesCount: 84, date: '30.06.2020, 10:12:26'},
                {id: 4, message: 'Fuck....uuu', likesCount: 11, date: '01.12.2020, 23:00:26'}
            ],
            inputPostText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    avatarUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {
                    id: 2,
                    name: 'Dmitry',
                    avatarUrl: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_hq.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    updateMessageText(newText) {
        this._state.messagePage.inputMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        /*if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.inputPostText,
                likesCount: 0,
                date: new Date().toLocaleString()
            };
            this._state.profilePage.inputPostText='';
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.inputPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.messagePage.inputMessageText
            };
            this._state.messagePage.inputMessageText='';
            this._state.messagePage.messages.push(newMessage);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.messagePage.inputMessageText = action.newText;
            this._callSubscriber(this._state);
        }*/
    }
};

export default store;