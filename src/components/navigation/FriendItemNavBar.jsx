import React from 'react'
import img from '../../img/girlAvatar.jpg'

function FriendItemNavBar(props) {
    return (
        <div className="mx-3">
            <div className="w-[40px] h-[40px]">
                <img
                    className="rounded-full w-[100%] h-[100%] object-cover"
                    src={img}
                    alt="mini avatar"
                />
            </div>
            <div className="text-[14px] text-center text-mainGreen font-aboreto">
                {props.name}
            </div>
        </div>
    )
}

export default FriendItemNavBar
