import FriendsItem from './FriendsItem'
import axios from 'axios'

function Friends({ friends, follow, unfollow, setFriends }) {
    if (friends.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => setFriends(res.data.items))
    }

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

export default Friends
