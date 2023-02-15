import FriendsItem from './FriendsItem'
import axios from 'axios'
import { Component } from 'react'

class Friends extends Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => this.props.setFriends(res.data.items))
    }

    render() {
        const { friends, follow, unfollow } = this.props

        return (
            <>
                {friends.map((friend) => {
                    return (
                        <FriendsItem
                            key={friend.id}
                            aboutFriend={friend}
                            follow={follow}
                            unfollow={unfollow}
                        />
                    )
                })}
            </>
        )
    }
}

export default Friends
