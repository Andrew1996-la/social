import Friends from './Friends'
import { connect } from 'react-redux'
import {
    followActionCreator,
    setFriendsActionCreator,
    unfollowActionCreator,
} from '../../redux/friendsReducer'

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (friendsId) => {
            dispatch(followActionCreator(friendsId))
        },
        unfollow: (friendsId) => {
            dispatch(unfollowActionCreator(friendsId))
        },
        setFriends: (friends) => {
            dispatch(setFriendsActionCreator(friends))
        },
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer
