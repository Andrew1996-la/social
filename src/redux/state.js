const state = {
    profilePage: {
        messages: [
            {
                id: 1,
                message: 'post 1 here',
                likes: 1,
            },
            {
                id: 2,
                message: 'it is post number 2',
                likes: 43,
            },
            {
                id: 3,
                message: 'third post',
                likes: 15,
            },
            {
                id: 4,
                message: 'and else one posts',
                likes: 6,
            },
        ],
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
    },
}

export default state
