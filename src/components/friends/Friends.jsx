import FriendsItem from './FriendsItem'

function Friends({ friends, follow, unfollow }) {
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
