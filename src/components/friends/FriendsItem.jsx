import iconAvatar from '../../img/icon-avatar.png'

function FriendsItem({
    aboutFriend: { id, name, status, location, followed },
    follow,
    unfollow,
}) {
    const onFollow = () => {
        follow(id)
    }

    const onUnfollow = () => {
        unfollow(id)
    }

    const toggleFollow = () => {
        followed ? onUnfollow() : onFollow()
    }

    return (
        <section className="grid grid-cols-[20%,_80%] grid-rows-80px] mt-6 mx-6 gap-3">
            <div className="grid gird-row-[100%] gap-3">
                <div className="justify-self-center w-[50%] h-[50%]">
                    <img src={iconAvatar} alt="avatar" />
                </div>
                <button
                    className="bg-lightGray font-aboreto"
                    onClick={toggleFollow}
                >
                    {followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 border-none p-2 rounded-md bg-lightGray">
                <div>
                    <div className="self-start text-xl font-aboreto">
                        {name}
                    </div>
                </div>
                <div className="self-center border-t pt-2 col-start-1 col-end-4 row-start-2 row-end-2 break-all text-l font-josefin">
                    {status}
                </div>
                <div className="justify-self-end mr-9">
                    <div className="text-l font-aboreto">
                        Country: {location.country}
                    </div>
                    <div className="text-l font-aboreto">
                        City: {location.city}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FriendsItem
