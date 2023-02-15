const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT'

const initialState = {
    friends: [],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1,
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
            return { ...state, friends: action.friends }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_FRIENDS_COUNT:
            return { ...state, totalFriendsCount: action.totalFriendsCount }
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

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}

export const setTotalFriendsCountActionCreator = (totalFriendsCount) => {
    return {
        type: SET_TOTAL_FRIENDS_COUNT,
        totalFriendsCount: totalFriendsCount,
    }
}

export default friendsReducer
