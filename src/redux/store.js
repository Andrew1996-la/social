import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import navigationReducer from './navigationReducer'

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    post: 'post 1 here',
                    likes: 1,
                },
                {
                    id: 2,
                    post: 'it is post number 2',
                    likes: 43,
                },
                {
                    id: 3,
                    post: 'third post',
                    likes: 15,
                },
                {
                    id: 4,
                    post: 'and else one posts',
                    likes: 6,
                },
            ],
            newPostText: '',
        },
        messagePage: {
            dialogsName: [
                {
                    id: 1,
                    name: 'Katya',
                },
                {
                    id: 2,
                    name: 'Alina',
                },
                {
                    id: 3,
                    name: 'Maria',
                },
            ],
            conversation: [
                {
                    id: 1,
                    message: 'Hi how are you?',
                },
                {
                    id: 2,
                    message: 'What is your life?',
                },
                {
                    id: 3,
                    message: 'Are you genius!!!',
                },
            ],
            newMessageText: '',
        },
        navigationSection: {
            navigationMenuLinks: [
                {
                    id: 0,
                    link: '/',
                    linkName: 'Profile',
                },
                {
                    id: 1,
                    link: '/message',
                    linkName: 'Message',
                },
                {
                    id: 2,
                    link: '/new',
                    linkName: 'New',
                },
                {
                    id: 3,
                    link: '/music',
                    linkName: 'Music',
                },
                {
                    id: 4,
                    link: '/settings',
                    linkName: 'Settings',
                },
            ],
            friends: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Peter' },
                { id: 3, name: 'Katya' },
            ],
        },
    },

    getState() {
        return this._state
    },

    _subscribeObserver() {
        console.log('changed')
    },

    subscribe(observer) {
        this._subscribeObserver = observer
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogReducer(this._state.messagePage, action)
        navigationReducer(this._state.navigationSection, action)
        this._subscribeObserver(this._state)
    },
}

// export default store
