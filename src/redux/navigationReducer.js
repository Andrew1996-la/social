const initialState = {
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
            link: '/friends',
            linkName: 'Friends',
        },
        {
            id: 3,
            link: '/new',
            linkName: 'New',
        },
        {
            id: 4,
            link: '/music',
            linkName: 'Music',
        },
        {
            id: 5,
            link: '/settings',
            linkName: 'Settings',
        },
    ],
    friends: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Peter' },
        { id: 3, name: 'Katya' },
    ],
}

const navigationReducer = (state = initialState, action) => {
    return state
}

export default navigationReducer
