import { generateId } from '../utils/utils'

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

    addPost() {
        const newPost = {
            id: generateId(),
            post: this._state.profilePage.newPostText,
            likes: 0,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._subscribeObserver(this._state)
    },
    updateTextPost(newTextPost) {
        this._state.profilePage.newPostText = newTextPost
        this._subscribeObserver(this._state)
    },

    sendMessage() {
        const newMessage = {
            id: generateId(),
            message: this._state.messagePage.newMessageText,
        }
        this._state.messagePage.conversation.push(newMessage)
        this._state.messagePage.newMessageText = ''
        this._subscribeObserver(this._state)
    },

    updateNewMessageText(newMessageText) {
        this._state.messagePage.newMessageText = newMessageText
        this._subscribeObserver(this._state)
    },

    subscribe(observer) {
        this._subscribeObserver = observer
    },
}

export default store
