const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'

const initialState = {
    friends: [],
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map((friend) => {
                    if (friend.id === action.friendsId) {
                        return { ...friend, followed: true }
                    }
                    return friend
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map((friend) => {
                    if (friend.id === action.friendsId) {
                        return { ...friend, followed: false }
                    }
                    return friend
                }),
            }
        case SET_FRIENDS:
            return { ...state, friends: [...state.friends, ...action.friends] }
        default:
            return state
    }
}

export const followActionCreator = (friendsId) => {
    return {
        type: FOLLOW,
        friendsId: friendsId,
    }
}

export const unfollowActionCreator = (friendsId) => {
    return {
        type: UNFOLLOW,
        friendsId: friendsId,
    }
}

export const setFriendsActionCreator = (friends) => {
    return {
        type: SET_FRIENDS,
        friends: friends,
    }
}

export default friendsReducer
