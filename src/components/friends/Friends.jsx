import FriendsItem from './FriendsItem'

function Friends({ friends, follow, unfollow, setFriends }) {
    if (friends.length === 0) {
        setFriends([
            {
                id: 1,
                followed: true,
                name: 'Homer',
                status: 'I like TV',
                location: { country: 'USA', city: 'Springfield' },
            },
            {
                id: 2,
                followed: false,
                name: 'Bart',
                status: 'I hate school',
                location: { country: 'USA', city: 'Springfield' },
            },
            {
                id: 3,
                followed: false,
                name: 'Maggie',
                status: 'Hi i am Maggie',
                location: { country: 'USA', city: 'NewYork' },
            },
        ])
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
