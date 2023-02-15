import Friends from './Friends'
import { connect } from 'react-redux'
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator,
    setTotalFriendsCountActionCreator,
    unfollowActionCreator,
} from '../../redux/friendsReducer'

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalFriendsCount: (totalFriendsCount) => {
            dispatch(setTotalFriendsCountActionCreator(totalFriendsCount))
        },
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer
