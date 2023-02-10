import iconAvatar from '../../img/icon-avatar.png'

function FriendsItem(props) {
    return (
        <section className="grid grid-cols-[20%,_80%] grid-rows-80px] mt-6 mx-6 gap-3">
            <div className="grid gird-row-[100%] gap-3">
                <div className="justify-self-center w-[50%] h-[50%]">
                    <img src={iconAvatar} alt="avatar" />
                </div>
                <button className="bg-lightGray font-aboreto">Follow</button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 border-none p-2 rounded-md bg-lightGray">
                <div>
                    <div className="self-start">here will be name</div>
                </div>
                <div className="self-center border-t pt-2 col-start-1 col-end-4 row-start-2 row-end-2 break-all">
                    status
                    jjakjsajfabjsadhfhgsdhfgahsgfajhsgfjasgdfsahfgsashgfhdfgak
                </div>
                <div className="justify-self-end">
                    <div>here will be country</div>
                    <div>here will be city</div>
                </div>
            </div>
        </section>
    )
}

export default FriendsItem
