import FriendsItem from './FriendsItem'
import { Component } from 'react'
import FriendsPagination from './FriendsPagination'

class Friends extends Component {
    render() {
        const {
            friends,
            follow,
            unfollow,
            pageSize,
            totalFriendsCount,
            currentPage,
        } = this.props

        return (
            <>
                {friends.map((friend) => {
                    return (
                        <FriendsItem
                            key={friend.id}
                            aboutFriend={friend}
                            follow={follow}
                            unfollow={unfollow} />
                    )
                })}
                <FriendsPagination
                    pageSize={pageSize}
                    totalFriendsCount={totalFriendsCount}
                    currentPage={currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    setFriends={this.props.setFriends}
                    setTotalFriendsCount={this.props.setTotalFriendsCount} />
            </>
        )
    }
}

export default Friends
